import React from "react";
import { 
    EnvelopeIcon,
    CommandLineIcon,
    CpuChipIcon,
    ServerIcon,
    CloudIcon,
    CodeBracketIcon,
    WindowIcon,
    BeakerIcon,
    RocketLaunchIcon,
    ChartBarIcon,
    CubeIcon,
    CircleStackIcon,
    WrenchScrewdriverIcon,
    ArrowPathIcon,
    BoltIcon,
    PresentationChartLineIcon,
    ChevronDownIcon
} from "@heroicons/react/24/outline";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaPlaneDeparture } from "react-icons/fa";

const techIcons = {
    "Python": CommandLineIcon,
    "JavaScript": CodeBracketIcon,
    "C++": CpuChipIcon,
    "Groovy": BeakerIcon,
    "React": RocketLaunchIcon,
    "MaterialUI": CubeIcon,
    "ChartJS": ChartBarIcon,
    "Jenkins": CircleStackIcon,
    "Docker": ServerIcon,
    "SonarQube": WrenchScrewdriverIcon,
    "AWS": CloudIcon,
    "RHEL7": ServerIcon,
    "Cross-platform development": WindowIcon,
    "CI/CD": ArrowPathIcon,
    "Test Automation": BoltIcon,
    "Performance Optimization": PresentationChartLineIcon,
    "Tailwind CSS": BeakerIcon,
    "Vite": BoltIcon,
    "Heroicons": CubeIcon
};

const ExternalLink = ({ href, children, className }) => (
    <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
    >
        {children}
    </a>
);

const TechTag = ({ tech }) => {
    const Icon = techIcons[tech];
    return (
        <span className="tech-tag group inline-flex items-center gap-2">
            {Icon && <Icon className="w-5 h-5 group-hover:text-purple-400" />}
            {tech}
        </span>
    );
};

const ProjectCard = ({ project }) => (
    <ExternalLink 
        href={project.link}
        className="block group project-card"
    >
        <article className="space-y-4">
            <h3 className="project-title">
                {project.title}
            </h3>
            <p className="project-description">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                    <TechTag key={index} tech={tech} />
                ))}
            </div>
        </article>
    </ExternalLink>
);

const SkillCard = ({ category, items }) => (
    <div className="space-y-4">
        <h3 className="skill-category capitalize">{category}</h3>
        <div className="flex flex-wrap gap-3">
            {items.map((item, index) => (
                <TechTag key={index} tech={item} />
            ))}
        </div>
    </div>
);

const SocialIcon = ({ href, icon: Icon }) => (
    <a href={href} className="social-link group" target="_blank" rel="noopener noreferrer">
        {Icon === EnvelopeIcon ? (
            <Icon className="w-7 h-7 transform transition-all duration-300 hover:-translate-y-1" />
        ) : (
            <Icon className="transform transition-all duration-300 hover:-translate-y-1" />
        )}
    </a>
);

function About() {
    const skills = {
        languages: ["Python", "JavaScript", "C++", "Groovy"],
        frontend: ["React", "MaterialUI", "ChartJS", "Tailwind CSS", "Vite", "Heroicons"],
        devops: ["Jenkins", "Docker", "SonarQube"],
        platforms: ["AWS", "RHEL7", "Cross-platform development"],
        practices: ["CI/CD", "Test Automation", "Performance Optimization"]
    };

    const projects = [
        {
            title: "Groovy Shared Library",
            description: "Standardized CI/CD pipeline library supporting 7+ desktop applications, improving delivery efficiency and reducing deployment failures by 20%.",
            tech: ["Groovy", "Jenkins", "SonarQube"],
            link: "https://github.com/satvik-bot/groovy-shared-lib"
        },
        {
            title: "Engineering Process Automation Tool",
            description: "Developed a critical automation tool for aircraft systems integration workflow, reducing process execution time by 20% and improving reliability with 80% fewer reported issues.",
            tech: ["Python", "RHEL7", "Process Automation"],
            link: "https://github.com/satvik-bot/process-automation"
        },
        {
            title: "Crypto Tracker",
            description: "ReactJS web app tracking 1000+ cryptocurrencies with real-time data and interactive visualizations using CoinGecko API.",
            tech: ["React", "MaterialUI", "ChartJS"],
            link: "https://github.com/satvik-bot/crypto-tracker"
        }
    ];

    const socialLinks = [
        { href: "mailto:satviksagar340@gmail.com", icon: EnvelopeIcon },
        { href: "https://github.com/satvik-bot", icon: FiGithub },
        { href: "https://www.linkedin.com/in/satvik-sagar-sharma-861b63194/", icon: FiLinkedin }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="space-y-6">
                    <h1>Satvik Sagar</h1>
                    <h2 className="role-title">Software Engineer at <ExternalLink href="https://www.airbus.com" className="text-purple-500 hover:underline inline-flex items-center group">
                        Airbus <FaPlaneDeparture className="opacity-0 group-hover:opacity-100 ml-3 transform transition-all duration-300 -translate-x-2 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </ExternalLink></h2>
                    <p className="hero-description">
                        Focused on CI/CD and automation. Building tools that streamline development workflows
                        and improve software delivery processes. Currently working on aircraft systems integration
                        and pipeline optimization.
                    </p>
                </div>

                <div className="social-links-container">
                    {socialLinks.map((link, index) => (
                        <SocialIcon key={index} {...link} />
                    ))}
                </div>

                <ChevronDownIcon className="scroll-indicator w-6 h-6" />
            </section>

            {/* Content Sections */}
            <div className="space-y-24 py-16">
                {/* Projects Section */}
                <section className="space-y-12">
                    <h2 className="section-heading">Featured Projects</h2>
                    <div className="grid grid-cols-1 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section className="space-y-12">
                    <h2 className="section-heading">Skills & Technologies</h2>
                    <div className="skills-container">
                        {Object.entries(skills).map(([category, items], index) => (
                            <SkillCard 
                                key={index} 
                                category={category} 
                                items={items} 
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;