import type { ChatKnowledgeEntry, ChatContext } from "@/types";
import {
  knowledgeBase,
  fallbackResponses,
  greetingResponse,
  suggestedQueries,
  projectSuggestedQueries,
} from "./chat-knowledge";

/* ─────────────────────────────────────────────────────────────
   CHAT ENGINE
   ↳ Matches user queries to knowledge base entries using
     keyword scoring + contextual awareness.
───────────────────────────────────────────────────────────── */

/* ── Helpers ─────────────────────────────────────────────── */

/** Normalize text for matching: lowercase, strip punctuation */
function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Tokenize a string into individual words */
function tokenize(text: string): string[] {
  return normalize(text).split(" ").filter(Boolean);
}

/** Check if input looks like a greeting */
function isGreeting(input: string): boolean {
  const greetings = ["hi", "hello", "hey", "sup", "yo", "hola", "good morning", "good evening", "good afternoon", "whats up", "wassup"];
  const normalized = normalize(input);
  return greetings.some(
    (g) => normalized === g || normalized.startsWith(g + " ")
  );
}

/* ── Scoring ─────────────────────────────────────────────── */

interface ScoredEntry {
  entry: ChatKnowledgeEntry;
  score: number;
}

/**
 * Score a knowledge entry against the user's query.
 * Higher score = better match.
 *
 * Scoring strategy:
 *  - Exact keyword match in query:       +10 per keyword
 *  - Partial keyword overlap (substring): +4 per keyword
 *  - Word overlap with question field:    +2 per word
 *  - Context bonus (matching projectId):  +15
 *  - Context bonus (matching category):   +5
 */
function scoreEntry(
  entry: ChatKnowledgeEntry,
  query: string,
  queryTokens: string[],
  context?: ChatContext
): number {
  let score = 0;
  const normalizedQuery = normalize(query);

  // 1. Keyword matching (most important signal)
  for (const keyword of entry.keywords) {
    const normalizedKeyword = normalize(keyword);

    // Exact phrase found in query
    if (normalizedQuery.includes(normalizedKeyword)) {
      // Longer keyword matches are worth more
      score += 10 + normalizedKeyword.length;
    } else {
      // Check individual keyword words against query tokens
      const keywordTokens = tokenize(normalizedKeyword);
      const matchedTokens = keywordTokens.filter((kt) =>
        queryTokens.some((qt) => qt === kt || qt.includes(kt) || kt.includes(qt))
      );
      if (matchedTokens.length > 0) {
        score += 4 * matchedTokens.length;
      }
    }
  }

  // 2. Question similarity (secondary signal)
  const questionTokens = tokenize(entry.question);
  const questionOverlap = queryTokens.filter((qt) =>
    questionTokens.some((et) => et === qt)
  );
  score += 2 * questionOverlap.length;

  // 3. Context bonuses
  if (context?.projectId && entry.projectId === context.projectId) {
    score += 15;
  }
  if (context?.category && entry.category === context.category) {
    score += 5;
  }

  return score;
}

/* ── Main Query Function ─────────────────────────────────── */

export interface ChatResponse {
  answer: string;
  followUps: string[];
  matchedEntry?: ChatKnowledgeEntry;
}

/**
 * Process a user query and return the best matching response.
 *
 * @param query    - The user's question
 * @param context  - Optional context (e.g., which project the chat was opened from)
 */
export function processQuery(
  query: string,
  context?: ChatContext
): ChatResponse {
  const trimmedQuery = query.trim();

  // Handle empty input
  if (!trimmedQuery) {
    return {
      answer: "Type a question and I'll do my best to answer! Try asking about projects, skills, or experience.",
      followUps: suggestedQueries,
    };
  }

  // Handle greetings
  if (isGreeting(trimmedQuery)) {
    return {
      answer: greetingResponse.answer,
      followUps: greetingResponse.followUps ?? suggestedQueries,
      matchedEntry: greetingResponse,
    };
  }

  // Score all entries
  const queryTokens = tokenize(trimmedQuery);

  // If we have a project context, also search with that context
  const scored: ScoredEntry[] = knowledgeBase.map((entry) => ({
    entry,
    score: scoreEntry(entry, trimmedQuery, queryTokens, context),
  }));

  // Sort by score descending
  scored.sort((a, b) => b.score - a.score);

  const bestMatch = scored[0];

  // Minimum threshold — if the best score is too low, it's a miss
  const MINIMUM_SCORE = 6;

  if (bestMatch && bestMatch.score >= MINIMUM_SCORE) {
    const entry = bestMatch.entry;

    // Build follow-ups: entry-specific ones first, then general suggestions
    let followUps = entry.followUps ?? [];

    // If the matched entry is project-specific, add project follow-ups
    if (entry.projectId && projectSuggestedQueries[entry.projectId]) {
      const projectFollowUps = projectSuggestedQueries[entry.projectId];
      // Merge without duplicates
      followUps = [
        ...followUps,
        ...projectFollowUps.filter((pf) => !followUps.includes(pf)),
      ].slice(0, 4); // Max 4 follow-ups
    }

    return {
      answer: entry.answer,
      followUps,
      matchedEntry: entry,
    };
  }

  // No good match — return a random fallback
  const randomFallback =
    fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];

  return {
    answer: randomFallback,
    followUps: suggestedQueries,
  };
}

/* ── Context-Aware Project Query ─────────────────────────── */

/**
 * Generate the initial response when the terminal is opened
 * from a specific project's "learn more" button.
 */
export function getProjectIntro(projectId: string): ChatResponse {
  const context: ChatContext = { projectId, category: "project" };

  // Find the overview entry for this project
  const overviewEntry = knowledgeBase.find(
    (e) => e.projectId === projectId && e.id.endsWith("-overview")
  );

  if (overviewEntry) {
    const followUps = [
      ...(overviewEntry.followUps ?? []),
      ...(projectSuggestedQueries[projectId] ?? []),
    ]
      .filter((v, i, a) => a.indexOf(v) === i) // deduplicate
      .slice(0, 4);

    return {
      answer: overviewEntry.answer,
      followUps,
      matchedEntry: overviewEntry,
    };
  }

  // Fallback — just do a general query
  return processQuery(`Tell me about project ${projectId}`, context);
}

/* ── Export Suggested Queries for External Use ────────────── */
export { suggestedQueries, projectSuggestedQueries };
