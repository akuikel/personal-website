"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
    { name: "About", url: "#about" },
    { name: "Experience", url: "#experience" },
    { name: "Work", url: "#work" },
    { name: "Contact", url: "#contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={`fixed top-0 z-50 w-full px-6 md:px-12 transition-all duration-300 ${scrolled
                ? "py-4 bg-[rgba(10,25,47,0.85)] backdrop-blur-md shadow-lg"
                : "py-6 bg-transparent"
                } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
        >
            <nav className="flex items-center justify-between max-w-screen-xl mx-auto">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-[var(--green)] hover:text-[var(--green)] transition-all"
                    aria-label="home"
                >
                    <svg
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <polygon
                            fill="currentColor"
                            points="21,3 39,12 39,30 21,39 3,30 3,12"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <text
                            x="21"
                            y="27"
                            textAnchor="middle"
                            fill="var(--navy)"
                            fontSize="18"
                            fontWeight="bold"
                            fontFamily="var(--font-mono)"
                        >
                            A
                        </text>
                    </svg>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <ol className="flex gap-8 list-none">
                        {navLinks.map((link, i) => (
                            <li key={i}>
                                <a
                                    href={link.url}
                                    className="text-[var(--lightest-slate)] hover:text-[var(--green)] text-sm font-mono transition-colors"
                                >
                                    <span className="text-[var(--green)] mr-1">0{i + 1}.</span>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ol>
                    <a
                        href="https://drive.google.com/drive/folders/1HCxAVphco1lVndvC-zbNKlWMh4OfdyXF?usp=sharing"
                        className="btn text-sm py-1 px-3"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Button - simplified for now */}
                <button className="md:hidden text-[var(--green)]" aria-label="Menu">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>
            </nav>
        </header>
    );
}
