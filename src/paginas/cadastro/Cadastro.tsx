import React, { ChangeEvent, useEffect, useState } from 'react'
import './Cadastro.css'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import User from '../../models/User'
import { cadastrarUsuario } from '../../service/Service'


function Cadastro() {

    let history = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            foto: '',
            senha: ''
        })
    
    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',    
            foto: '',
            senha: ''     
        })

    useEffect(() => {
        if(userResult.id != 0) {
            history('/login')
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        if(confirmarSenha == user.senha) {
        try {
            await cadastrarUsuario('/usuarios/cadastrar', user, setUserResult)
            alert('Usuário cadastrado com sucesso!')
        } catch(error) {
            alert('Dados inconsistentes.Verifique as informações de cadastro.')
         }
        } else {
            alert('As senhas não coincidem!')
            setConfirmarSenha('')
            setUser({
                ...user,
                senha:''
            })
        }
    }
    return (
        <>
            <Grid container alignItems="center">
                <Grid xs={6} className="imagemCadastro"></Grid>
                <Grid item xs={6} justifyContent="center">
                    <Box display="flex" justifyContent="center">
                        <Grid item xs={8}>
                            <form onSubmit={onSubmit}>
                                <Typography variant="h3" align="center" gutterBottom>Insira os seus dados</Typography>
                                <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} name= "nome" variant="outlined" label="Nome" margin="normal" fullWidth></TextField>
                                <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} name="usuario" type="email" variant="outlined" label="E-mail" margin="normal" fullWidth></TextField>
                                <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} name= "foto" variant="outlined" label="Link da Foto de Perfil" margin="normal" fullWidth></TextField>
                                <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} name= "senha" type="password" variant="outlined" label="Senha" margin="normal" fullWidth></TextField>
                                <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} name="confirmarSenha" type="password" variant="outlined" label="Repita a sua Senha" margin="normal" fullWidth></TextField>
                                <Box marginY={2}>
                                    <Button type="submit" variant="contained" color="primary" >Cadastrar</Button>
                                     <Link to='/login'>
                                        <Button type="submit" variant="contained" color="secondary" >Cancelar</Button>
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