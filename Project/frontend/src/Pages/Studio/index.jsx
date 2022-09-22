import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Header from "../../Components/Header";
import Form from "../../Components/Form";
import Footer from "../../Components/Footer";
import $ from "jquery";

import "./style.css";

export default function Studio() {
    const [progress, setProgress] = useState(0)
    let params = useNavigate()

    const handleAdvanced = async () => {
        $("#progress").show()
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
              if (oldProgress === 100) {
                params("/home")
                return 0;
              }
              const diff = 30;
              return Math.min(oldProgress + diff, 100);
            });
        }, 500);
      
        return () => {
            clearInterval(timer);
        };
    }

    const handleCancel = async () => {
        params("/home")
    }

    useEffect(() => {
        $("#progress").hide()
    },[])
    return(
        <main id="studio">
            <Header />
                <div className="studio-container">
                    <div className="studio-content">
                        <h2>Adicionar novo Projeto</h2>
                        <Form />
                        <section className="studio-section-buttons">
                            <button className="studio-button cancel-button" onClick={handleCancel}>Cancelar</button>
                            <button className="studio-button avanced-button" onClick={handleAdvanced}>Avançar <BsArrowRightCircle size={20} /></button>
                        </section>
                        <Box sx={{ width: '100%', marginTop: '1rem' }}>
                            <LinearProgress id="progress" variant="determinate" value={progress} />
                        </Box>
                    </div>
                </div>
            <Footer />
        </main>
    )
}
