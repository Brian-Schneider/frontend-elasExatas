import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

import { Tema } from "../../../models/Tema";

import { getId, post, put } from "../../../service/Service";

import "./CadastroTema.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokenReducer";
import { toast } from "react-toastify";
import Postagem from "../../../models/Postagem";

function CadastroTema() {

  const history = useNavigate();

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  )

  const [postagens, setPostagem] = useState<Postagem[]>([])

  const { id } = useParams<{ id: string }>();

  const [tema, setTema] = useState<Tema>({
    id: 0,
    tituloTema: "",
    descricao: "",
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [event.target.name]: event.target.value,
    });
  }

  async function getTemaById(id: string) {
    await getId(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      getTemaById(id);
    }
  }, []);

  useEffect(() => {
    if (token === "") {
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
      history("/login");
    }
  }, [token]);
  

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (id !== undefined) {
      try {
        await put("/temas", tema, setTema, {
          headers: {
            Authorization: token,
          },
        });
        toast.success('Tema atualizado com sucesso. 🤩', {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        history("/temas");
      } catch (error) {
        toast.error('Erro! O tema não foi atualizado. 😕', {
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
      try {
        await post("/temas", tema, setTema, {
          headers: {
            Authorization: token,
          },
        });
        toast.success('Tema cadastrado com sucesso. 🤩', {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        history("/temas");
      } catch (error) {
        toast.error('Erro! O tema não foi cadastrado. 😕', {
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
    }
  }

  return (
    <div className="tema1">
      <div className="backgroundTema1"></div>

      <Grid container justifyContent={"center"} className="backgroundTema2">
      <form className="cadastroPostagem" onSubmit={onSubmit} style={{marginTop: "35px", marginBottom: "295px"}}>
          <Typography
            marginTop={4}
            align="center"
            variant="h3"
            gutterBottom
            fontWeight={"bold"}
            style={{color: "#5D3DB8", fontWeight: "bold", marginBottom: "20px"}}
          >
            {/* if ternário */}
            {tema.id !== 0 ? "Editar tema" : "Cadastrar tema"}
          </Typography>
            <TextField
                label="Título do tema"
                name="tituloTema"
                value={tema.tituloTema}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
                id="tituloTema"
              />
              <TextField
                label="Descrição do tema"
                name="descricao"
                value={tema.descricao}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
              
              {tema.tituloTema.length < 10 && tema.descricao.length < 10 ? <Button
            variant="contained"
            type="submit"
            disabled = {true}
            
          // disabled={tema.id === 0}
          >
            Insira os dados
          </Button> : 
          <Button
          variant="contained"
          color="primary"
          disabled = {false}
          type="submit"
          style={{
            backgroundColor: "#5D3DB8"
          }}
        // disabled={tema.id === 0}
        >
          Cadastrar
        </Button>}
        </form>
      </Grid>
    </div>
  );
}

export default CadastroTema;
