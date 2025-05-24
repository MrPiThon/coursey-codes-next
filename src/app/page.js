import { projects } from '@/lib/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import ProjectCard from '@/components/ProjectCard';

export default function HomePage() {
    return (
        <div className="px-6">
            <About />

            <div className="my-12 border-t border-custom-secondary"></div>

            <section className="py-12">
                <h1 className="text-4xl text-center text-custom-accent font-bold mb-10 animate-slide-in-from-bottom">
                    Projects
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div key={project.title} data-aos="zoom-in-up" data-aos-delay={idx * 100}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </section>

            <div className="my-12 border-t border-custom-secondary"></div>

            <Contact />
        </div>
    );
}
