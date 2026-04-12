import Hero from "@/components/sections/Hero";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative bg-black">
      <Hero />
      
      <div className="space-y-12">
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>

      {/* Grid background overlay for the whole page */}
      <div 
        className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </main>
  );
}
