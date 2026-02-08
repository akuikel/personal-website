export default function Hero() {
    return (
        <section className="flex flex-col justify-center min-h-screen px-6 md:px-24 lg:px-48 pt-24">
            <div className="max-w-4xl">
                <p
                    className="font-mono text-[var(--green)] mb-5 ml-1 opacity-0 fade-in"
                    style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
                >
                    Hi, my name is
                </p>
                <h1
                    className="text-[clamp(40px,8vw,80px)] font-semibold text-[var(--lightest-slate)] leading-tight mb-0 opacity-0 fade-in"
                    style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
                >
                    Aavash Kuikel.
                </h1>
                <h2
                    className="text-[clamp(30px,6vw,70px)] font-semibold text-[var(--slate)] leading-tight mt-2 opacity-0 fade-in"
                    style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
                >
                    I build things for the web.
                </h2>
                <p
                    className="mt-[70px] max-w-xl text-[var(--slate)] text-lg leading-relaxed opacity-0 fade-in"
                    style={{ animationDelay: "400ms", animationFillMode: "forwards", marginTop: "70px" }}
                >
                    I'm a Full Stack Engineer shipping AI-powered solutions with
                    React/TypeScript frontend, Spring Boot APIs & MongoDB. Currently
                    focused on building exceptional digital experiences at{" "}
                    <a
                        href="https://aipersa.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--green)] hover:underline"
                    >
                        Persa
                    </a>
                    .
                </p>
                <div
                    className="mt-[70px] opacity-0 fade-in"
                    style={{ animationDelay: "500ms", animationFillMode: "forwards", marginTop: "70px" }}
                >
                    <a href="#contact" className="btn big-btn">
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
}
