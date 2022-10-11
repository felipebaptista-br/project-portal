import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";
import { IoIosArrowRoundBack, IoIosAddCircle } from "react-icons/io";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import api from "../../Services/api";
import $ from "jquery";

import "./style.css";

export default function Studio() {
    const [ progress, setProgress ] = useState(0)
    let params = useNavigate()

    const handleAdvanced = async () => {
        let name = document.querySelector('#input_name').value
        let description = document.querySelector('#input_description').value
        let link = document.querySelector('#input_link').value
        api.post("/add", {
            "title": name,
            "description": description,
            "link_github": link
        }).then((response) => {
            console.log(response)
        })
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
                        <form>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 0, display: 'flex', width: '50ch', margin: '12px 0' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="input_name" label="Nome do Projeto" variant="outlined" required />
                                <TextField id="input_description" label="Breve descrição" variant="outlined" required />
                                <TextField id="input_link" label="Link do repositório" variant="outlined" required />
                            </Box>
                        </form>
                        <section className="studio-section-buttons">
                            <button className="studio-button cancel-button" onClick={handleBack}>Cancelar</button>
                            <button className="studio-button avanced-button" onClick={handleAdvanced}>Avançar<BsArrowRightCircle size={20} /></button>
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
