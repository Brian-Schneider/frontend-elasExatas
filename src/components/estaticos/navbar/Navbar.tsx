import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokenReducer";
import { addToken } from "../../../store/tokens/Action";
import { toast } from "react-toastify";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Navbar() {

  const history = useNavigate()

  const dispatch = useDispatch();

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  function logout() {
    dispatch(addToken(''))
    toast.success('Usuário deslogado 🥲', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    history('/login')
  }


  return (
    <>
      <AppBar position="static" style={{ background: "#d74883" }}>
        <Toolbar variant="dense">
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Link to="/home">
              <Box style={{ cursor: "pointer" }}>
                <img src='https://cdn.discordapp.com/attachments/1070726474568568852/1101518731869438064/image.png' className="logoHome" />
              </Box>
            </Link>

            <Box display="flex" justifyContent="center" alignItems={"center"}>
              <Link to="/postagens">
                <Box mx={1} style={{ cursor: "pointer" }}>
                  <Typography variant="h6" color="#ffff">
                    Postagens
                  </Typography>
                </Box>
              </Link>

              <Link to="/temas">
                <Box mx={1} style={{ cursor: "pointer" }}>
                  <Typography variant="h6" color="#ffff">
                    Temas
                  </Typography>
                </Box>
              </Link>
              <Link to="/cadastrartema">
                <Box mx={1} style={{ cursor: "pointer" }}>
                  <Typography variant="h6" color="#ffff">
                    Cadastrar tema
                  </Typography>
                </Box>
              </Link>
              <Link to="/perfil">
                <Box mx={1} style={{ cursor: "pointer" }}>
                  <Typography variant="h6" color="#ffff">
                    Perfil
                  </Typography>
                </Box>
              </Link>
              <Box mx={1} style={{ cursor: 'pointer' }} onClick={logout}>
                <Typography variant="h6" color="#ffff">
                  Logout
                </Typography>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Navbar;
