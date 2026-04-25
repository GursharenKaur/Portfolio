"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Command, X } from "lucide-react";
import type { ChatMessage } from "@/types";
import { processQuery, getProjectIntro, suggestedQueries } from "@/lib/chat-engine";
import { projectSuggestedQueries } from "@/lib/chat-knowledge";

/* ── Animation easing ────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;

/* ── Typewriter hook ─────────────────────────────────────── */
function useTypewriter(text: string, speed = 18) {
  const [displayed, setDisplayed] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setIsDone(false);
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer);
        setIsDone(true);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayed, isDone };
}

/* ── Typewriter message component ────────────────────────── */
function TypewriterMessage({
  content,
  onDone,
}: {
  content: string;
  onDone: () => void;
}) {
  const { displayed, isDone } = useTypewriter(content, 14);

  useEffect(() => {
    if (isDone) onDone();
  }, [isDone, onDone]);

  return (
    <span>
      {displayed}
      {!isDone && <span className="terminal-cursor">▊</span>}
    </span>
  );
}

/* ── Main Component ──────────────────────────────────────── */
export default function TerminalChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [typingIndex, setTypingIndex] = useState<number | null>(null);
  const [contextProjectId, setContextProjectId] = useState<string | undefined>();

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  /* ── Keyboard shortcut: Ctrl+K / ⌘K ────────────────────── */
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  /* ── Auto-focus input when opened ───────────────────────── */
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  /* ── Auto-scroll to bottom on new messages ──────────────── */
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typingIndex]);

  /* ── Listen for project "learn more" events ─────────────── */
  useEffect(() => {
    function handleProjectChat(e: CustomEvent) {
      const { projectId, projectTitle } = e.detail;
      setContextProjectId(projectId);
      setIsOpen(true);

      // Clear previous messages & show project intro
      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        content: `Tell me about ${projectTitle}`,
        timestamp: new Date(),
      };

      const response = getProjectIntro(projectId);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content: response.answer,
        timestamp: new Date(),
      };

      setMessages([userMsg, botMsg]);
      setTypingIndex(1); // typewriter on the bot message
    }

    window.addEventListener(
      "open-terminal-chat" as any,
      handleProjectChat as EventListener
    );
    return () =>
      window.removeEventListener(
        "open-terminal-chat" as any,
        handleProjectChat as EventListener
      );
  }, []);

  /* ── Send message ───────────────────────────────────────── */
  function handleSend(queryOverride?: string) {
    const query = queryOverride ?? input.trim();
    if (!query || typingIndex !== null) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: query,
      timestamp: new Date(),
    };

    const context = contextProjectId
      ? { projectId: contextProjectId, category: "project" as const }
      : undefined;

    const response = processQuery(query, context);

    const botMsg: ChatMessage = {
      id: `bot-${Date.now()}`,
      role: "assistant",
      content: response.answer,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setTypingIndex(messages.length + 1); // index of the bot message
    setInput("");
  }

  /* ── Get follow-ups for the last bot message ────────────── */
  function getLastFollowUps(): string[] {
    if (messages.length === 0) return suggestedQueries;

    const lastBotMsg = [...messages].reverse().find((m) => m.role === "assistant");
    if (!lastBotMsg) return suggestedQueries;

    // Re-process to get follow-ups (we don't store them in messages)
    const context = contextProjectId
      ? { projectId: contextProjectId, category: "project" as const }
      : undefined;

    const lastUserMsg = [...messages].reverse().find((m) => m.role === "user");
    if (lastUserMsg) {
      const response = processQuery(lastUserMsg.content, context);
      return response.followUps.length > 0 ? response.followUps : suggestedQueries;
    }

    return suggestedQueries;
  }

  const showFollowUps = typingIndex === null;
  const followUps = showFollowUps ? getLastFollowUps() : [];

  /* ── Render ─────────────────────────────────────────────── */
  return (
    <>
      {/* ── Floating Terminal Bar ──────────────────────────── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: EASE }}
            onClick={() => setIsOpen(true)}
            className="terminal-bar"
            aria-label="Open terminal chat"
          >
            <div className="terminal-bar-inner">
              <Search className="w-3.5 h-3.5 text-violet-400/70" />
              <span className="terminal-bar-prompt">
                <span className="text-violet-400/70">›</span>{" "}
                <span className="text-[var(--color-text-muted)]">
                  ask me anything
                </span>
                <span className="terminal-cursor">▊</span>
              </span>
              <kbd className="terminal-kbd">
                <Command className="w-2.5 h-2.5" />
                <span>K</span>
              </kbd>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Backdrop ───────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="terminal-backdrop"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Expanded Terminal Panel ─────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="terminal-panel"
          >
            {/* Title bar */}
            <div className="terminal-titlebar">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[11px] font-mono text-[var(--color-text-muted)] ml-2">
                  gursharen@portfolio <span className="text-violet-400/60">~</span> /chat
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md hover:bg-white/10 transition-colors text-[var(--color-text-muted)] hover:text-white"
                aria-label="Close terminal"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Messages area */}
            <div ref={scrollRef} className="terminal-messages">
              {/* Welcome message if no messages */}
              {messages.length === 0 && (
                <div className="terminal-welcome">
                  <p className="text-violet-400/80 text-xs font-mono mb-1">
                    // welcome to gursharen&apos;s terminal
                  </p>
                  <p className="text-[var(--color-text-muted)] text-xs font-mono">
                    // type a question or click a suggestion below
                  </p>
                </div>
              )}

              {/* Message list */}
              {messages.map((msg, idx) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`terminal-message ${
                    msg.role === "user" ? "terminal-msg-user" : "terminal-msg-bot"
                  }`}
                >
                  <span className="terminal-msg-prefix">
                    {msg.role === "user" ? "$" : "→"}
                  </span>
                  <span className="terminal-msg-content">
                    {msg.role === "assistant" && idx === typingIndex ? (
                      <TypewriterMessage
                        content={msg.content}
                        onDone={() => setTypingIndex(null)}
                      />
                    ) : (
                      msg.content
                    )}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Suggested chips */}
            <div className="terminal-suggestions">
              {(messages.length === 0 ? suggestedQueries : followUps).map(
                (suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSend(suggestion)}
                    disabled={typingIndex !== null}
                    className="terminal-chip"
                  >
                    <span className="text-violet-400/60">$</span> {suggestion}
                  </button>
                )
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="terminal-input-area"
            >
              <span className="text-violet-400 font-mono text-sm font-bold">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type your question..."
                disabled={typingIndex !== null}
                className="terminal-input"
                aria-label="Chat input"
              />
              <kbd className="terminal-kbd-sm">
                esc
              </kbd>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
