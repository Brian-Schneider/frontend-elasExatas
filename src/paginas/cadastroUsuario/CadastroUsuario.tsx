import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../service/Service'

import './CadastroUsuario.css'
import { toast } from 'react-toastify'


function CadastroUsuario() {

    const history = useNavigate();

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    const [usuario, setUsuario] = useState<Usuario>(
        {
            id: 0,
            nome: '',
            usuario: '',
            foto: '',
            senha: ''
        })

    const [usuarioResult, setUsuarioResult] = useState<Usuario>(
        {
            id: 0,
            nome: '',
            usuario: '',
            foto: '',
            senha: ''
        })

    useEffect(() => {
        if (usuarioResult.id != 0) {
            history('/login')
        }
    }, [usuarioResult])

    function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(event.target.value)
    }

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [event.target.name]: event.target.value
        })
    }

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        if (confirmarSenha == usuario.senha) {
            try {
                await cadastrarUsuario('/usuarios/cadastrar', usuario, setUsuarioResult)
                toast.success('Usuário cadastrado com sucesso! 🤩', {
                    position: "top-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            } catch (error) {
                toast.error('Existem dados incorretos. Verifique as informações de cadastro! 🤔', {
                    position: "top-left",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        } else {
            toast.error('As senhas não coincidem! Tente novamente. 😉', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            setConfirmarSenha('')
            setUsuario({
                ...usuario,
                senha: ''
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
                                <Typography variant="h3" align="center" gutterBottom style={{color: "#339097", fontWeight: "bold"}}>Insira os seus dados</Typography>
                                <TextField value={usuario.nome} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} name="nome" variant="outlined" label="Nome" margin="normal" fullWidth></TextField>
                                <TextField value={usuario.usuario} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} name="usuario" type="email" variant="outlined" label="E-mail" margin="normal" fullWidth></TextField>
                                <TextField value={usuario.foto} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} name="foto" variant="outlined" label="Link da Foto de Perfil" margin="normal" fullWidth></TextField>
                                <TextField value={usuario.senha} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} name="senha" type="password" variant="outlined" label="Senha" margin="normal" fullWidth></TextField>
                                <TextField value={confirmarSenha} onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)} name="confirmarSenha" type="password" variant="outlined" label="Confirmar Senha" margin="normal" fullWidth></TextField>
                                <Box marginY={2}  textAlign={'center'}>
                                    <Button type="submit" variant="contained" className='botaoCadastrar' color="primary" >Cadastrar</Button>
                                    <Link to='/login'>
                                        <Button type="submit" variant="contained" className='botaoCancelar' color="secondary" >Cancelar</Button>
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

export default CadastroUsuario