"use client";

import Image from "next/image";

const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
];

export default function About() {
    return (
        <section id="about" className="px-6 md:px-24 lg:px-48 py-24">
            <h2 className="numbered-heading before:content-['01.']">About Me</h2>

            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12">
                <div>
                    <p className="text-[var(--slate)] mb-4 leading-relaxed">
                        Hello! My name is Aavash and I'm a Full Stack Engineer based in
                        Nashville, TN. I enjoy building things that live on the internet,
                        whether that be websites, applications, or anything in between.
                        <br></br>
                        <br></br>

                    </p>
                    <p className="text-[var(--slate)] mb-4 leading-relaxed">
                        My goal is to always build products that provide pixel-perfect,
                        performant experiences. I'm currently working as an Application Developer at{" "}
                        <a
                            href="https://persa.app"
                            className="text-[var(--green)] hover:underline"
                        >
                            Persa
                        </a>
                        , where I engineer high-throughput backend APIs in Spring Boot and
                        design RESTful microservices.

                    </p>
                    <p className="text-[var(--slate)] mb-4 leading-relaxed">

                        <br></br>  I'm pursuing my Bachelor's in Computer Science at{" "}
                        <a
                            href="https://www.fisk.edu"
                            className="text-[var(--green)] hover:underline"
                        >
                            Fisk University
                        </a>{" "}
                        with a minor in Mathematics, maintaining a 3.94 GPA. Here are a few
                        technologies I've been working with recently: <br></br><br></br>
                    </p>

                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-5 font-mono text-sm text-[var(--slate)]">
                        {skills.map((skill, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <span className="text-[var(--green)]">▹</span>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative group mx-auto md:mx-0">
                    <div className="relative w-[280px] h-[280px] rounded bg-[var(--green)] overflow-hidden">
                        <Image
                            src="/me.jpg"
                            alt="Aavash Kuikel"
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-[var(--green)] mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity" />
                    </div>
                    <div className="absolute -z-10 w-[280px] h-[280px] rounded border-2 border-[var(--green)] top-5 left-5 group-hover:top-4 group-hover:left-4 transition-all" />
                </div>
            </div>
        </section>
    );
}
