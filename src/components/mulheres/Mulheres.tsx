import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Mulheres() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title="Maryam Mirzakhani" subheader="Matemática" />
      <CardMedia
        component="img"
        height="194"
        image="https://news.stanford.edu/wp-content/uploads/2017/07/Fields_Maryam_Mirzakhani.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          “Você tem que gastar um pouco de energia e esforço para ver a beleza
          da matemática.”
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
          <Typography paragraph style={{ fontWeight: "bold" }}>
            História
          </Typography>
          <Typography paragraph>
            Maryam Mirzakhani nasceu em Teerã, capital do Irã, onde também
            cresceu. Apaixonada por leitura, concluiu o ensino fundamental
            quando a guerra Irã-Iraque chegava ao fim e, em paralelo, as
            oportunidades se abriam em seu país. Sendo assim, a aluna conquistou
            uma vaga em uma prestigiada escola de ensino médio para meninas, que
            desenvolvia “Talentos Excepcionais”.
          </Typography>
          <Typography paragraph>
            No primeiro ano de estudos, curiosamente Mirzakhani foi mal na
            matéria que mais tarde a consagraria. Foi no ano seguinte que as
            coisas começaram a mudar. Seu desempenho melhorou muito e, sendo
            assim, resolveu se inscrever na Olimpíada Internacional de
            Matemática do Irã, que nunca havia tido uma garota entre os
            competidores. Em 1994, aos 17 anos, sua pontuação na Olimpíada lhe
            rendeu uma medalha de ouro. A partir de então, o amor pela matéria
            só cresceu.
          </Typography>
          <Typography paragraph>
            Se formou em matemática na Sharif University no Teerã em 1999 e fez
            pós-graduação na universidade de Harvard. Foi lá que, durante um
            seminário, ela se encantou com um assunto específico: a geometria
            hiperbólica, que se baseia em superfícies em forma de "rosquinha"
            com dois ou mais orifícios, que não seguem um padrão geométrico.
          </Typography>
          <Typography paragraph>
            Mirzakhani foi professora de matemática na Universidade de Stanford
            e muitos especialistas do ramo a consideram brilhante, pois suas
            pesquisas se conectam a muitas áreas da matemática, incluindo
            geometria diferencial, análise complexa e sistemas dinâmicos. Seu
            trabalho resultou em diversos artigos publicados nas principais
            revistas de matemática do mundo.
          </Typography>
          <Typography>
            Em 2014, ela foi premiada com a Medalha Fields, por “suas
            excepcionais contribuições à dinâmica e à geometria de superfícies
            de Riemann e seus espaços de Moduli”. O prêmio é considerado como a
            maior honraria que uma pessoa do ramo pode receber. Tanto é verdade,
            que costuma ser chamada de “Prêmio Nobel da Matemática“.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
