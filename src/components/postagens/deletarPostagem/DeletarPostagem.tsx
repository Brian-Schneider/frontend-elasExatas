import { Box, Button, Card, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import Postagem from '../../../models/Postagem'
import { deleteId, getId } from '../../../service/Service'

function DeletarPostagem() {

    const history = useNavigate()

    const [token, setToken] = useLocalStorage("token")

    const {id} = useParams<{id: string}>()

    const [postagem, setPostagem] = useState<Postagem>()

    useEffect(() => {
        if(token === "") {
            alert("Token inválido")
            history("/home")
        }
    }, [token])

    async function getPostagemById(id: string) {
        await getId(`/postagens/${id}`, setPostagem, {
            headers: {
                Authorization: token
            }
        })
    }

    useEffect(() => {
        if(id !== undefined) {
            getPostagemById(id)
        }
    }, [id])

    function deletarPostagem() {
        deleteId(`/postagens/${id}`, {
            headers: {
                Authorization: token
            }
        })
        alert("Postagem deletada com sucesso!")
        history("/postagens")
    }

    function back() {
        history("/postagens")
    }


    return (
        <>
            <Grid container justifyContent={"center"} mt={4}>
                <Grid item xs={4}>
                    <Card variant="outlined">
                        <Typography variant="h3" gutterBottom align="center">
                            Deletar Postagem
                        </Typography>
                        <Typography variant="body1" gutterBottom align="center">
                            Você gostaria de deletar a Postagem <strong> {postagem?.tituloPostagem}</strong>?
                        </Typography>
                        <Box display="flex" gap={2} mb={2}>
                            <Button variant="contained" color="primary" onClick={back} fullWidth>NÃO</Button>
                            <Button variant="contained" color="secondary" onClick={deletarPostagem} fullWidth>SIM</Button>
                        </Box>               
                    </Card>
                </Grid>
            </Grid>    
        </>
    )
}

export default DeletarPostagem