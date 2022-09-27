import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";
import { IoIosArrowRoundBack, IoIosAddCircle } from "react-icons/io";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Header from "../../Components/Header";
import Form from "../../Components/Form";
import Footer from "../../Components/Footer";
import $ from "jquery";

import "./style.css";

export default function Studio() {
    const [ progress, setProgress ] = useState(0)
    let params = useNavigate()

    const handleAdvanced = async () => {
        $("#progress").show()
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
              if (oldProgress === 100) {
                $("#progress").hide()
                $("#studio_content").hide()
                $("#sucess_card").show()
                $("#studio_result").show()
                return 0;
              }
              const diff = 30
              return Math.min(oldProgress + diff, 100)
            });
        }, 500)
        return () => {
            clearInterval(timer)
        };
    }

    const handleBack = async () => {
        params("/home")
    }

    const handleReloadPage = async () => {
        window.location.reload(true)
    }

    useEffect(() => {
        $("#progress").hide()
        $("#sucess_card").hide()
        $("#studio_result").hide()
    },[])
    return(
        <main id="studio">
            <Header />
                <div className="studio-container">
                    <div id="studio_content" className="studio-content">
                        <h2>Adicionar novo Projeto</h2>
                        <Form />
                        <section className="studio-section-buttons">
                            <button className="studio-button cancel-button" onClick={handleBack}>Cancelar</button>
                            <button className="studio-button avanced-button" onClick={handleAdvanced}>Avançar <BsArrowRightCircle size={20} /></button>
                        </section>
                        <Box sx={{ width: '100%', marginTop: '1rem' }}>
                            <LinearProgress id="progress" variant="determinate" value={progress} />
                        </Box>
                    </div>
                    <Stack id="sucess_card" sx={{ width: '100%' }} spacing={2}>
                        <Alert variant="filled" severity="success">
                            Card adicionado com Sucesso!
                        </Alert>
                    </Stack>
                    <div id="studio_result" className="studio-result">
                        <IoIosArrowRoundBack className="studio-icon-back" onClick={handleBack} style={{ cursor: "pointer" }} size={70} />
                        <button className="studio-button studio-result-button" onClick={handleReloadPage}>Criar novo Card <IoIosAddCircle size={25} /></button>
                    </div>
                </div>
            <Footer />
        </main>
    )
}
