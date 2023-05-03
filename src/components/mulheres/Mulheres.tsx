import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
  const [expanded1, setExpanded1] = React.useState(false);

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
    setExpanded2(false);
    setExpanded3(false);
    setExpanded4(false);
    setExpanded5(false);
    setExpanded6(false);
  };

  const [expanded2, setExpanded2] = React.useState(false);

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
    setExpanded1(false);
    setExpanded3(false);
    setExpanded4(false);
    setExpanded5(false);
    setExpanded6(false);
  };

  const [expanded3, setExpanded3] = React.useState(false);

  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
    setExpanded1(false);
    setExpanded2(false);
    setExpanded4(false);
    setExpanded5(false);
    setExpanded6(false);
  };

  const [expanded4, setExpanded4] = React.useState(false);

  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
    setExpanded1(false);
    setExpanded2(false);
    setExpanded3(false);
    setExpanded5(false);
    setExpanded6(false);
  };

  const [expanded5, setExpanded5] = React.useState(false);

  const handleExpandClick5 = () => {
    setExpanded5(!expanded5);
    setExpanded1(false);
    setExpanded2(false);
    setExpanded3(false);
    setExpanded4(false);
    setExpanded6(false);
  };

  const [expanded6, setExpanded6] = React.useState(false);

  const handleExpandClick6 = () => {
    setExpanded6(!expanded6);
    setExpanded1(false);
    setExpanded2(false);
    setExpanded3(false);
    setExpanded4(false);
    setExpanded5(false);
  };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={"40px"}
        margin={"40px"}
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
                expand={expanded1}
                onClick={handleExpandClick1}
                aria-expanded={expanded1}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded1} timeout="auto" unmountOnExit>
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
                expand={expanded2}
                onClick={handleExpandClick2}
                aria-expanded={expanded2}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded2} timeout="auto" unmountOnExit>
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
                expand={expanded3}
                onClick={handleExpandClick3}
                aria-expanded={expanded3}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded3} timeout="auto" unmountOnExit>
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

        <Box>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title="Frances Arnold" subheader="Engenharia Química" />
            <CardMedia
              component="img"
              height="194"
              image="https://www.aiche.org/sites/default/files/styles/chenected_lead_image/public/images/Chenected/lead/frances-arnold_0.jpg?itok=tKXdVPU9"
              alt="Frances Arnold"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                “Se você vai mudar o mundo, precisa ser destemida.”
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded4}
                onClick={handleExpandClick4}
                aria-expanded={expanded4}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded4} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph style={{ fontWeight: "bold" }}>
                  História
                </Typography>
                <Typography paragraph>
                  Frances Arnold nasceu e foi criada em Pittsburgh, Pensilvânia,
                  nos Estados Unidos. A terceira de cinco filhos em uma família
                  suburbana, dirigia um táxi e trabalhava como garçonete em um
                  clube de jazz, além de participar de protestos contra a Guerra
                  do Vietnã quando tinha 17 anos.
                </Typography>
                <Typography paragraph>
                  Estudou engenharia mecânica e aeroespacial na Universidade de
                  Princeton. Ela então continuou seus estudos na Universidade da
                  Califórnia, Berkeley, onde obteve um doutorado em engenharia
                  química em 1985. Posteriormente, trabalhou no Instituto de
                  Tecnologia da Califórnia (Caltech). Além disso, se interessou
                  por tecnologia de energia cedo e formou uma empresa em 2005
                  para produzir combustíveis renováveis.
                </Typography>
                <Typography paragraph>
                  Frances ganhou o Nobel de Química em 2018. A primeira mulher
                  graduada de Princeton a receber o prêmio e a primeira pessoa
                  que obteve seu diploma de graduação em Princeton a receber um
                  Prêmio Nobel nas ciências naturais (química, física e
                  fisiologia ou medicina). Frances Arnold usou mudanças
                  genéticas e seleção para desenvolver proteínas que resolvem os
                  problemas químicos da humanidade. Realizou a primeira evolução
                  dirigida de enzimas e seus resultados incluem a fabricação de
                  substâncias químicas mais ecológicas, como produtos
                  farmacêuticos, e a produção de combustíveis renováveis.
                </Typography>

                <Typography paragraph>
                  O trabalho de Arnold foi reconhecido por muitos prêmios, como
                  o Prêmio Draper (a primeira mulher a recebê-lo) e a Medalha
                  Nacional de Tecnologia e Inovação. Foi eleita para a Academia
                  Americana de Artes e Ciências e incluída no Hall da Fama dos
                  Inventores Nacionais. Ela foi a primeira mulher a ser eleita
                  para todas as três Academias Nacionais nos Estados Unidos - a
                  Academia Nacional de Engenharia, a Academia Nacional de
                  Medicina, e a Academia Nacional de Ciências.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Box>

        <Box>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title="Donna Strickland" subheader="Física" />
            <CardMedia
              component="img"
              height="194"
              image="https://us.edu.pl/wp-content/uploads/obrazek-wyrozniajacy/2019-Photo-Shoot-with-Donna-Strickland.jpg"
              alt="Donna Strickland"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                “Parece que o mundo está acordando para a engenhosidade das
                mulheres cientistas.”
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded5}
                onClick={handleExpandClick5}
                aria-expanded={expanded5}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded5} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph style={{ fontWeight: "bold" }}>
                  História
                </Typography>
                <Typography paragraph>
                  Donna Strickland nasceu em 27 de maio de 1959, em Guelph ,
                  Ontário, Canadá. Depois de se formar no Guelph Collegiate
                  Vocational Institute, ela decidiu frequentar a McMaster
                  University porque seu programa de engenharia física incluía
                  lasers e eletro-óptica , áreas de particular interesse dela.
                  Na McMaster, ela era uma das três mulheres em uma classe de
                  vinte e cinco. Strickland formou-se como bacharel em
                  engenharia física em 1981.
                </Typography>
                <Typography paragraph>
                  Logo após sua graduação, estudou óptica na University of
                  Rochester, nos Estados Unidos e obteve seu doutorado em óptica
                  em 1989.
                </Typography>
                <Typography paragraph>
                  Foi pesquisadora do Conselho Nacional de Pesquisa do Canadá.
                  No ano de 1992 trabalhou no Laboratório Nacional Lawrence
                  Livermore sobre divisão de laser. Ingressou como professora
                  associada na Universidade de Waterloo em 1997, onde até hoje
                  lidera um grupo de estudos com laser de alta intensidade.
                </Typography>
                <Typography paragraph>
                  Donna ganhou o Prêmio Nobel de Física em 2018 por desenvolver
                  a amplificação de pulsos de laser ultracurtos de alta
                  intensidade sem destruir o material amplificador. A
                  amplificação de pulso tem muitos usos, incluindo ferramentas
                  com aplicações em medicina, indústria, ciência e segurança.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Box>

        <Box>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title="Carolyn Bertozzi" subheader="Química" />
            <CardMedia
              component="img"
              height="194"
              image="https://news.stanford.edu/report/wp-content/uploads/sites/3/2022/02/bertozzi.jpeg"
              alt="Carolyn Bertozzi"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                “As oportunidades estão sempre passando e, se você as vê, deve
                ver aonde o caminho a leva.”
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded6}
                onClick={handleExpandClick6}
                aria-expanded={expanded6}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded6} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph style={{ fontWeight: "bold" }}>
                  História
                </Typography>
                <Typography paragraph>
                  Carolyn Bertozzi cresceu em Lexington, Massachusetts, nos
                  Estados Unidos. Jogou futebol no colégio e foi recrutada para
                  Harvard com uma bolsa de estudos para atletas. Ela começou
                  como estudante de biologia, mas no segundo ano fez uma aula de
                  química orgânica, que adorou, embora continuasse a ter aulas
                  de biologia, mudou sua especialização para química.
                </Typography>
                <Typography paragraph>
                  Apesar dos obstáculos, Bertozzi juntou-se ao corpo docente da
                  UC Berkeley em 1996 e depois à Universidade de Stanford em
                  junho de 2015. Ganhou uma bolsa ao mérito da MacArthur em 1999
                  e foi eleita para o Instituto de Medicina, a Academia Nacional
                  de Ciências e a Academia Americana de Artes e Ciências. Também
                  recebeu o Prémio Lemelson-MIT (a primeira mulher a recebê-lo),
                  o Prémio Heinrich Wieland, o Prémio ACS em Química Pura e o
                  Prémio de Química do Futuro Solv.
                </Typography>
                <Typography paragraph>
                  Ela desenvolveu reações bioortogonais que ocorrem dentro de
                  organismos vivos sem interromper a química normal da célula.
                  Essas reações agora são usadas para explorar células, rastrear
                  processos biológicos e melhorar o direcionamento de produtos
                  farmacêuticos contra o câncer.
                </Typography>

                <Typography paragraph>
                  A pesquisa na interface da química e da biologia de Bertozzi
                  ganhou o Nobel pelo seu trabalho na “química de cliques”,
                  maneiras pelas quais as moléculas podem encaixar-se para criar
                  reações rápidas e evitar subprodutos. Carolyn Bertozzi foi a
                  segunda pessoa LGBTI+ a vencer um Prémio Nobel em 2022.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Box>
      </Box>
    </>
  );
}
