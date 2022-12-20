import React from "react";
import resume from "../../assets/Sample-Resume.pdf";

function Resume() {

    return (
        <section className="my-5">
            <a href={resume} download="resume">
               Download my resume
            </a>

            <div>
                <h2>Front-End Proficiencies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div>
                <h2>Back-End Proficiencies</h2>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </section>
    )
}

export default Resume;