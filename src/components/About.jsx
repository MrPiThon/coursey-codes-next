const About = () => {
    return (
        <section
            data-aos="fade-up"
            className="min-h-screen flex flex-col justify-center items-center text-center px-6"
        >
            <h2 className="text-3xl text-custom-accent font-bold mb-10">About Me</h2>
            <div className="flex flex-col lg:flex-row justify-center items-start gap-12 w-full max-w-6xl text-left">
                <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-semibold text-custom-accent mb-2 border-b border-custom-secondary pb-2">Past</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                            <span className="text-custom-secondary mt-1">•</span>
                            <span className="text-custom-accent">Discovered coding in freshman year of high school</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-custom-secondary mt-1">•</span>
                            <span className="text-custom-accent">Built games in Python using VSCode</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-custom-secondary mt-1">•</span>
                            <span className="text-custom-accent">Self-taught: Python, C#, Java, C++</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-custom-secondary mt-1">•</span>
                            <span className="text-custom-accent">Served in the Marines before diving into dev full-time</span>
                        </li>
                    </ul>
                </div>

                <div className="hidden lg:block w-px bg-custom-secondary h-auto" />

                <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-semibold text-custom-accent mb-2 border-b border-custom-secondary pb-2">Present</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                            <span className="text-custom-secondary mt-1">•</span>
                            <span className="text-custom-accent">Studying Software Dev at CIAT</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-custom-secondary mt-1">•</span>
                            <span className="text-custom-accent">Strongest in Java, JetBrains tools</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-custom-secondary mt-1">•</span>
                            <span className="text-custom-accent">Projects: Zombie Siege, RCBS, and this site</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-custom-secondary mt-1">•</span>
                            <span className="text-custom-accent">Focus on fun + challenge in dev</span>
                        </li>
                    </ul>
                </div>

                <div className="hidden lg:block w-px bg-custom-secondary h-auto" />

                <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-semibold text-custom-accent mb-2 border-b border-custom-secondary pb-2">Future</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                            <span className="text-custom-secondary mt-1">•</span>
                            <span className="text-custom-accent">Dream: work full-time on RCBS or Zombie Siege</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-custom-secondary mt-1">•</span>
                            <span className="text-custom-accent">Enjoys game dev most, but web is growing on me</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-custom-secondary mt-1">•</span>
                            <span className="text-custom-accent">Wants to create meaningful escapism for others</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-custom-secondary mt-1">•</span>
                            <span className="text-custom-accent">Hopes to release and scale RCBS soon</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;