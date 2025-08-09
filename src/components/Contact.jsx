const Contact = () => {
    return (
        <div className={"my-24 text-center text-2xl text-lime-300 min-h-screen w-screen"}>
            <div className='min-h-screen w-screen bg-[url("/contact-cover.svg")] bg-no-repeat bg-contain bg-center flex items-center justify-center text-lime-300 px-4'>
                <div className="flex flex-row gap-6 w-full max-w-[1400px]">
                    <div className="flex-1 backdrop-blur-sm p-6 rounded-xl shadow-lg text-lime-200 text-base md:text-lg leading-relaxed
                    hover:shadow-[0_0_30px_#7f5af0] transition duration-300 ease-in-out">
                        <h3 className="text-secondary font-bold text-xl mb-2">Discord</h3>
                    </div>

                    <div className="flex-1 backdrop-blur-sm p-6 rounded-xl shadow-lg text-lime-200 text-base md:text-lg leading-relaxed
                    hover:shadow-[0_0_30px_#7f5af0] transition duration-300 ease-in-out">
                        <h3 className="text-secondary font-bold text-xl mb-2">Email</h3>
                    </div>

                    <div className="flex-1 backdrop-blur-sm p-6 rounded-xl shadow-lg text-lime-200 text-base md:text-lg leading-relaxed
                    hover:shadow-[0_0_30px_#7f5af0] transition duration-300 ease-in-out">
                        <h3 className="text-secondary font-bold text-xl mb-2">LinkedIn</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;