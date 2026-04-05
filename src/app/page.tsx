export default function Home() {
  return (
    <main className="animated-bg min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="font-heading gradient-text text-6xl font-bold">
        Gursharen Kaur
      </h1>
      <p className="text-[var(--color-text-secondary)] text-lg">
        Design system loaded ✅ — Step 1 complete
      </p>
      <div className="flex gap-3">
        <span className="tech-pill">Next.js 15</span>
        <span className="tech-pill">TypeScript</span>
        <span className="tech-pill">Tailwind v4</span>
      </div>
      <div className="glass rounded-2xl p-6 text-center max-w-sm">
        <p className="text-sm text-[var(--color-text-secondary)]">
          Glass card preview — beautiful dark UI is ready 🎨
        </p>
      </div>
    </main>
  );
}
