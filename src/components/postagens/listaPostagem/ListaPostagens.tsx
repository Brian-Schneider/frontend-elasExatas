import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { AppBar, Box, Grid, MenuItem, Select } from '@mui/material';
import './ListaPostagens.css';
import Postagem from '../../../models/Postagem';

import React, { useState, useEffect, ChangeEvent } from 'react';
import useLocalStorage from 'react-use-localstorage';
import { getAll } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { toast } from 'react-toastify';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';



function ListaPostagem(props) {
    const [postagens, setPostagem] = useState<Postagem[]>([])
    const [postagemList, setPostagemList] = useState(postagens)
    const desab = props.desabilitar
    const list = props.lista


    const [value, setValue] = React.useState("Ver todos");

    

    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    )

    
    const history = useNavigate();

    useEffect(() => {
        if(list !== undefined) {
            setValue(list)
            setPostagemList ([...postagens.filter(post => post.link === value)])
        }
    })
    

    useEffect(() => {
        if (token === '') {
            toast.info('Você precisa estar logado! 🤪', {
                position: "top-left",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
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

    const setValueFilter = (event: React.ChangeEvent<{}>, value: string) => {
        if(value !== "Ver todos") {
            setPostagemList ([...postagens.filter(post => post.link === value)])
        } else {
            setPostagemList(postagens)
        }
        setValue(value)
        console.log(value)
    }
    return (
        <>
            <TabContext value={value}>
            <Box hidden={desab}>
                <AppBar position="static" className='barrinha'>
                <TabList centered indicatorColor='primary'
                    className='barrinha' onChange={setValueFilter} aria-label="simple tabs example">
                    <Tab label="Ver todos" value="Ver todos" />
                    <Tab label="Postagens" value="Postagens" />
                    <Tab label="Eventos" value="Eventos" />

                </TabList>
            </AppBar>
            </Box>
            <TabPanel value="Ver todos">
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
                                    {postagem.link}
                                </Typography>

                                <Typography variant="body2" component="p">
                                    {postagem.tema?.descricao}
                                </Typography> 

                                <Typography variant="body2" component="p">
                                    Postado por: {postagem.usuario?.nome}
                                </Typography>                            

                                <Typography variant="body2" component="p">               
                                    Data: {Intl.DateTimeFormat('pt-BR', {dateStyle: 'full', timeStyle: 'medium'}).format(new Date(postagem.data))}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/editarpostagem/${postagem.id}`} className="text-decorator-none" >
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
            </TabPanel>

            <TabPanel value="Postagens">
            {
                postagemList.map(postagem => (
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
                                    {postagem.link}
                                </Typography>

                                <Typography variant="body2" component="p">
                                    {postagem.tema?.descricao}
                                </Typography> 

                                <Typography variant="body2" component="p">
                                    Postado por: {postagem.usuario?.nome}
                                </Typography>                            

                                <Typography variant="body2" component="p">               
                                    Data: {Intl.DateTimeFormat('pt-BR', {dateStyle: 'full', timeStyle: 'medium'}).format(new Date(postagem.data))}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/editarpostagem/${postagem.id}`} className="text-decorator-none" >
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
               
            </TabPanel>
            <TabPanel value="Eventos" >
            {
                postagemList.map(postagem => (
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
                                    {postagem.link}
                                </Typography>

                                <Typography variant="body2" component="p">
                                    {postagem.tema?.descricao}
                                </Typography> 

                                <Typography variant="body2" component="p">
                                    Postado por: {postagem.usuario?.nome}
                                </Typography>                            

                                <Typography variant="body2" component="p">               
                                    Data: {Intl.DateTimeFormat('pt-BR', {dateStyle: 'full', timeStyle: 'medium'}).format(new Date(postagem.data))}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/editarpostagem/${postagem.id}`} className="text-decorator-none" >
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
            </TabPanel>
        </TabContext>
           
        </>)
}

export default ListaPostagem;