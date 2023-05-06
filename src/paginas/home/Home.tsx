import { Typography, Grid, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Home.css";
import TabPostagens from "../../components/postagens/tabPostagens/TabPostagens";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokenReducer";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Home() {
  const history = useNavigate();

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  useEffect(() => {
    if (token === "") {
      toast.info("Você precisa estar logado! 🤪", {
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
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
      >
        
          <img src="https://i.imgur.com/XFQknTh.png" className="imgHome" height="100%" alt="" width="100%"  style={{backgroundRepeat: 'no-repeat'}} />
       
        <Grid xs={12} className="postagens">
          <TabPostagens />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
