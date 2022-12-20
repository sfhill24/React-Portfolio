import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";


function Project(props) {
    const {
        image,
        name,
        languages,
        gitHub,
        live
    } = props;

    return (
        <section>
            <img
                src={require(`../../assets/projectImage/${image}`)}
                alt={name}
                className="img-thumbnail image  mx-1"
            />
            <div className="projectInfo">
                <a href={live}>{name}</a>
                <a href={gitHub}><span id="gitHub"><FaGithub /></span></a>
                <p>{languages}</p>
            </div>
        </section>
    );
};

export default Project;