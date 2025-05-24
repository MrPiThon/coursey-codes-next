const ProjectCard = ({ title, description, url, image }) => {
    return (
        <div className="bg-custom-lighter rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto transition-transform hover:scale-105">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl text-custom-primary font-bold">{title}</h3>
                <p className="text-sm text-custom-secondary mt-2">{description}</p>
                <a href={url} className="text-custom-accent mt-4 block hover:underline">View Project</a>
            </div>
        </div>
    );
};

export default ProjectCard;
