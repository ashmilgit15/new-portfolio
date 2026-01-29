"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Zap, Rocket } from "lucide-react";

const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Python", icon: "🐍" },
    { name: "Node.js", icon: "💚" },
    { name: "TailwindCSS", icon: "🌊" },
    { name: "OpenAI", icon: "🤖" },
    { name: "Firebase", icon: "🔥" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Git", icon: "📦" },
    { name: "Figma", icon: "🎨" },
    { name: "Vercel", icon: "▲" },
];

const highlights = [
    {
        icon: Code2,
        title: "Full-Stack Development",
        description: "Building complete web and mobile applications from concept to deployment.",
    },
    {
        icon: Cpu,
        title: "AI Integration",
        description: "Leveraging cutting-edge AI tools to create intelligent, automated solutions.",
    },
    {
        icon: Zap,
        title: "Rapid Prototyping",
        description: "Turning ideas into working products in record time with modern tools.",
    },
    {
        icon: Rocket,
        title: "SaaS Products",
        description: "Creating scalable software-as-a-service applications that solve real problems.",
    },
];

export function About() {
    return (
        <section id="about" className="py-24 md:py-32 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full opacity-10"
                    style={{
                        background: "radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%)",
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
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Starting early, thinking big — turning ambitious ideas into reality.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="glass rounded-2xl p-8 glow hover-glow transition-all duration-500">
                            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                                Hey! I&apos;m <span className="font-semibold text-primary">Ashmil P</span>,
                                a 15-year-old developer passionate about building the future with code and AI.
                                What started as curiosity has evolved into a mission to create products that
                                make a real difference.
                            </p>
                            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                                I specialize in <span className="text-accent font-medium">full-stack development</span> and
                                <span className="text-accent font-medium"> AI integration</span>, working across all major
                                programming languages and tech stacks. From SaaS platforms to intelligent web applications,
                                I build solutions that scale.
                            </p>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                My age is my advantage — I grew up with AI, I think in systems, and I ship fast.
                                Let&apos;s build something extraordinary together.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right - Highlights Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                className="glass rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-xl font-semibold text-center mb-8">
                        Technologies I Work With
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="glass px-4 py-2.5 rounded-xl flex items-center gap-2 cursor-default hover:border-primary/30 transition-all duration-300"
                            >
                                <span className="text-lg">{tech.icon}</span>
                                <span className="text-sm font-medium">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
