import ScrollyCanvas from "@/components/ScrollyCanvas";
import Resume from "@/components/Resume";
import ProjectList from "@/components/ProjectList";
import Certificates from "@/components/Certificates";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white selection:bg-purple-500 selection:text-white pb-24">
      {/* Global Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative">
        <ScrollyCanvas />
      </section>

      {/* Narrative Flow */}
      <Resume />

      <div id="wordpress">
        <ProjectList type="wordpress" title="WordPress Projects" />
      </div>

      <div id="custom">
        <ProjectList type="custom" title="Custom Projects" />
      </div>

      <div id="certificates">
        <Certificates />
      </div>

      <footer className="py-24 text-center text-gray-500 space-y-4 border-t border-white/5">
        <div className="flex justify-center gap-6 text-2xl">
          <a href="mailto:fakharkhan3312@gmail.com" className="hover:text-white transition-colors">Email</a>
          <a href="https://github.com/Muhammad-Fakhar-Khan" target="_blank" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/fakhar-khan-296608288/" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Muhammad Fakhar Khan. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
