import React from 'react'
import './Cadastro.css'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'


function Cadastro() {
  return (
    <>
    <Grid container alignItems="center">
        <Grid xs={6} className="imagemCadastro"></Grid>
        <Grid item xs={6} justifyContent="center">
            <Box display="flex" justifyContent="center">
                <Grid item xs={8}>
                    <form>
                        <Typography variant="h3" align="center" gutterBottom>Insira os seus dados</Typography>
                        <TextField variant="outlined" label="Nome" margin="normal" fullWidth></TextField>
                        <TextField type="email" variant="outlined" label="E-mail" margin="normal" fullWidth></TextField>
                        <TextField type="password" variant="outlined" label="Senha" margin="normal" fullWidth></TextField>
                        <TextField type="password" variant="outlined" label="Repita a sua Senha" margin="normal" fullWidth></TextField>
                        <TextField variant="outlined" label="Link da Foto de Perfil" margin="normal" fullWidth></TextField>
                        <Box marginY={2}>
                            <Link to='/login'>
                                <Button type="submit" variant="contained" color="primary" fullWidth>Cadastrar</Button>
                            </Link>
                        </Box>
                    </form>
                </Grid>
            </Box>
        </Grid>
    </Grid>
</>
  )
}

export default Cadastro