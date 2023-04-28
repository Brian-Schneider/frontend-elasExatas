import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokenReducer";
import Usuario from "../../models/Usuario";
import { getId } from "../../service/Service";
import { Avatar, Container, Grid, Typography } from "@mui/material";



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
            headers: { 'Authorization' : token }

        })
        
    } 

    useEffect(() => {
        getUserById(+usuarioId)
    }, [])


    return (
        <>
        <Container>
            <Grid>
                <Grid>
                    <Avatar/>
                    <Typography>{usuario.nome}</Typography>
                </Grid>
                    <Grid>
                        <Typography>Postagens de {usuario.nome}</Typography>
                        Você tem o total de {usuario.postagem?.length} postagens feitas

                        {usuario.postagem?.map((postagem)=>(
                        <p>{postagem.tituloPostagem}</p>  
                        ))}
                    </Grid>
            </Grid>
        </Container>          
        </>
    )
}

export default Perfil;