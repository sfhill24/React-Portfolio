import React from "react";
import {FaGithub, FaStackOverflow, FaLinkedin} from "react-icons/fa";

function Footer() {
    return (
        <section>
            <span id="gitHub"><FaGithub/></span>
            <span id="linkedIn"><FaLinkedin/></span>
            <span id="stackOverflow"><FaStackOverflow/></span>
        </section>
    );
}




export default Footer;