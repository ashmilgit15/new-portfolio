"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
    title: string;
    description: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
    gradient: string;
}

const projects: Project[] = [
    {
        title: "Repurpose.ai",
        description: "An AI-powered content transformation platform that accepts URLs from blog posts, Reddit discussions, or any online content and transforms them into fresh, repurposed content. Perfect for content creators and marketers looking to maximize their content reach.",
        techStack: ["Next.js", "TypeScript", "AI/ML", "TailwindCSS", "Vercel"],
        liveUrl: "https://repurpose-ai-ashmil.vercel.app/",
        featured: true,
        gradient: "from-violet-500/20 to-cyan-500/20",
    },
    {
        title: "AI Frontier 2026",
        description: "A futuristic AI news and research platform built to track the transition to AGI. Features a 'Research Radar' for deep technical dives and an indexed toolkit of 60+ autonomous agents and AI tools.",
        techStack: ["HTML5", "Vanilla CSS", "JavaScript", "Automation"],
        liveUrl: "https://ashmilgit15.github.io/ai-frontier-2026/",
        githubUrl: "https://github.com/ashmilgit15/ai-frontier-2026",
        featured: true,
        gradient: "from-cyan-500/20 to-lime-500/20",
    },
    {
        title: "YT Automation",
        description: "A private YouTube automation dashboard that turns a topic or niche into fully produced videos and Shorts, with review controls, job management, and multi-channel publishing.",
        techStack: ["Next.js", "FastAPI", "Celery", "Redis", "PostgreSQL"],
        githubUrl: "https://github.com/ashmilgit15/yt-automation",
        featured: true,
        gradient: "from-red-500/20 to-amber-500/20",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-24 md:py-32 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-10"
                    style={{
                        background: "radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, transparent 70%)",
                    }}
                />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A showcase of products I&apos;ve built — from AI-powered applications to scalable SaaS platforms.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative w-full"
                        >
                            <div
                                className={`glass relative overflow-hidden rounded-2xl p-8 h-full flex flex-col transition-all duration-500 
                  hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1`}
                            >
                                {/* Gradient Top Bar */}
                                <div
                                    className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                                />

                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="flex items-center gap-1.5 mb-4">
                                        <Sparkles className="w-4 h-4 text-amber-400" />
                                        <span className="text-xs font-medium text-amber-400">Featured Project</span>
                                    </div>
                                )}

                                {/* Title */}
                                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted-foreground text-base leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="bg-secondary/50 hover:bg-secondary/80 text-xs font-medium"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3 justify-center">
                                    {project.liveUrl && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="glass border-border/50 hover:border-primary/50 hover:bg-primary/5 flex-1"
                                            asChild
                                        >
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                View Demo
                                            </a>
                                        </Button>
                                    )}
                                    {project.githubUrl && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="glass border-border/50 hover:border-primary/50 hover:bg-primary/5 flex-1"
                                            asChild
                                        >
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-4 h-4 mr-2" />
                                                Code
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* More Projects CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Button
                        variant="outline"
                        size="lg"
                        className="glass border-border/50 hover:border-primary/50 hover:bg-primary/5"
                        asChild
                    >
                        <a href="https://github.com/ashmilgit15" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View More on GitHub
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
