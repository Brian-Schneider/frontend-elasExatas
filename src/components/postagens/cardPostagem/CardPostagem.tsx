import React from "react";
import { Card, CardActions, CardContent, Button, Typography, styled, Collapse, IconButtonProps, Menu } from '@mui/material';
import { AppBar, Avatar, Box, CardHeader, CardMedia, Grid, IconButton, MenuItem, Select } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Postagem from "../../../models/Postagem";
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokenReducer";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


function CardPostagem(props: {post: Postagem}) {

    const postagem = props.post
    

    const usuarioId = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
    );

    

    console.log(usuarioId)
    console.log(postagem.usuario?.id)



    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [anchorElPostagem, setAnchorElPostagem] = React.useState<null | HTMLElement>(null);
  const openPostagem = Boolean(anchorElPostagem);
  const handleClickPostagem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElPostagem(event.currentTarget);
  };
  const handleClosePostagem= () => {
    setAnchorElPostagem(null);
  };



  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            src={postagem.usuario?.foto}
            sx={{ bgcolor: red[500] }}
          ></Avatar>
        }
        test={console.log(postagem.usuario?.id)}
        action=
            {postagem.usuario?.id === +usuarioId && <Box>
                <IconButton aria-label="settings" onClick={handleClickPostagem}>
                    <MoreVertIcon />
                </IconButton>
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
                      <Link to={`/editarpostagem/${postagem.id}`}>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                          <Typography variant="body1" color="#000000">
                            Editar Postagem
                          </Typography>
                        </Box>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClosePostagem} style={{display: "block"}}>
                      <Link to={`/deletarPostagem/${postagem.id}`}>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                          <Typography variant="body1" color="#000000">
                            Deletar Postagem
                          </Typography>
                        </Box>
                      </Link>
                    </MenuItem>
                  </Menu>
            </Box>}
        
        title={postagem.usuario?.nome}
        subheader= {Intl.DateTimeFormat('pt-BR', {dateStyle: 'full', timeStyle: 'medium'}).format(new Date(postagem.data))}
      />
      <CardMedia
        component="img"
        height="194"
        image={postagem.imagem}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {postagem.tituloPostagem}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Tema: {postagem.tema?.tituloTema}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Categoria: {postagem.link}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{postagem.conteudo}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default CardPostagem;
