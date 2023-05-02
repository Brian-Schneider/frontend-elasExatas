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
import { Box } from "@mui/material";

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
    <>
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        flexWrap={"wrap"}
        gap={"40px"}
      >
        <Box>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title="Maryam Mirzakhani" subheader="Matemática" />
            <CardMedia
              component="img"
              height="194"
              image="https://news.stanford.edu/wp-content/uploads/2017/07/Fields_Maryam_Mirzakhani.jpg"
              alt="Maryam Mirzakhani"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                “Você tem que gastar um pouco de energia e esforço para ver a
                beleza da matemática.”
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
                  oportunidades se abriam em seu país. Sendo assim, a aluna
                  conquistou uma vaga em uma prestigiada escola de ensino médio
                  para meninas, que desenvolvia “Talentos Excepcionais”.
                </Typography>
                <Typography paragraph>
                  No primeiro ano de estudos, curiosamente Mirzakhani foi mal na
                  matéria que mais tarde a consagraria. Foi no ano seguinte que
                  as coisas começaram a mudar. Seu desempenho melhorou muito e,
                  sendo assim, resolveu se inscrever na Olimpíada Internacional
                  de Matemática do Irã, que nunca havia tido uma garota entre os
                  competidores. Em 1994, aos 17 anos, sua pontuação na Olimpíada
                  lhe rendeu uma medalha de ouro. A partir de então, o amor pela
                  matéria só cresceu.
                </Typography>
                <Typography paragraph>
                  Se formou em matemática na Sharif University no Teerã em 1999
                  e fez pós-graduação na universidade de Harvard. Foi lá que,
                  durante um seminário, ela se encantou com um assunto
                  específico: a geometria hiperbólica, que se baseia em
                  superfícies em forma de "rosquinha" com dois ou mais
                  orifícios, que não seguem um padrão geométrico.
                </Typography>
                <Typography paragraph>
                  Mirzakhani foi professora de matemática na Universidade de
                  Stanford e muitos especialistas do ramo a consideram
                  brilhante, pois suas pesquisas se conectam a muitas áreas da
                  matemática, incluindo geometria diferencial, análise complexa
                  e sistemas dinâmicos. Seu trabalho resultou em diversos
                  artigos publicados nas principais revistas de matemática do
                  mundo.
                </Typography>
                <Typography>
                  Em 2014, ela foi premiada com a Medalha Fields, por “suas
                  excepcionais contribuições à dinâmica e à geometria de
                  superfícies de Riemann e seus espaços de Moduli”. O prêmio é
                  considerado como a maior honraria que uma pessoa do ramo pode
                  receber. Tanto é verdade, que costuma ser chamada de “Prêmio
                  Nobel da Matemática“.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Box>

        <Box>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title="Andrea Ghez" subheader="Astrofísica" />
            <CardMedia
              component="img"
              height="194"
              image="https://static.glamurama.uol.com.br/2020/10/site_andrea-ghez_elena-zhukova_ucla.jpg"
              alt="Andrea Ghez"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                “Se você tem paixão pela ciência, há muito para ser feito.”
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
                  Andrea Ghez nasceu em Nova York, Estados Unidos, porém ainda
                  criança se mudou para Chicago onde frequentou a
                  escola-laboratório da Universidade de Chicago. Ghez queria ser
                  inicialmente uma bailarina, porém o pouso na lua a inspirou a
                  querer tornar-se a primeira mulher astronauta e sua mãe apoiou
                  esta decisão, além de sua professora ginasial de química.
                  Começou a estudar matemática, mas logo depois mudou seus
                  interesses para física.
                </Typography>
                <Typography paragraph>
                  Obteve um bacharelado em física no Instituto de Tecnologia de
                  Massachusetts (MIT) em 1987 e obteve seu Ph.D. em 1992 no
                  Instituto de Tecnologia da Califórnia (Caltech). Suas
                  pesquisas atuais envolvem o uso de técnicas de imagem de alta
                  resolução espacial para estudar regiões de formação de
                  estrelas e buracos negros supermaciços. A maneira de "ver" um
                  buraco negro, por definição invisível, é observar os objetos
                  que giram entorno e revelam a presença do gigante.
                </Typography>
                <Typography paragraph>
                  Andrea ganhou o Prêmio Nobel de Física em 2020. O comitê da
                  premiação afirmou que os trabalhos dela, deram à ciência a
                  evidência mais convincente de um buraco negro supermassivo no
                  centro da Via Láctea.
                </Typography>
                <Typography paragraph>
                  Ela é a quarta mulher a ganhar um Nobel de Física desde que a
                  premiação começou, em 1901. A pesquisadora afirmou que
                  pretende inspirar outras mulheres a buscarem seus sonhos na
                  profissão. "Há muito o campo é dominado por homens, mas há
                  cada vez mais mulheres ingressando na disciplina. Estou muito
                  feliz por poder ser um modelo para as jovens que estão
                  pensando em começar", conclui a cientista.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Box>

        <Box>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title="Marie Curie" subheader="Química e Física" />
            <CardMedia
              component="img"
              height="194"
              image="https://static.todamateria.com.br/upload/ma/ri/mariecurie-cke.jpg"
              alt="Marie Curie"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                “Nada na vida deve ser temido, apenas compreendido.”
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
                  Marie Curie nasceu no dia 7 de novembro de 1867 em Varsóvia,
                  capital e maior cidade da Polónia. Recebeu uma educação geral
                  em escolas locais e algum treinamento científico durante sua
                  juventude. Se envolveu em uma organização revolucionária
                  estudantil e achou prudente deixar sua cidade continuar seus
                  estudos em Paris, onde prosseguiu aprendendo física, química e
                  matemática na Universidade de Paris.
                </Typography>
                <Typography paragraph>
                  Suas primeiras pesquisas foram muitas vezes realizadas em
                  condições difíceis. Os arranjos de laboratório eram precários
                  e precisou se dedicar também ao ensino para ganhar a vida. A
                  descoberta da radioatividade inspirou Curie em suas brilhantes
                  pesquisas e análises que levaram ao isolamento do polônio e do
                  rádio. Marie desenvolveu métodos para a separação do rádio dos
                  resíduos radioativos em quantidades suficientes para permitir
                  sua caracterização e o estudo cuidadoso de suas propriedades,
                  principalmente terapêuticas.
                </Typography>
                <Typography paragraph>
                  Era tida em alta estima e admiração por cientistas de todo o
                  mundo. Fez parte do Conselho de Física Solvay e do Comitê de
                  Cooperação Intelectual da Liga das Nações. Seu trabalho está
                  registrado em numerosos artigos em revistas científicas e sua
                  importância se reflete nos inúmeros prêmios concedidos a ela.
                </Typography>
                <Typography paragraph>
                  Marie Curie recebeu muitos diplomas honorários de ciência,
                  medicina e direito, além de membros honorários de sociedades
                  científicas em todo o mundo. Recebeu o Prêmio Nobel de Física
                  em 1903, por seu estudo sobre a radiação espontânea, e em 1911
                  um segundo Prêmio Nobel, desta vez em Química , em
                  reconhecimento ao seu trabalho em radioatividade.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Box>
      </Box>
    </>
  );
}
