import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaPostagens.css';
import Postagem from '../../../models/Postagem';

import React, { useState, useEffect } from 'react';
import useLocalStorage from 'react-use-localstorage';
import { getAll } from '../../../service/Service';



function ListaPostagem() {
    const [postagens, setPostagem] = useState<Postagem[]>([])
    const [token, setToken] = useLocalStorage("token");
    const history = useNavigate();

    useEffect(() => {
        if (token === '') {
            alert("Você precisar está logado!")
            history("/login")
        }
    }, [token])

    async function getAllPostagens() {
        await getAll("/postagens", setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getAllPostagens()
    }, [postagens.length])
    return (
        <>
            {
                postagens.map(postagem => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Postagens
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {postagem.tituloPostagem}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {postagem.conteudo}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {postagem.imagem}
                                </Typography>  

                                <Typography variant="body2" component="p">
                                   {/*{postagem.tema.descricao}*/}
                                </Typography>  

                                <Typography variant="body2" component="p">
                                    {/*{postagem.usuario.nome}*/}
                                </Typography> 

                                          
                                <Typography variant="body2" component="p">               
                                    Data: {Intl.DateTimeFormat('pt-BR', {dateStyle: 'full', timeStyle: 'medium'}).format(new Date(postagem.data))}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none" >
                                        <Box mx={1} >
                                            <Button variant="contained" className='btnAtualizarPos' size='small' color="primary" >
                                                Editar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' className='btndeletarpos'>
                                                Deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>)
}

export default ListaPostagem;