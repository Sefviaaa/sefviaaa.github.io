import { X, ExternalLink, Github } from "lucide-react";
import { useEffect } from "react";

export const ProjectModal = ({ project, isOpen, onClose }) => {
    // Close modal on Escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen || !project) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative bg-card border border-border rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-primary/10 transition-colors z-10"
                    aria-label="Close modal"
                >
                    <X className="h-5 w-5 text-foreground" />
                </button>

                {/* Project Image */}
                <div className="relative h-64 md:h-96 overflow-hidden rounded-t-2xl">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        Featured Project
                    </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                    {/* Title and Tags */}
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-sm font-medium bg-primary/10 border border-primary/20 rounded-full text-primary"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3">About This Project</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {project.description || "Project description will be added here."}
                        </p>
                    </div>

                    {/* Key Features */}
                    {project.features && project.features.length > 0 && (
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                            <ul className="space-y-2">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                                        <span className="text-primary mt-1">•</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Technical Details */}
                    {project.technicalDetails && (
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-3">Technical Details</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {project.technicalDetails}
                            </p>
                        </div>
                    )}

                    {/* Links */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cosmic-button flex items-center justify-center gap-2"
                            >
                                <ExternalLink size={18} />
                                View Live Demo
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center flex items-center justify-center gap-2"
                            >
                                <Github size={18} />
                                View on GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
