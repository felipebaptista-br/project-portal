import React from "react";
import Image from "../../Images/background-card-1.jpg";

import "./style.css";

export default function Card({ item }) {

    async function handleGitLink() {
        window.location.href = item.link_github
    } 

    return(
        <main className="card" onClick={handleGitLink} >
            <img src={Image} alt="Background Card" />
            <section className="card-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </section>
        </main>
    )
}
