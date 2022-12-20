import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';


function Navigation(props) {
    const {
        setContactSelected,
        setHeaderSelected
    } = props;

    const navigate = useNavigate();

    return (
        <header className="flex-row px-1">
            <h2>
                <span>Shelly Foxworth-Hill</span>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a onClick={() => {
                            navigate('about');
                            setContactSelected(false);
                            setHeaderSelected("About Me")
                        }
                        }>About Me</a>
                    </li>
                    <li className={"mx-2"}>
                        <a onClick={() => {
                            navigate('contact');
                            setContactSelected(true);
                            setHeaderSelected("Contact")
                        }
                        }>Contact</a>
                    </li>
                    <li className="mx-2">
                        <a onClick={() => {
                            navigate('portfolio');
                            setContactSelected(false);
                            setHeaderSelected("Portfolio")
                        }
                        }>Portfolio</a>
                    </li>
                    <li className="mx-2">
                        <a onClick={() => {
                            navigate('resume');
                            setContactSelected(false);
                            setHeaderSelected("Resume")
                        }
                        }>Resume</a>
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default Navigation;