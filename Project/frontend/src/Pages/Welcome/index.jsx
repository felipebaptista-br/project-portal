import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Footer from "../../Components/Footer";

import "./style.css";

export default function Welcome() {
    const [ open, setOpen ] = useState(false)
    let params = useNavigate()

    const handlePageHome = async () => {
        setOpen(!open)
        setTimeout(function() {
            params("/home")
        }, 1800)
    }

    return(
        <main id="welcome">
            <div className="welcome-container background">
                <h2>Portal de Projetos</h2>
                <p>Esse portal de projetos é uma aplicação simples que consiste em levar o usuário até os repositórios de projetos existentes do meu github, funciona como um portfólio de front-end apresentando os cards</p>
                <button onClick={() => handlePageHome()}>
                    Avançar
                    <BsArrowRightCircle size={20} style={{ marginLeft: "1rem" }} />
                </button>
            </div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Footer />
        </main>
    )
}
