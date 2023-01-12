import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {

    const [projects] = useState([
        {
            name: "My Ultimate Sports Tracker",
            decription: "An app that allows the user to see todays games, past games with scores, stats, and odds for their favorite NBA team.",
            languages: "JavaScript/CSS/HTML",
            image: "UltimateSportsTracker.png",
            gitHubLink: "https://github.com/hartsfieldt/project1-sportsstats",
            live: "https://hartsfieldt.github.io/project1-sportsstats/"
        },
        {
            name: "Flashaholic",
            decription: "An app that allows the user to create flashcards for any subject.",
            languages: "Node/MVC/MySQL",
            image: "Flashaholic.png",
            gitHubLink: "https://github.com/pmacdonald07/Flashaholic.png",
            live: "https://shielded-sea-30882.herokuapp.com/"
        },
        {
            name: "Work Day Schedule",
            decription: "An app that allows the user to keep track of their daily activities.",
            languages: "JavaScript/CSS/HTML",
            image: "WorkDayScheduler.png",
            gitHubLink: "https://github.com/sfhill24/Work-Day-Schedule.png",
            live: "https://sfhill24.github.io/Work-Day-Schedule/"
        },
        {
            name: "Note Taker",
            decription: "An app that allows the user to create, update, and delete notes.",
            languages: "JavaScript/CSS/HTML",
            image: "NoteTaker.png",
            gitHubLink: "https://github.com/sfhill24/Note-Taker",
            live: " https://notetaker-sfh.herokuapp.com/"
        },
        {
            name: "Monied",
            decription: "A website that offers crowdfunding for non-profits.",
            languages: "MERN",
            image: "Monied.png",
            gitHubLink: "https://github.com/kristacannady/Monied.git",
            live: " https://aqueous-scrubland-12058.herokuapp.com/"
        }
    ])

    return (
        <div className="flex-row">
            {projects.map((project, i) => (
                <Project
                    image={project.image}
                    name={project.name}
                    languages={project.languages}
                    gitHub={project.gitHubLink}
                    live={project.live}
                    key={project.name}
                />
            ))}
        </div>
    );

}


export default Portfolio;