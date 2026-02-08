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
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            if (currentScrollY > lastScrollY && currentScrollY > 100 && !menuOpen) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, menuOpen]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [menuOpen]);

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
                    className="z-[60] text-[var(--green)] hover:text-[var(--green)] transition-all"
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

                {/* Desktop Navigation Links */}
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

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden z-[60] relative transition-all duration-300 ${menuOpen ? "text-[var(--green)]" : "text-[var(--green)]"
                        }`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    <div className="w-8 h-8 flex items-center justify-center">
                        <div className="relative w-6 h-[2px]">
                            <span
                                className={`absolute left-0 w-full h-full bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                                    }`}
                            ></span>
                            <span
                                className={`absolute left-0 w-full h-full bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"
                                    }`}
                            ></span>
                            <span
                                className={`absolute left-0 w-full h-full bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                                    }`}
                            ></span>
                        </div>
                    </div>
                </button>

                {/* Mobile Navigation Drawer */}
                <aside
                    className={`fixed top-0 right-0 z-[55] w-[min(75vw,400px)] h-screen bg-[var(--light-navy)] shadow-(-10px_0px_30px_-15px_rgba(2,12,27,0.7)) flex items-center justify-center transition-all duration-300 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <nav className="flex flex-col items-center gap-10 w-full">
                        <ol className="flex flex-col items-center gap-8 list-none w-full">
                            {navLinks.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link.url}
                                        onClick={() => setMenuOpen(false)}
                                        className="text-[var(--lightest-slate)] hover:text-[var(--green)] text-lg font-mono transition-colors"
                                    >
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="text-[var(--green)] text-sm">0{i + 1}.</span>
                                            {link.name}
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ol>
                        <a
                            href="https://drive.google.com/drive/folders/1HCxAVphco1lVndvC-zbNKlWMh4OfdyXF?usp=sharing"
                            className="btn py-4 px-12"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                    </nav>
                </aside>

                {/* Blur Overlay */}
                <div
                    className={`fixed inset-0 z-50 bg-[rgba(2,12,27,0.7)] backdrop-blur-sm transition-all duration-300 md:hidden ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                    onClick={() => setMenuOpen(false)}
                ></div>
            </nav>
        </header>
    );
}
