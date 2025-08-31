import Image from "next/image";

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] px-4 sm:px-6 md:px-10 gap-6 md:gap-10 text-lime-300 w-full animate-slide-up">
            <div className="w-full max-w-xl bg-lime-300 bg-[url(/asfalt-dark.png)] rounded-lg text-background p-4 sm:p-6 shadow-md">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    Hello, <br />I am Alex Coursey
                </h1>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-2xl">
                    LET&apos;S MAKE SOMETHING HAPPEN.
                </p>
            </div>

            <Image
                src="/alex_coursey_portrait.svg"
                height={800}
                width={800}
                alt="Portrait"
                priority
                sizes="(max-width: 768px) 70vw, (max-width: 1200px) 40vw, 700px"
                className="w-2/3 sm:w-1/2 md:w-full max-w-xs sm:max-w-sm md:max-w-[700px] h-auto transition duration-500 hover:scale-[1.02]"
            />
        </section>
    );
};

export default Hero;
