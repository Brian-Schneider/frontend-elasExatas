import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography, styled, Collapse } from '@mui/material';
import { AppBar, Avatar, Box, CardHeader, CardMedia, Grid, IconButton, MenuItem, Select } from '@mui/material';
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
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import { IconButtonProps } from '@material-ui/core/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function ListaPostagem(props) {
    const [postagens, setPostagem] = useState<Postagem[]>([])
    const [postagemList, setPostagemList] = useState(postagens)
    const desab = props.desabilitar
    const list = props.lista

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    const [value, setValue] = React.useState("Ver todos");



    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    )

    const usuarioId = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
    )


    const history = useNavigate();

    useEffect(() => {
        if (list !== undefined) {
            setValue(list)
            setPostagemList([...postagens.filter(post => post.link === value)])
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
        if (value !== "Ver todos") {
            setPostagemList([...postagens.filter(post => post.link === value)])
        } else {
            setPostagemList(postagens)
        }
        setValue(value)
        console.log(value)
    }

    return (

        <Grid>
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
                <Box
                    display={"flex"}
                    justifyContent={"space-around"}
                    flexWrap={"wrap"}
                    gap={"40px"}
                    margin={'40px'}
                >
                    {postagens.map(postagem => (
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar src={postagem.usuario?.foto} sx={{ bgcolor: red[500] }}>

                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={postagem.usuario?.nome}
                                subheader={postagem.data}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={postagem.imagem}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {postagem.tituloPostagem}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>{postagem.conteudo}</Typography>
                                </CardContent>
                            </Collapse>
                        </Card>))}
                </Box>
                </TabPanel>
                <TabPanel value="Postagens">
                <Box
                    display={"flex"}
                    justifyContent={"space-around"}
                    flexWrap={"wrap"}
                    gap={"40px"}
                    margin={'40px'}
                >
                    {postagemList.map(postagem => (
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar src={postagem.usuario?.foto} sx={{ bgcolor: red[500] }}>

                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={postagem.usuario?.nome}
                                subheader={postagem.data}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={postagem.imagem}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {postagem.tituloPostagem}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>{postagem.conteudo}</Typography>
                                </CardContent>
                            </Collapse>
                        </Card>))}
                </Box>
                </TabPanel>
                <TabPanel value="Eventos">
                <Box
                    display={"flex"}
                    justifyContent={"space-around"}
                    flexWrap={"wrap"}
                    gap={"40px"}
                    margin={'40px'}
                >
                    {postagemList.map(postagem => (
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar src={postagem.usuario?.foto} sx={{ bgcolor: red[500] }}>

                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={postagem.usuario?.nome}
                                subheader={postagem.data}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={postagem.imagem}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {postagem.tituloPostagem}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>{postagem.conteudo}</Typography>
                                </CardContent>
                            </Collapse>
                        </Card>))}
                </Box>
                </TabPanel>
            </TabContext>
        </Grid>
    )
}


export default ListaPostagem;