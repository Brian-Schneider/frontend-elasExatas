import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import { Tema } from "../../../models/Tema";
import { getAll } from "../../../service/Service";
import useLocalStorage from "react-use-localstorage";

import "./ListaTemas.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokenReducer";
import { toast } from "react-toastify";

function ListaTemas() {
  const history = useNavigate();

  const [temas, setTemas] = useState<Tema[]>([]);

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  )

  async function getAllTemas() {
    await getAll("/temas", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getAllTemas();
  }, [temas.length]);

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

  return (
    <div className="backgroundTema3">
      {temas.map((tema) => (
        <Box m={4} marginTop={0}>
          <Card>
            <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
                {tema.tituloTema}
              </Typography>
              <Typography color="textSecondary">
                {tema.descricao} 
              </Typography>
            </CardContent>
            <CardActions>
              <Link
                to={`/editartema/${tema.id}`}
                className="text-decoration-none"
              >
                {" "}
                {/* O link pode estar incorreto no back-end! */}
                <Button color="primary" variant="contained" size="small" style={{backgroundColor: "#08aabe", color: "#fff"}}>
                  Editar
                </Button>
              </Link>
              <Link
                to={`/deletartema/${tema.id}`}
                className="text-decoration-none"
              >
                {" "}
                {/* O link pode estar incorreto no back-end! */}
                <Button color="secondary" variant="contained" size="small"style={{backgroundColor: "#ff4d80", color: "#fff"}}>
                  Deletar
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Box>
      ))}
    </div>
  );
}

export default ListaTemas;
