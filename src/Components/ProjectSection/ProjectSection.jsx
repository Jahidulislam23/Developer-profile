import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiNodedotjs,
  SiTailwindcss,
} from 'react-icons/si';

// Mapping technology names to icons and colors
const techIconMap = {
  JavaScript: { icon: <SiJavascript />, color: 'text-yellow-400 bg-yellow-100' },
  'React.js': { icon: <SiReact />, color: 'text-cyan-500 bg-cyan-100' },
  HTML: { icon: <SiHtml5 />, color: 'text-orange-600 bg-orange-100' },
  CSS: { icon: <SiCss3 />, color: 'text-blue-600 bg-blue-100' },
  MongoDB: { icon: <SiMongodb />, color: 'text-green-700 bg-green-100' },
  'Node.js': { icon: <SiNodedotjs />, color: 'text-green-600 bg-green-100' },
  'Tailwind CSS': { icon: <SiTailwindcss />, color: 'text-teal-400 bg-teal-100' },
};

// Project data array with description replacing problem and solution
const projects = [
  {
    id: 1,
    title: "Mango Tree",
    imageUrl: "https://i.ibb.co/PzGxQ2SN/pexels-adones-bentulan-1782098895-28502222.jpg",
    description: "An interactive platform to track mango tree growth stages, allowing users to easily understand different stages and receive timely notifications.",
    features: ["Growth Stage Tracking", "Notifications", "User Dashboard"],
    technologies: ["JavaScript", "React.js", "HTML", "CSS"],
    githubUrl: [
      "https://github.com/Jahidulislam23/mango-tree",
      "https://github.com/Jahidulislam23/mango-tree-server"
    ],
    liveUrls: "https://mangotree-demo1.example.com",
  },
  {
    id: 2,
    title: "Online Group Study",
    imageUrl: "https://i.ibb.co/nMGb0FmF/focused-students-using-tablet-discussing-information.jpg",
    description: "An online group study platform for students to create assignments, submit work, and hold group discussions remotely.",
    features: ["Real-time Chat", "Assignment Management", "Collaborative Tools"],
    technologies: ["JavaScript", "React.js", "Node.js", "MongoDB", "CSS"],
    githubUrl:[
      "https://github.com/Jahidulislam23/online-group-study",
      "https://github.com/Jahidulislam23/online-group-study-server-side"
    ],
    liveUrls: "https://groupstudy-demo1.example.com",
  },
  {
    id: 3,
    title: "Tour Guide Platform",
    imageUrl: "https://i.ibb.co/VY6kNy3d/ashraful-pranto-s-Z90-UEv0-CHw-unsplash.jpg",
    description: "A user-friendly platform for tourists to browse, book, and review tour guides and packages easily.",
    features: ["Tour Booking", "Guide Profiles", "Review System"],
    technologies: ["JavaScript", "React.js", "MongoDB", "Tailwind CSS"],
    githubUrl:[
      "https://github.com/Jahidulislam23/tour-client-side",
      "https://github.com/Jahidulislam23/tour-server-side"
    ],
    liveUrls: "https://assignment-12-d0654.web.app",
  },
];

// Framer Motion variants for animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } },
  hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)", transition: { duration: 0.3 } },
};

export default function Projects() {
  return (
    <section className="max-w-full mx-auto p-6 my-10 space-y-16">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-16"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover="hover"
            className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden"
          >
            {/* Left: Project Image */}
            <div className="md:w-1/2 w-full">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Project Details */}
            <div className="md:w-1/2 w-full p-6 space-y-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>

              {/* Description instead of Problem and Solution */}
              <div>
                <h4 className="font-semibold">Project Description</h4>
                <p className="text-gray-700">{project.description}</p>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-semibold">Features</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold">Technologies Used</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, idx) => {
                    const techInfo = techIconMap[tech];
                    return (
                      <span
                        key={idx}
                        className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${techInfo?.color || 'bg-gray-200 text-gray-800'}`}
                      >
                        {techInfo?.icon}
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Buttons: Live Link + GitHub Repos */}
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href={project.liveUrls}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                >
                  Live Link
                </a>

                {project.githubUrl.map((url, idx) => (
                  <a
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                  >
                    GitHub Repo {idx + 1}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
