export default function EmailSidebar() {
    return (
        <div className="hidden lg:block fixed bottom-0 right-10 z-10">
            <div className="flex flex-col items-center gap-5 after:content-[''] after:block after:w-px after:h-24 after:bg-[var(--light-slate)]">
                <a
                    href="mailto:aavashkuikel@gmail.com"
                    className="font-mono text-xs tracking-widest text-[var(--light-slate)] hover:text-[var(--green)] hover:-translate-y-1 transition-all"
                    style={{ writingMode: "vertical-rl" }}
                >
                    aavashkuikel@gmail.com
                </a>
            </div>
        </div>
    );
}
