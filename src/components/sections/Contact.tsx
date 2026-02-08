export default function Contact() {
    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center text-center px-6 py-24 max-w-2xl mx-auto"
        >
            <p className="font-mono text-[var(--green)] text-base mb-5 before:content-['04.'] before:mr-2">
                What's Next?
            </p>
            <h2 className="text-[clamp(40px,5vw,60px)] font-semibold text-[var(--lightest-slate)] mb-4">
                Get In Touch
            </h2>
            <p className="text-[var(--slate)] leading-relaxed mb-0 max-w-lg">
                <br></br>
                <br></br>
                <br></br>
                I'm currently looking for new opportunities and my inbox is always open.
                Whether you have a question or just want to say hi, I'll try my best
                to get back to you!
                <br></br>
                <br></br>
                <br></br>
            </p>
            <a href="mailto:aavashkuikel@gmail.com" className="btn big-btn">
                Say Hello
            </a>
        </section>
    );
}