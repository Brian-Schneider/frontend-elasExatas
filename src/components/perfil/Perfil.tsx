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
        <>
            <Grid container margin={5} alignItems={'center'} justifyContent={"center"}>
                <Grid xs={3} flexDirection={"column"} justifyContent={"space-around"}>
                    <Box >
                        <Avatar src={usuario.foto} alt="Foto do perfil" style={{ width: '15rem', height: '15rem', margin: '0 auto' }} />
                    </Box>
                    <Box marginTop={'20px'}>
                        <Typography variant="h5" align="center">{usuario.nome}</Typography>
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
            >
                <Grid container justifyContent={'center'} gap={2}>
                    {usuario.postagem?.map(postagem => (
                        <div className="divDoPerfil">
                            <Card className="cardDoPerfil" >
                                <CardActionArea  >
                                    <img src={postagem.imagem} alt='Foto da Postagem' />
                                    <div >
                                        <Typography variant="h5" component="h2">
                                            {postagem.tituloPostagem}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {postagem.conteudo}
                                        </Typography>
                                    </div>

                                </CardActionArea>
                                <CardActions>
                                    <Link to={`/editarpostagem/${postagem.id}`} className="text-decorator-none" >
                                        <Box mx={1} >
                                            <Button size='small' color="primary" >
                                                Editar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button size='small' className='btndeletarpos'>
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

        </>
    )
}

export default Perfil;