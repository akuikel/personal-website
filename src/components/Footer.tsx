export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center py-4 text-center font-mono text-xs text-[var(--light-slate)]">
            <a
                href="https://github.com/akuikel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--green)] transition-colors"
            >
                <p>Designed & Built by Aavash Kuikel</p>
            </a>
        </footer>
    );
}
