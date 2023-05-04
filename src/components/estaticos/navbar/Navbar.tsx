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
import { useEffect } from "react";
import useState from 'react';

function Navbar() {

  const history = useNavigate()

  const dispatch = useDispatch();

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  const [hidden, setHidden] = React.useState(false)

  const [anchorElPostagem, setAnchorElPostagem] = React.useState<null | HTMLElement>(null);
  const openPostagem = Boolean(anchorElPostagem);
  const handleClickPostagem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElPostagem(event.currentTarget);
  };
  const handleClosePostagem= () => {
    setAnchorElPostagem(null);
  };

  const [anchorElTema, setAnchorElTema] = React.useState<null | HTMLElement>(null);
  const openTema = Boolean(anchorElTema);
  const handleClickTema = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElTema(event.currentTarget);
  };
  const handleCloseTema= () => {
    setAnchorElTema(null);
  };

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

  useEffect(() => {
    if (token === "") {
      setHidden(true)
    }
    else {
      setHidden(false)
    }
  }, [token]);


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
            <div hidden={hidden}>
            <Box display="flex" justifyContent="center" alignItems={"center"}>
                <Box mx={1} style={{ cursor: "pointer" }}>
                  <Button
                    id="demo-positioned-button"
                    aria-controls={openPostagem ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openPostagem ? 'true' : undefined}
                    onClick={handleClickPostagem}
                    style={{textTransform: "none"}}
                  >
                    <Typography variant="h6" color="#ffff">
                      Categorias
                    </Typography>
                  </Button>
                  <Menu
                    sx={{ mt: '40px' }}
                    id="menu-navbar"
                    anchorEl={anchorElPostagem}
                    open={Boolean(anchorElPostagem)}
                    onClose={handleClosePostagem}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <MenuItem onClick={handleClosePostagem} style={{display: "block", paddingBottom: "1vh"}}>
                      <Link to="/postagens">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                          <Typography variant="body1" color="#000000">
                            Ver Postagens/Eventos
                          </Typography>
                        </Box>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClosePostagem} style={{display: "block"}}>
                      <Link to="/cadastropostagem">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                          <Typography variant="body1" color="#000000">
                            Cadastrar Postagens/Eventos
                          </Typography>
                        </Box>
                      </Link>
                    </MenuItem>
                  </Menu>
                </Box>
            

                <Box mx={1} style={{ cursor: "pointer" }}>
                  <Button
                    id="demo-positioned-button"
                    aria-controls={openTema ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openTema ? 'true' : undefined}
                    onClick={handleClickTema}
                    style={{textTransform: "none"}}
                  >
                    <Typography variant="h6" color="#ffff">
                      Temas
                    </Typography>
                  </Button>
                  <Menu
                    sx={{ mt: '40px' }}
                    id="menu-navbar"
                    anchorEl={anchorElTema}
                    open={Boolean(anchorElTema)}
                    onClose={handleCloseTema}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <MenuItem onClick={handleCloseTema} style={{display: "block", paddingBottom: "1vh"}}>
                      <Link to="/temas">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                          <Typography variant="body1" color="#000000">
                            Ver Temas
                          </Typography>
                        </Box>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseTema} style={{display: "block"}}>
                      <Link to="/cadastrartema">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                          <Typography variant="body1" color="#000000">
                            Cadastrar Temas
                          </Typography>
                        </Box>
                      </Link>
                    </MenuItem>
                  </Menu>
                </Box>
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
            </div>
            
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Navbar;
