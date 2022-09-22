import React from "react";
import { BsGithub } from "react-icons/bs";
import "./style.css";

export default function Header() {

    return (
        <header className="stick" id="header">
            <BsGithub size={"6vh"} className="icon-github" />
        </header>
    )
}
