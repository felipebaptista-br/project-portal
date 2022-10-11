import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Header from "../../Components/Header";
import Card from "../../Components/Card";
import Footer from "../../Components/Footer";
import api from "../../Services/api";

import "./style.css";

export default function Home() {
    const [ data, setData ] = useState([])
    const [ open, setOpen ] = useState(false)
    let params = useNavigate()

    const handlePageStudio = async () => {
        setOpen(!open)
        setTimeout(function() {
            params("/studio")
        }, 500)
    }

    useEffect(() => {
        api.get("/list").then((response) => {
            setData(response.data)
        })
        setData([])
    }, [])
    return(
        <main id="home">
            <Header />
            <div className="home-container">
                <div className="home-content">
                    {data.map((item) => {
                        return(
                            <Card item={item} />
                        )
                    })}
                    <article className="new-card" onClick={handlePageStudio} >
                        <IoAddOutline size={50} />
                    </article>
                </div>
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
