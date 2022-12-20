import React from "react";

function Header(props) {
    const {
        headerSelected
    } = props;

    return (
        <section>
            <h1 id="header1">{headerSelected}</h1>
        </section>
    );
}

export default Header; 