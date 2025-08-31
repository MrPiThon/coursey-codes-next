import Image from "next/image";

const Hero = () => {
    return (
        <div className="flex flex-row items-center justify-center h-screen px-10 text-lime-300 gap-10">
            <div className="max-w-xl text-left text-background p-4 w-screen bg-lime-300 bg-[url(/asfalt-dark.png)] rounded-lg">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Hello, <br/>I am Alex Coursey
                </h1>
                <p className="mt-4 md:text-2xl text-xs">
                    LET'S MAKE SOMETHING HAPPEN.
                </p>
            </div>

            <Image
                src="/alex_coursey_portrait.svg"
                height={800}
                width={800}
                alt="Portrait"
                className="max-w-[700px] w-full h-auto"
            />
        </div>
    );
};

export default Hero;
