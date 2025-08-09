import {Fragment} from "react";

const Projects = () => {
    return (
        <div className={"my-24 text-center text-2xl text-lime-300 min-h-screen w-screen"}>

            {/* ZOMBIE SIEGE */}
            <div className='min-h-screen w-screen bg-[url("/zombie-siege-project.svg")] bg-no-repeat bg-contain bg-center flex items-center justify-center text-lime-300 px-4'>
                <div className="flex flex-row gap-6 w-full max-w-[1400px]">
                    {/* WHAT */}
                    <div className="flex-1 backdrop-blur-sm p-6 rounded-xl shadow-lg text-lime-200 text-base md:text-lg leading-relaxed
                    hover:shadow-[0_0_30px_#7f5af0] transition duration-300 ease-in-out">
                        <h3 className="text-secondary font-bold text-xl mb-2">What</h3>
                        <p>
                            Zombie Siege is a competitive PvE wave-survival game where players team up to fend off endless
                            hordes of zombies, moving up through the ranks and salvaging loot to upgrade their gear.
                        </p>
                    </div>

                    {/* WHY */}
                    <div className="flex-1 backdrop-blur-sm p-6 rounded-xl shadow-lg text-lime-200 text-base md:text-lg leading-relaxed
                    hover:shadow-[0_0_30px_#7f5af0] transition duration-300 ease-in-out">
                        <h3 className="text-secondary font-bold text-xl mb-2">Why</h3>
                        <p>
                            Zombie Siege started off as a personal project to learn Java and Paper/SpigotAPI — but eventually,
                            it found a player base that wanted to see it grow. So, it became more than an experiment.
                        </p>
                    </div>

                    {/* HOW */}
                    <div className="flex-1 backdrop-blur-sm p-6 rounded-xl shadow-lg text-lime-200 text-base md:text-lg leading-relaxed
                    hover:shadow-[0_0_30px_#7f5af0] transition duration-300 ease-in-out">
                        <h3 className="text-secondary font-bold text-xl mb-2">How</h3>
                        <p>
                            Zombie Siege is built on a stack using Java, PaperAPI for Minecraft server development,
                            MongoDB for storage, GlitchTip for error tracking, and GitHub for version control. Production
                            is hosted on GalaxyMC; dev is self-hosted on DigitalOcean with Pterodactyl.
                        </p>
                    </div>
                </div>
            </div>

            {/* A1 Pools */}
            <div className='min-h-screen w-screen bg-[url("/a1-pools-project.svg")] bg-no-repeat bg-contain bg-center flex items-center justify-center text-lime-300 px-4'>
                <div className="flex flex-row gap-6 w-full max-w-[1400px]">
                    {/* WHAT */}
                    <div className="flex-1 backdrop-blur-sm p-6 rounded-xl shadow-lg text-lime-200 text-base md:text-lg leading-relaxed
                    hover:shadow-[0_0_30px_#7f5af0] transition duration-300 ease-in-out">
                        <h3 className="text-secondary font-bold text-xl mb-2">What</h3>
                        <p>
                            A1 Pools is a custom-built website for a local pool company, providing a landing page, service details,
                            and general information. It serves as a digital business card to attract new customers.
                        </p>
                    </div>

                    {/* WHY */}
                    <div className="flex-1 backdrop-blur-sm p-6 rounded-xl shadow-lg text-lime-200 text-base md:text-lg leading-relaxed
                    hover:shadow-[0_0_30px_#7f5af0] transition duration-300 ease-in-out">
                        <h3 className="text-secondary font-bold text-xl mb-2">Why</h3>
                        <p>
                            A1 Pools needed a simple, professional online presence to showcase their services and attract
                            new customers. The goal was to create just that - something that looks good and works well.
                        </p>
                    </div>

                    {/* HOW */}
                    <div className="flex-1 backdrop-blur-sm p-6 rounded-xl shadow-lg text-lime-200 text-base md:text-lg leading-relaxed
                    hover:shadow-[0_0_30px_#7f5af0] transition duration-300 ease-in-out">
                        <h3 className="text-secondary font-bold text-xl mb-2">How</h3>
                        <p>
                            A1 Pools was built using Next.js for the frontend, with an assortment of
                            addons - such as TailwindCSS for styling, animation libraries for effects, and
                            Vercel for hosting.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
