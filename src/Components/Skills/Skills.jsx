import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { id: 1, name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
  { id: 2, name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
  { id: 3, name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  { id: 4, name: 'React', icon: <FaReact className="text-cyan-500" /> },
  { id: 6, name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> }
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 100,
    },
  }),
  hover: {
    scale: 1.1,
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
    transition: { duration: 0.3 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="max-w-full mx-auto my-10 p-6">
        <h2 className="text-3xl font-bold mb-4 text-center"> My Skill Section</h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        These are the technologies and tools I use to build efficient, scalable, and user-friendly web applications.
        I continuously work on improving my skills and learning new technologies to deliver high-quality software.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {skills.map(({ id, name, icon }, index) => (
          <motion.div
            key={id}
            custom={index}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-lg cursor-pointer"
          >
            <div className="text-6xl mb-4">{icon}</div>
            <p className="text-lg font-semibold">{name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
