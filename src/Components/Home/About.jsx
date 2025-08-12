import React from "react";

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="max-w-full mx-auto p-6 bg-white rounded shadow-md my-10 text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          I am a passionate Frontend Developer with strong expertise in building
          responsive, user-friendly websites and <br/> web applications. Skilled in
          HTML, CSS, JavaScript, and React, I focus on creating seamless user
          experiences with clean and efficient code.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          I enjoy turning designs into interactive interfaces, optimizing
          performance, and ensuring cross-browser compatibility.<br/> Continuously
          learning new technologies and best practices to deliver modern,
          scalable solutions.
        </p>
      </section>
    </div>
  );
};

export default About;
