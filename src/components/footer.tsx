"use client";

import { motion } from "framer-motion";
import { Heart, Github, Instagram } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-12 border-t border-border/30">
            {/* Gradient line at top */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-6"
                >
                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/ashmilgit15"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center w-10 h-10 rounded-full glass border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                            aria-label="GitHub Profile"
                        >
                            <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                        <a
                            href="https://instagram.com/4_shmil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center w-10 h-10 rounded-full glass border border-border/50 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
                            aria-label="Instagram Profile"
                        >
                            <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-pink-500 transition-colors" />
                        </a>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
                        {/* Logo & Copyright */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>© {currentYear}</span>
                            <span className="font-semibold text-foreground">Ashmil P</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                                Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> and code
                            </span>
                        </div>

                        {/* Quick Links */}
                        <div className="flex items-center gap-6 text-sm">
                            <a
                                href="#about"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                About
                            </a>
                            <a
                                href="#projects"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Projects
                            </a>
                            <a
                                href="#contact"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
