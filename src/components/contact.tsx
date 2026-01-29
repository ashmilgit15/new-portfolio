"use client";

import { motion } from "framer-motion";
import { Mail, Github, Twitter, Linkedin, ArrowUpRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const socialLinks = [
    {
        name: "GitHub",
        icon: Github,
        href: "https://github.com/ashmilp",
        color: "hover:text-white hover:bg-gray-800",
    },
    {
        name: "Twitter",
        icon: Twitter,
        href: "https://twitter.com",
        color: "hover:text-sky-400 hover:bg-sky-400/10",
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://linkedin.com",
        color: "hover:text-blue-500 hover:bg-blue-500/10",
    },
];

export function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setEmail("");
        setMessage("");
        alert("Thanks for reaching out! I'll get back to you soon.");
    };

    return (
        <section id="contact" className="py-24 md:py-32 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
                    style={{
                        background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 60%)",
                    }}
                />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Let&apos;s <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Ready to bring your idea to life? I&apos;m always excited to work on new projects and collaborate with passionate people.
                    </p>
                </motion.div>

                {/* Contact Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass rounded-3xl p-8 md:p-12 glow"
                >
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Left - Direct Contact */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
                                <p className="text-muted-foreground text-sm">
                                    Feel free to reach out directly — I typically respond within 24 hours.
                                </p>
                            </div>

                            {/* Email Card */}
                            <motion.a
                                href="mailto:ashmildax@gmail.com"
                                className="group flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 border border-border/30 hover:border-primary/30 transition-all duration-300"
                                whileHover={{ x: 5 }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-grow">
                                    <p className="text-sm text-muted-foreground">Email me at</p>
                                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                                        ashmildax@gmail.com
                                    </p>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </motion.a>

                            {/* Social Links */}
                            <div>
                                <p className="text-sm text-muted-foreground mb-4">Find me on</p>
                                <div className="flex gap-3">
                                    {socialLinks.map((social) => (
                                        <motion.a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-12 h-12 rounded-xl glass border border-border/30 flex items-center justify-center transition-all duration-300 ${social.color}`}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right - Quick Message Form */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Quick Message</h3>
                                <p className="text-muted-foreground text-sm">
                                    Have a quick question? Drop me a message right here.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <Input
                                        type="email"
                                        placeholder="Your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="bg-secondary/30 border-border/30 focus:border-primary/50 h-12"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Your message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-border/30 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none text-foreground placeholder:text-muted-foreground transition-all"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <motion.div
                                                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            />
                                            Sending...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            <Send className="w-4 h-4" />
                                            Send Message
                                        </span>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-muted-foreground text-sm">
                        Looking forward to creating something amazing together! 🚀
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
