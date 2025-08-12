import React from "react";
import { motion } from "motion/react";
import DownloadButton from "./DownloadButton";
import SocialLinks from "./SocialLinks";

const AboutSection = () => {
  return (
    <div>
      <div className="hero bg-white ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <img
            src="https://i.ibb.co.com/K4nWhZV/428627388-422342900356265-7434904533576471488-n.jpg"
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { duration: 4 } }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            >
              Hello i am{" "}
              <motion.span
                animate={{
                  color: ["#ff5733", "#33ff33", "#Ba33ff"],
                  transition: { duration: 4, repeat: Infinity },
                }}
              >
                <br />
                Jahidul
              </motion.span>{" "}
              islam
            </motion.h1>
            <p className="py-6">
              A Frontend Developer is responsible for designing and developing
              the user interface of websites and web applications, creating
              responsive and user-friendly layouts using HTML, CSS, and
              JavaScript, implementing dynamic content with frameworks like
              React, fetching and displaying data from APIs, optimizing
              performance, and ensuring cross-browser and device compatibility.
            </p>
            <div className="pt-5 pb-5">
                <SocialLinks></SocialLinks>
            </div>
                <div>
                    <DownloadButton></DownloadButton>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
