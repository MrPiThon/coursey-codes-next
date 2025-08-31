import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function HomePage() {
    return (
        <div className="max-w-screen overflow-x-hidden animate-fade-in">
            <Header />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
