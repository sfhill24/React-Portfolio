import React from "react";
import { FaGithub, FaStackOverflow, FaLinkedin } from "react-icons/fa";


function Footer() {
    return (
        <section className="footer" >
            <a href="https://github.com/sfhill24"><span id="gitHub"><FaGithub size={50} color="white" hover /></span></a>
            <a href="https://www.linkedin.com/in/shelly-foxworth-hill/"><span id="linkedIn"><FaLinkedin size={50} color="white"/></span></a>
            <a href="https://stackoverflow.com/users/19614764/shelly-foxworth-hill"><span id="stackOverflow"><FaStackOverflow size={50} color="white"/></span></a>
        </section>
    );
}

export default Footer;