import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const featuredProjects = [
    {
        title: "Alone Orbit",
        description:
            "Real-time virtual coworking platform with WebRTC video rooms, screen sharing, and presence tracking. Supports 500+ users across 50+ concurrent sessions with cohort-based room management and sub-second state synchronization via Socket.io.",
        tech: ["React", "Node.js", "WebRTC", "Socket.io", "MongoDB"],
        github: null,
        external: "https://www.aloneorbit.com/",
        image: "/projects/alone-orbit.png",
    },
    {
        title: "Voice Agent",
        description:
            "AI-powered voice agent SaaS automating business phone lines with appointment scheduling and lead capture. Integrates Twilio Voice API, OpenAI GPT-4, and ElevenLabs speech synthesis to serve 100+ SMB clients with 95%+ call resolution accuracy.",
        tech: ["Next.js", "Twilio", "OpenAI", "ElevenLabs", "PostgreSQL"],
        github: null,
        external: "https://www.aipersa.com/",
        image: "/projects/voice-agent.png",
    },
    {
        title: "AI Email Agent",
        description:
            "Intelligent email client with AI-powered triage, categorization, and smart reply generation. Built for 100+ users with real-time webhook synchronization via Google Cloud Pub/Sub, achieving 85% reduction in API calls.",
        tech: ["Next.js", "Gmail API", "Google Gemini", "OAuth 2.0", "Pub/Sub"],
        github: "https://github.com/akuikel/ai-email-agent",
        external: null,
        image: "/projects/ai-email.png",
    },
    {
        title: "Job Portal",
        description:
            "Enterprise-grade job recruitment platform using Spring Boot microservices architecture. Features a normalized MySQL schema with 8+ tables, secure authentication with Spring Security, supporting 500+ concurrent users.",
        tech: ["Spring Boot", "Spring Security", "MySQL", "React", "Docker"],
        github: "https://github.com/akuikel/jobportal",
        external: null,
        image: "/projects/job-platform.png",
    },
];

export default function Projects() {
    return (
        <section id="work" className="px-6 md:px-24 lg:px-48 py-24">
            <h2 className="numbered-heading before:content-['03.']">
                Some Things I've Built
            </h2>

            <div className="space-y-56">
                {featuredProjects.map((project, i) => (
                    <div
                        key={i}
                        className={`relative grid grid-cols-12 items-center gap-2 ${i % 2 === 0 ? "" : "text-right"
                            }`}
                    >
                        {/* Project Image */}
                        <a
                            href={project.external || project.github || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`col-span-12 md:col-span-7 relative h-[400px] md:h-[450px] rounded overflow-hidden group bg-[var(--light-navy)] block cursor-pointer ${i % 2 === 0 ? "md:col-start-1" : "md:col-start-6"
                                } row-start-1`}
                        >
                            <div className="absolute inset-0 bg-[var(--green)] mix-blend-multiply opacity-40 group-hover:opacity-0 transition-opacity z-10" />
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-contain object-center group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 768px) 100vw, 60vw"
                            />
                        </a>

                        {/* Project Content */}
                        <div
                            className={`col-span-12 md:col-span-5 relative z-20 row-start-1 ${i % 2 === 0
                                ? "md:col-start-7 md:text-right"
                                : "md:col-start-1 md:text-left"
                                }`}
                        >
                            <p className="font-mono text-sm text-[var(--green)] mb-2">
                                Featured Project
                            </p>
                            <h3 className="text-2xl font-semibold text-[var(--lightest-slate)] mb-5">
                                <a
                                    href={project.external || project.github || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[var(--green)] transition-colors"
                                >
                                    {project.title}
                                </a>
                            </h3>
                            <div className="bg-[var(--light-navy)] rounded shadow-lg mb-5" style={{ padding: '2rem' }}>
                                <p className="text-[var(--light-slate)] text-sm leading-relaxed text-left">
                                    {project.description}
                                </p>
                            </div>
                            <ul
                                className={`flex flex-wrap gap-3 font-mono text-xs text-[var(--light-slate)] mb-4 ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"
                                    }`}
                            >
                                {project.tech.map((tech, j) => (
                                    <li key={j}>{tech}</li>
                                ))}
                            </ul>
                            <div
                                className={`flex gap-4 ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"
                                    }`}
                            >
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[var(--lightest-slate)] hover:text-[var(--green)] transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <Github size={20} />
                                    </a>
                                )}
                                {project.external && (
                                    <a
                                        href={project.external}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[var(--lightest-slate)] hover:text-[var(--green)] transition-colors"
                                        aria-label="External Link"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
