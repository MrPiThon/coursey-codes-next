import {Fragment} from "react";

const About = () => {
    return (
        <div className={"my-24 text-center text-2xl text-lime-300 min-h-screen w-screen"}>
            <div className='min-h-screen w-screen bg-[url("/about-me-cover.svg")] bg-no-repeat bg-contain bg-center flex items-center justify-center text-lime-300 px-4'>
                <div className="flex flex-row gap-6 w-full max-w-[1400px]">
                    <div className="flex-1 backdrop-blur-sm p-6 rounded-xl shadow-lg text-lime-200 text-base md:text-lg leading-relaxed
                    hover:shadow-[0_0_30px_#7f5af0] transition duration-300 ease-in-out">
                        <h3 className="text-secondary font-bold text-xl mb-2">My Past</h3>
                        <p>
                            I grew up in California, where I developed a passion for programming in High School.
                            My first language was Python, but I quickly transitioned to Java and C#. <br/>
                            After high school, I spent 3 years in the U.S. Marine Corps, where I learned many things -
                            but the important being discipline, teamwork and leadership. All things that I apply to my
                            work today.
                        </p>
                    </div>

                    <div className="flex-1 backdrop-blur-sm p-6 rounded-xl shadow-lg text-lime-200 text-base md:text-lg leading-relaxed
                    hover:shadow-[0_0_30px_#7f5af0] transition duration-300 ease-in-out">
                        <h3 className="text-secondary font-bold text-xl mb-2">My Present</h3>
                        <p>
                            I am currently pursuing an Applied Bachelor's degree in Software Development at
                            California Institute of Applied Technology. <br/>
                            I spend most of my time working on personal projects, such as Zombie Siege - or this website,
                            using them as ways of learning new things and improving my skills.
                        </p>
                    </div>

                    <div className="flex-1 backdrop-blur-sm p-6 rounded-xl shadow-lg text-lime-200 text-base md:text-lg leading-relaxed
                    hover:shadow-[0_0_30px_#7f5af0] transition duration-300 ease-in-out">
                        <h3 className="text-secondary font-bold text-xl mb-2">My Future</h3>
                        <p>
                            I am looking forward to graduating in 2027, and starting a career in Software Development. <br/>
                            Ideally, I can make my living working on a personal project, or customer projects. <br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;