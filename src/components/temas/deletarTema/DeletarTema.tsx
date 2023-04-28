
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { Tema } from "../../../models/Tema";
import { deleteId, getId } from "../../../service/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokenReducer";
import { toast } from "react-toastify";

function DeletarTema() {

    const history = useNavigate();

    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    )

    const { id } = useParams<{ id: string }>()

    const [tema, setTema] = useState<Tema>()

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
            history('/login');
        }
    }, [token]);

    async function getTemaById(id: string) {
        await getId(`/temas/${id}`, setTema, {
            headers: {
                Authorization: token
            }
        })
    }

    useEffect(() => {
        if(id !== undefined) {
            getTemaById(id)
        }
    }, [id])

    function deletarTema() {
        deleteId(`/temas/${id}`, {
            headers: {
                Authorization: token
            }
        });
        toast.success('Tema deletado com sucesso! 🤩', {
            position: "top-left",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        history('/temas')
    }

    function back() {
        history('/temas')
    }

    return (
        <>
            <Grid container justifyContent={'center'} mt={4}>
                <Grid item xs={3}>
                    <Card variant='outlined'>
                        <Typography variant='h3' gutterBottom align='center'>Deletar Tema</Typography>
                        <Typography variant='body1' gutterBottom align="center">Você tem certeza que deseja deletar o tema? <br /> <strong>{tema?.descricao}</strong></Typography>
                        <Box display='flex'>
                            <Button variant='contained' color='primary' onClick={back} fullWidth>Não</Button>
                            <Button variant='contained' color='secondary' onClick={deletarTema} fullWidth>Sim</Button>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default DeletarTema