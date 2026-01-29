"use client";

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-[#030712]" />

            {/* Dot pattern */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `radial-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Hexagon pattern overlay */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
                <defs>
                    <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                        <polygon
                            points="25,0 50,14.4 50,43.4 25,57.7 0,43.4 0,14.4"
                            fill="none"
                            stroke="rgba(139, 92, 246, 0.8)"
                            strokeWidth="0.5"
                            transform="translate(0, -7.2)"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hexagons)" />
            </svg>

            {/* Circuit lines pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
                <defs>
                    <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
                        {/* Horizontal lines */}
                        <line x1="0" y1="20" x2="40" y2="20" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="1" />
                        <line x1="60" y1="20" x2="100" y2="20" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="1" />
                        <line x1="0" y1="80" x2="30" y2="80" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="1" />
                        <line x1="70" y1="80" x2="100" y2="80" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="1" />
                        {/* Vertical lines */}
                        <line x1="50" y1="0" x2="50" y2="35" stroke="rgba(139, 92, 246, 0.6)" strokeWidth="1" />
                        <line x1="50" y1="65" x2="50" y2="100" stroke="rgba(139, 92, 246, 0.6)" strokeWidth="1" />
                        {/* Connection dots */}
                        <circle cx="40" cy="20" r="2" fill="rgba(59, 130, 246, 0.8)" />
                        <circle cx="60" cy="20" r="2" fill="rgba(59, 130, 246, 0.8)" />
                        <circle cx="50" cy="35" r="2" fill="rgba(139, 92, 246, 0.8)" />
                        <circle cx="50" cy="65" r="2" fill="rgba(139, 92, 246, 0.8)" />
                        <circle cx="30" cy="80" r="2" fill="rgba(6, 182, 212, 0.8)" />
                        <circle cx="70" cy="80" r="2" fill="rgba(6, 182, 212, 0.8)" />
                        {/* Node box */}
                        <rect x="42" y="42" width="16" height="16" rx="2" fill="none" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>

            {/* Diagonal lines accent */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 100px,
            rgba(59, 130, 246, 0.3) 100px,
            rgba(59, 130, 246, 0.3) 101px
          )`,
                }}
            />

            {/* CSS-animated gradient orbs */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[100px] animate-float-slow" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[100px] animate-float-slow-delayed" />
            <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] rounded-full bg-cyan-500/15 blur-[100px] animate-float-slower" />

            {/* Glowing grid lines */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.8) 1px, transparent 1px)
          `,
                    backgroundSize: "100px 100px",
                }}
            />

            {/* Corner accent gradients */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-purple-500/10 via-transparent to-transparent" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-cyan-500/5 via-transparent to-transparent" />

            {/* Mesh gradient overlay */}
            <div
                className="absolute inset-0 opacity-50"
                style={{
                    background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 50% 60% at 60% 80%, rgba(6, 182, 212, 0.06) 0%, transparent 50%)
          `,
                }}
            />

            {/* Vignette effect */}
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse at center, transparent 0%, rgba(3, 7, 18, 0.6) 100%)",
                }}
            />
        </div>
    );
}
