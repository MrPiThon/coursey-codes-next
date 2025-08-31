const Contact = () => {
    return (
        <section
            className="relative min-h-screen w-screen flex items-center justify-center px-6 py-20"
            style={{
                backgroundImage: 'url("/contact-cover.svg")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
            }}
        >

            <div className="relative z-10 w-full max-w-[1200px]">

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Discord */}
                    <article className="group rounded-xl bg-white/5 backdrop-blur-sm ring-1 ring-white/10 hover:ring-lime-300/40 transition-shadow shadow-lg hover:shadow-[0_0_30px_rgba(127,90,240,0.25)]">
                        <div className="p-6 flex flex-col h-full">
                            <div className="flex items-center gap-3">
                                {/* Icon */}
                                <img
                                    src="/discord.png"
                                    alt="Discord"
                                    className="w-8 h-8 shrink-0 opacity-90 bg-lime-300 rounded-lg p-1"
                                />
                                <h3 className="text-lime-200 text-xl font-semibold">Discord</h3>
                            </div>

                            <p className="text-lime-100/80 text-sm md:text-base mt-3 leading-relaxed">
                                Best for quick questions, updates, and collaboration. Click below to join or DM.
                            </p>

                            <div className="mt-auto pt-6">
                                <a
                                    href="https://discord.gg/5Py2AYHXCc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-lime-400/20 text-lime-200 px-4 py-2 text-sm font-semibold hover:bg-lime-400/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
                                >
                                    Open Discord
                                    <span aria-hidden>↗</span>
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* Email */}
                    <article className="group rounded-xl bg-white/5 backdrop-blur-sm ring-1 ring-white/10 hover:ring-lime-300/40 transition-shadow shadow-lg hover:shadow-[0_0_30px_rgba(127,90,240,0.25)]">
                        <div className="p-6 flex flex-col h-full">
                            <div className="flex items-center gap-3">
                                <img
                                    src="/email.png"
                                    alt="Email"
                                    className="w-8 h-8 shrink-0 opacity-90 bg-lime-300 rounded-lg p-1"
                                />
                                <h3 className="text-lime-200 text-xl font-semibold">Email</h3>
                            </div>

                            <p className="text-lime-100/80 text-sm md:text-base mt-3 leading-relaxed">
                                Longer form is welcome. I check email almost daily.
                            </p>

                            <div className="mt-auto pt-6">
                                <a
                                    href="mailto:alexcoursey33@gmail.com?subject=Hello%20from%20Coursey.Codes"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-lime-400/20 text-lime-200 px-4 py-2 text-sm font-semibold hover:bg-lime-400/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
                                >
                                    Send Email
                                    <span aria-hidden>✉</span>
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* LinkedIn */}
                    <article className="group rounded-xl bg-white/5 backdrop-blur-sm ring-1 ring-white/10 hover:ring-lime-300/40 transition-shadow shadow-lg hover:shadow-[0_0_30px_rgba(127,90,240,0.25)]">
                        <div className="p-6 flex flex-col h-full">
                            <div className="flex items-center gap-3">
                                <img
                                    src="/linkedin.png"
                                    alt="LinkedIn"
                                    className="w-8 h-8 shrink-0 opacity-90 bg-lime-300 rounded-lg p-1"
                                />
                                <h3 className="text-lime-200 text-xl font-semibold">LinkedIn</h3>
                            </div>

                            <p className="text-lime-100/80 text-sm md:text-base mt-3 leading-relaxed">
                                Professional inquiries, networking, and opportunities.
                            </p>

                            <div className="mt-auto pt-6">
                                <a
                                    href="https://www.linkedin.com/in/alex-coursey-80388b298"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-lime-400/20 text-lime-200 px-4 py-2 text-sm font-semibold hover:bg-lime-400/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
                                >
                                    View LinkedIn
                                    <span aria-hidden>↗</span>
                                </a>
                            </div>
                        </div>
                    </article>
                </div>

                {/* Footnote preference */}
                <p className="mt-8 text-center text-lime-100/70 text-sm">
                    Prefer Discord for the fastest response. External links open in a new tab.
                </p>
            </div>
        </section>
    );
};

export default Contact;
