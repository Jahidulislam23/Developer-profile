import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex space-x-3">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="text-blue-600 hover:text-blue-800 text-2xl bg-blue-100 rounded-full p-3 hover:bg-blue-200 transition"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://www.linkedin.com/in/jahidul-islam-431413379/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-blue-700 hover:text-blue-900 text-2xl bg-blue-100 rounded-full p-3 hover:bg-blue-200 transition"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="https://github.com/Jahidulislam23/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-gray-800 hover:text-black text-2xl bg-gray-200 rounded-full p-3 hover:bg-gray-300 transition"
      >
        <FaGithub />
      </a>
    </div>
  );
}
