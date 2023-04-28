import {
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem,
  Button,
} from "@mui/material";

import "./CadastroPostagem.css";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Tema } from "../../../models/Tema";
import Postagem from "../../../models/Postagem";
import { getAll, getId, post, put } from "../../../service/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokenReducer";
import { toast } from "react-toastify";
import Usuario from "../../../models/Usuario";

function CadastroPostagem() {
  const history = useNavigate();

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  const usuarioId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
  )
  
  const { id } = useParams<{ id: string }>();

  const [temas, setTemas] = useState<Tema[]>([]);

  const abas = ["Postagens", "Eventos"];

  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    tituloPostagem: "",
    conteudo: "",
    data: "",
    imagem: "",
    link: "",
    tema: null,
    usuario: null
  });

  const [tema, setTema] = useState<Tema>({
    id: 0,
    tituloTema: "",
    descricao: "",
  });

  const [usuario, setUsuario] = useState<Usuario>({
    id: +usuarioId,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

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

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [event.target.name]: event.target.value,
      tema: tema,
    });
  }

  async function getAllTemas() {
    await getAll("/temas", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findByIdPostagem(id: string) {
    await getId(`/postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
      usuario: usuario
    });
  }, [tema]);

  useEffect(() => {
    getAllTemas();
    if (id !== undefined) {
      findByIdPostagem(id);
    }
  }, [id]);

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (id !== undefined) {
      try {
        await put("/postagens", postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });
        toast.success('Postagem atualizada com sucesso. 🤩', {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        history("/postagens");
      } catch (error) {
        toast.error('Erro! A postagem não foi atualizada. 😕', {
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
        console.log(postagem);
        await post("/postagens", postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });
        toast.success('Postagem cadastrada com sucesso. 🤩', {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        history("/postagens");
      } catch (error) {
        console.log({ error });
        toast.error('Erro! A postagem não foi cadastrada. 😕', {
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
    <>
      <Grid container justifyContent={"center"} mt={4}>
        <form className="cadastroPostagem" onSubmit={onSubmit}>
          <Typography marginTop={4} variant="h3" align="center">
            Cadastrar Postagem
          </Typography>

          <TextField
            value={postagem.tituloPostagem}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateModel(event)
            }
            label="Título da Postagem"
            name="tituloPostagem"
            id="tituloPostagem"
            variant="outlined"
            fullWidth
          />
          <TextField
            value={postagem.conteudo}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateModel(event)
            }
            label="Texto da Postagem"
            name="conteudo"
            id="conteudo"
            variant="outlined"
            fullWidth
          />
          <TextField
            value={postagem.imagem}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateModel(event)
            }
            label="Link para Imagem da Postagem (não obrigatório)"
            name="imagem"
            id="imagem"
            variant="outlined"
            fullWidth
          />
          <TextField
            value={postagem.link}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateModel(event)
            }
            label="Link para Imagem da Postagem (não obrigatório)"
            name="link"
            id="link"
            variant="outlined"
            fullWidth
          />

          {/* <FormControl fullWidth>
              <InputLabel>Tipo de Postagem</InputLabel>
              <Select variant="standard">
                {abas.map((aba) => (
                  <MenuItem value={postagem.link}>{aba}</MenuItem>
                ))}
              </Select>
              <FormHelperText>Escolha um tipo de postagem</FormHelperText>
            </FormControl> */}
            
          <FormControl fullWidth>
            <InputLabel>Escolha um tema</InputLabel>
            <Select
              variant="standard"
              onChange={(event) =>
                getId(`/temas/${event.target.value}`, setTema, {
                  headers: { Authorization: token },
                })
              }
            >
              {temas.map((tema) => (
                <MenuItem style={{display:'block'}} value={tema.id}>{tema.tituloTema}</MenuItem>
              ))}
            </Select>
            <FormHelperText>Escolha um tipo de tema</FormHelperText>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            // disabled={tema.id === 0}
          >
            {tema.id === 0 ? "Selecionar um tema" : "Cadastrar"}
          </Button>
        </form>
      </Grid>
    </>
  );
}

export default CadastroPostagem;
