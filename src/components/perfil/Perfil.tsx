import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokenReducer";
import Usuario from "../../models/Usuario";
import { getId } from "../../service/Service";
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import "./Perfil.css"
import { Link } from "react-router-dom";



function Perfil() {

    const usuarioId = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
    );

    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    );

    const [usuario, setUsuario] = useState<Usuario>({
        id: +usuarioId,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
    });

    async function getUserById(id: number) {
        await getId(`/usuarios/${id}`, setUsuario, {
            headers: { 'Authorization': token }

        })

    }

    useEffect(() => {
        getUserById(+usuarioId)
    }, [])

    return (
        <div>
            <img src="https://i.imgur.com/gESSQVG.jpg" alt="" className="backgroundPerfil1"/>
            <Grid container paddingTop={5} alignItems={'center'} justifyContent={"center"}>
                <Grid xs={3} flexDirection={"column"} justifyContent={"space-around"}>
                    <Box >
                        <Avatar src={usuario.foto} alt="Foto do perfil" style={{ width: '15rem', height: '15rem', margin: '0 auto' }} />
                    </Box>
                    <Box marginTop={'20px'}>
                        <Typography variant="h4" align="center" style={{fontWeight: "bold"}}>{usuario.nome} </Typography>
                    </Box>
                </Grid>
            </Grid>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                display={"flex"}
                flexWrap={"wrap"}
                marginBottom={4}
            >
                <Grid container justifyContent={'center'} gap={2}>
                    {usuario.postagem?.map(postagem => (
                        <div className="divDoPerfil">
                            <Card className="cardDoPerfil" >
                                <CardActionArea className="areaCard">
                                    <img src={postagem.imagem} alt='Foto da Postagem' />
                                    <div>
                                        <Typography variant="h6" component="h2" style={{marginBottom: "10px", marginLeft: "5px", fontWeight: "bold"}}>
                                            {postagem.tituloPostagem}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" style={{marginLeft: "5px"}}>
                                            {postagem.conteudo}
                                        </Typography>
                                    </div>

                                </CardActionArea>
                                <CardActions>
                                    <Link to={`/editarpostagem/${postagem.id}`} className="text-decorator-none" >
                                        <Box mx={1} >
                                            <Button size='small'style={{backgroundColor: "#08aabe", color: "#fff"}}>
                                                Editar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button size='small' className='btndeletarpos' style={{backgroundColor: "#ff4d80", color: "#fff"}}>
                                                Deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </CardActions>
                            </Card>
                        </div>
                    ))}
                </Grid>
            </Grid>

        </div>
    )
}

export default Perfil;