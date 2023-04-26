import { Grid, Typography, TextField, FormControl, InputLabel, Select, FormHelperText, MenuItem, Button } from '@mui/material'
import React, { ChangeEvent, useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import { Tema } from '../../../models/Tema';
import { Postagem } from '../../../models/Postagem';
import { getAll, getId, post, put } from '../../../service/Service';
import './CadastroPostagem.css';

function CadastroPostagem() {

    const history = useNavigate()

    const [token, setToken] = useLocalStorage("token")

    const {id} = useParams<{id: string}>()

    const[temas, setTemas] = useState<Tema[]>([])

    const abas = ["Postagens", "Eventos"]

    const [postagem, setPostagem] = useState<Postagem> ({
        id: 0,
        titulo: "",
        conteudo: "",
        data: "",
        imagem: "",
        link: "",
        tema: null
    })

    const [tema, setTema] = useState<Tema> ({
        id: 0,
        tm_titulo: "",
        descricao: ""
    })

    useEffect(() => {
        if(token === "") {
            alert("Você não possui token!")
            history("/login")
        }
    }, [token])

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setPostagem ({
            ...postagem,
            [event.target.name]: [event.target.value],
            tema: tema
        })
    }

    async function getAllTemas() {
        await getAll("/temas", setTemas, {
            headers: {
                Authorization: token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await getId(`/postagens/${id}`, setPostagem, {
            headers: {
                Authorization: token
            }
        })
    }

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])

    useEffect(() => {
        getAllTemas()
        if(id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()

        if(id !== undefined) {
            try {
                await put("/postagens", postagem, setPostagem, {
                    headers: {
                        Authorization: token
                    }
                })
                alert("Postagem atualizada com sucesso!")
                history("/postagens")
            }
            catch(error) {
                alert("Falha ao atualizar a postagem!")
            }
        }
        else {
            try {
                await post("/postagens", postagem, setPostagem, {
                    headers: {
                        Authorization: token
                    }
                })
                alert("Postagem cadastrada com sucesso!")
                history("/postagens")
            }
            catch(error) {
                alert("Falha ao cadastrar a postagem!")
            }
        }
    }

    return (
        <>
            <Grid container maxWidth={"sm"}>
                <form className='cadastroPostagem' onSubmit={onSubmit}>
                    <Typography marginTop={4} variant="h3" align="center">
                        Cadastrar Postagem
                    </Typography>
                    
                    <TextField
                        value={postagem.titulo} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} label="Título da Postagem" name="titulo" id="titulo" variant="outlined" fullWidth
                    />
                    <TextField
                        value={postagem.conteudo} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} label="Texto da Postagem" name="conteudo" id="conteudo" variant="outlined" fullWidth
                    />
                    <TextField
                        value={postagem.imagem} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} label="Link para Imagem da Postagem (não obrigatório)" name="imagem" id="imagem" variant="outlined" fullWidth
                    />

                    <FormControl fullWidth>
                        <InputLabel>Tipo de Postagem</InputLabel>
                        <Select variant="standard" >
                            {abas.map((aba) => (
                                    <MenuItem value={postagem.link}>{aba}</MenuItem>
                                ))}
                            </Select>
                        <FormHelperText>Escolha um tipo de postagem</FormHelperText>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Escolha um tema</InputLabel>
                        <Select variant="standard" onChange={(event) =>
                            getId(`/temas/${event.target.value}`, setTema, {
                                headers: {Authentication: token}
                            })}
                        >
                            {temas.map((tema) => (
                                <MenuItem value={tema.id}>{tema.tm_titulo}</MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>Escolha um tipo de tema</FormHelperText>
                    </FormControl>
                    <Button variant="contained" color="primary" type="submit" disabled={tema.id === 0}>
                        {tema.id === 0 ? "Selecionar um tema" : "Cadastrar"}                        
                    </Button>
                </form>            
            </Grid>
        </>
    )
}

export default CadastroPostagem