import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import "./style.css";

export default function Form() {
    
    return (
        <form>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 0, display: 'flex', width: '50ch', margin: '12px 0' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField label="Nome do Projeto" variant="outlined" required />
                <TextField label="Breve descrição" variant="outlined" required />
                <TextField label="Link do repositório" variant="outlined" required />
            </Box>
        </form>
    )
}
