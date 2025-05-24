const Contact = () => {
    return (
        <section
            data-aos="fade-up"
            className="py-12 text-center">
            <h2 className="text-3xl text-custom-accent font-bold mb-6">Contact Me</h2>
            <div className="flex justify-center space-x-6">
                <a href="https://discord.gg/5Py2AYHXCc"><img src="/discord.png" alt="Discord" className="w-8 h-8 transition-transform hover:scale-110 hover:animate-pulse" /></a>
                <a href="https://github.com/MrPiThon"><img src="/github.png" alt="GitHub" className="w-8 h-8 transition-transform hover:scale-110 hover:animate-pulse" /></a>
                <a href="https://www.linkedin.com/in/alex-coursey-80388b298/"><img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8 transition-transform hover:scale-110 hover:animate-pulse" /></a>
                <a href="mailto:alexcoursey33@gmail.com"><img src="/email.png" alt="Email" className="w-8 h-8 transition-transform hover:scale-110 hover:animate-pulse" /></a>
            </div>
        </section>
    );
};

export default Contact;
