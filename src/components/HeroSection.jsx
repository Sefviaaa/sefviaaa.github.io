import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ProjectModal } from "./ProjectModal";
import { projects } from "../data/projects";

const featuredProjects = projects; // Use all projects for the carousel

export const HeroSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24"
    >
      <div className="container max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              <span className="opacity-0 animate-fade-in block">Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1 block">
                Sefvia Lie
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3 max-w-2xl">
              I design and build scalable data pipelines that transform raw data
              into actionable insights. Passionate about creating reliable,
              well-tested, and production-ready data infrastructure.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Side - Project Gallery Carousel */}
          <div className="opacity-0 animate-fade-in order-1 lg:order-2">
            <div className="relative group">
              {/* Project Card */}
              <button onClick={openModal} className="block w-full text-left cursor-pointer">
                <div className="gradient-border rounded-2xl overflow-hidden shadow-2xl bg-card hover:shadow-primary/20 transition-shadow">
                  <div className="relative">
                    <img
                      src={featuredProjects[currentProject].image}
                      alt={featuredProjects[currentProject].title}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      Featured Project
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{featuredProjects[currentProject].title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {featuredProjects[currentProject].tags.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium bg-primary/10 border border-primary/20 rounded-full text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>

              {/* Navigation Arrows - Only show if more than 1 project */}
              {featuredProjects.length > 1 && (
                <>
                  <button
                    onClick={prevProject}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-full p-2 hover:bg-primary/10 transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="h-6 w-6 text-primary" />
                  </button>
                  <button
                    onClick={nextProject}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-full p-2 hover:bg-primary/10 transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Next project"
                  >
                    <ChevronRight className="h-6 w-6 text-primary" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="flex justify-center gap-2 mt-4">
                    {featuredProjects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProject(index)}
                        className={`h-2 rounded-full transition-all ${index === currentProject
                          ? "w-8 bg-primary"
                          : "w-2 bg-primary/30 hover:bg-primary/50"
                          }`}
                        aria-label={`Go to project ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={featuredProjects[currentProject]}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};
