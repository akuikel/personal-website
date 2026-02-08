import { Github, Linkedin, Twitter, Instagram, Codepen } from "lucide-react";

const socialLinks = [
    { name: "GitHub", url: "https://github.com/akuikel", icon: Github },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/aavash-kuikel",
        icon: Linkedin,
    },
];

export default function SocialSidebar() {
    return (
        <div className="hidden lg:block fixed bottom-0 left-10 z-10">
            <ul className="flex flex-col items-center gap-5 list-none after:content-[''] after:block after:w-px after:h-24 after:bg-[var(--light-slate)]">
                {socialLinks.map((social, i) => (
                    <li key={i}>
                        <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 text-[var(--light-slate)] hover:text-[var(--green)] hover:-translate-y-1 inline-block transition-all"
                            aria-label={social.name}
                        >
                            <social.icon size={20} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
