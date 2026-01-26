import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Orebi E-Commerce",
    description: "Orebi is a modern,responsive e-commerce web application built using Fast and optimized React components.The project focuses on clean UI design,smooth user experience, and scalable state management for modern shopping workflows.User-Friendly interfaces. ",
    image: "/projects/orebi.png",
    tags: ["React", "TailwindCSS", "Redux"],
    demoUrl: "https://orebi-shopping-phi.vercel.app/",
    githubUrl: "https://github.com/codewithzilan/Orebi-Shopping",
  },
  {
    id: 2,
    title: "Real-Time Chatting Application",
    description: "YouChat is a real-time web-based chatting application that enables users to communicate instantly through a simple and responsive interface.It delivers fast message updates using modern frontend technologies and real-time communication methods.",
    image: "/projects/chat.png",
    tags: ["React", "Material UI", "Firebase"],
    demoUrl: "https://youchat-chatting-app-3tzc.vercel.app/",
    githubUrl: "https://github.com/codewithzilan/Youchat_Chatting_App",
  },
  {
    id: 3,
    title: "Library Management System",
    description: "Web-based Library Management System.Built as a full-stack application, it provides an intuitive interface for organizing library resources and simplifying administrative tasks for both users and staff.",
    image: "/projects/library.png",
    tags: ["React", "Tailwind CSS", "Firebase"],
    demoUrl: "https://library-management-qvr5wgf0e-mohammad-zilans-projects.vercel.app/",
    githubUrl: "https://github.com/codewithzilan/Library-Management-Application",
  },
  {
    id: 4,
    title: "Restaurent Booking Web",
    description: "A react-based single page application.Interactive UI components, dynamic content rendering, and responsive layouts.Built with JavaScript and React, the project demonstrates your ability to create and deploy scalable client-side applications",
    image: "/projects/res.png",
    tags: ["React", "Tailwind CSS", "React-Slick"],
    demoUrl: "https://restaurent-web-react.vercel.app/",
    githubUrl: "https://github.com/codewithzilan/Restaurent-web-React",
  },
  {
    id: 5,
    title: "Innovate",
    description: "A react-based single page application.Interactive UI components, dynamic content rendering, and responsive layouts.Built with JavaScript and React, the project demonstrates your ability to create and deploy scalable client-side applications",
    image: "/projects/innovate.png",
    tags: ["React", "React-Bootstrap"],
    demoUrl: "https://innovate-react-project.vercel.app/",
    githubUrl: "https://github.com/codewithzilan/Innovate-react-Project",
  },
  {
    id: 6,
    title: "Greenleaf Modern Hospital",
    description: "A modern private hospital website promoting compassionate, high-quality healthcare with advanced technology and personalized treatment.Website developed using Next.js & delivering high performance, scalability, and a responsive user experience.",
    image: "/projects/greenleaf.png",
    tags: ["TypeScript", "Next", "Tailwind CSS"],
    demoUrl: "https://greenleaf-hospital-web.vercel.app/",
    githubUrl: "https://github.com/codewithzilan/GreenLeaf_Hospital_Web",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/codewithzilan">
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
