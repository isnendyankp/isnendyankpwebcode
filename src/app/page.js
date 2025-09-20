import Herosection from "./components/Herosection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <div className="container mt-24 mx-auto px-4 sm:px-6 lg:px-12 py-4">
        <Herosection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <ScrollToTopButton />
    </main>
  );
}
