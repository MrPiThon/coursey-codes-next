"use client";

import React, { useRef } from "react";

/** Reusable link card */
const LinkCard = ({ href, children }) => (
    <a
        href={href}
        className="text-lime-200 backdrop-blur-sm rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 font-bold shadow-lg hover:underline hover:shadow-[0_0_30px_#7f5af0] transition duration-300 ease-in-out text-base sm:text-lg active:scale-[0.98]"
        target="_blank"
        rel="noopener noreferrer"
    >
        {children}
    </a>
);

/** Reusable info card */
const InfoCard = ({ title, children }) => (
    <div className="flex-1 min-w-0 backdrop-blur-sm p-5 sm:p-6 rounded-xl shadow-lg text-lime-200 text-sm sm:text-base md:text-lg leading-relaxed hover:shadow-[0_0_30px_#7f5af0] transition duration-300 ease-in-out">
        <h3 className="text-secondary font-bold text-lg sm:text-xl mb-2">{title}</h3>
        <p>{children}</p>
    </div>
);

/** One project section */
const ProjectSection = React.forwardRef(
    ({ bgUrl, linkHref, linkText, cards, onPrev, onNext }, ref) => (
        <section
            ref={ref}
            style={{
                backgroundImage: `url(${bgUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
            }}
            className="relative min-h-[85vh] w-full flex items-center justify-center text-lime-300 px-4 my-10 sm:my-12 animate-fade-in"
        >
            <div className="flex flex-col items-center w-full max-w-[1400px] gap-6 sm:gap-8">
                <LinkCard href={linkHref}>{linkText}</LinkCard>

                <div className="flex flex-col md:flex-row gap-5 sm:gap-6 w-full">
                    {cards.map(({ title, body }, i) => (
                        <InfoCard key={i} title={title}>
                            {body}
                        </InfoCard>
                    ))}
                </div>
            </div>

            {onPrev && (
                <button
                    onClick={onPrev}
                    className="absolute left-3 sm:left-6 bottom-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 bg-lime-400/20 hover:bg-lime-400/40 text-lime-200 rounded-full p-3 sm:p-4 shadow-lg transition hover:scale-110 focus:outline-none"
                    aria-label="Previous Project"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 15l-7-7-7 7" />
                    </svg>
                </button>
            )}

            {onNext && (
                <button
                    onClick={onNext}
                    className="absolute right-3 sm:right-6 bottom-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 bg-lime-400/20 hover:bg-lime-400/40 text-lime-200 rounded-full p-3 sm:p-4 shadow-lg transition hover:scale-110 focus:outline-none"
                    aria-label="Next Project"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 9l7 7 7-7" />
                    </svg>
                </button>
            )}
        </section>
    )
);

const Projects = () => {
    const sectionRefs = [useRef(null), useRef(null), useRef(null)];
    const scrollTo = (i) =>
        sectionRefs[i]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    return (
        <div className="my-16 sm:my-24 text-center text-2xl text-lime-300 w-full">
            <ProjectSection
                ref={sectionRefs[0]}
                bgUrl="/zombie-siege-project.svg"
                linkHref=""
                linkText="Website Coming Soon"
                cards={[
                    { title: "What", body: "Zombie Siege is a competitive PvE wave-survival game where players team up to fend off endless hordes of zombies, moving up through the ranks and salvaging loot to upgrade their gear." },
                    { title: "Why", body: "Zombie Siege started off as a personal project to learn Java and Paper/SpigotAPI — but eventually, it found a player base that wanted to see it grow. So, it became more than an experiment." },
                    { title: "How", body: "Zombie Siege is built on a stack using Java, PaperAPI for Minecraft server development, MongoDB for storage, GlitchTip for error tracking, and GitHub for version control. Production is hosted on GalaxyMC; dev is self-hosted on DigitalOcean with Pterodactyl." },
                ]}
                onNext={() => scrollTo(1)}
            />
            <ProjectSection
                ref={sectionRefs[1]}
                bgUrl="/a1-pools-project.svg"
                linkHref="https://a1-pools.netlify.app/"
                linkText="🌐 Visit the Site"
                cards={[
                    { title: "What", body: "A1 Pools is a custom-built website for a local pool company, providing a landing page, service details, and general information. It serves as a digital business card to attract new customers." },
                    { title: "Why", body: "A1 Pools needed a simple, professional online presence to showcase their services and attract new customers. The goal was to create just that — something that looks good and works well." },
                    { title: "How", body: "Built with Next.js on the frontend, styled with TailwindCSS, enhanced with tasteful animations, and hosted on Vercel for fast, global delivery." },
                ]}
                onPrev={() => scrollTo(0)}
                onNext={() => scrollTo(2)}
            />
            <ProjectSection
                ref={sectionRefs[2]}
                bgUrl="/kern-county-vending-project.svg"
                linkHref="https://kcvending-website.vercel.app"
                linkText="🌐 Visit the Site"
                cards={[
                    { title: "What", body: "Kern County Vending is a, as per usual, custom-built website for a once-planned business venture of mine. The business never materialized, but at least I got a website out of it." },
                    { title: "Why", body: "Every business needs a website, and I wanted to be able to showcase my business to potential customers." },
                    { title: "How", body: "Like most of my projects, KCVending was built with Next.js on the frontend, styled with TailwindCSS, and hosted on Vercel for fast, global delivery." },
                ]}
                onPrev={() => scrollTo(1)}
            />
        </div>
    );
};

export default Projects;
