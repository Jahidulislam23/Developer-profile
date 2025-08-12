import React from "react";
import SocialLinks from "../Home/SocialLinks";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal text-black-content p-10">
        <aside>
        
        </aside>
        <nav>
            <img
          className="w-12 h-12 rounded-full "
          src="https://i.ibb.co.com/K4nWhZV/428627388-422342900356265-7434904533576471488-n.jpg"
          alt=""
        />
          <p>
            Web Developer.
          </p>
          <h6 className="footer-title">Social Link</h6>
          <div className="grid grid-flow-col gap-4">
            <SocialLinks></SocialLinks>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
