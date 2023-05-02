import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import './TabPostagens.css'
import ListaPostagens from '../listaPostagem/ListaPostagens';
import Mulheres from '../../mulheres/Mulheres';
import { Box, CardActions, CardContent, Collapse, Grid, IconButton, IconButtonProps, Typography, styled } from '@mui/material';


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Carousel from '../../estaticos/carousel/Carousel';

function TabPostagens() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };
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

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    

    // TabIndicatorProps={{style: {display: 'none'}}}
    return (
        <TabContext value={value}>
            <AppBar position="static" className='barrinha'>
                <TabList centered indicatorColor='primary'
                    className='barrinha' onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Mulheres Inspiradoras" value="1" />
                    <Tab label="Postagens" value="Postagens" />
                    <Tab label="Eventos" value="Eventos" />
                    <Tab label="Sobre o projeto" value="3" />
                    <Tab label="Desenvolvedores" value="4" />

                </TabList>
            </AppBar>
            <TabPanel value="1">
                <Mulheres />
            </TabPanel>

            <TabPanel value="Postagens">
                <ListaPostagens desabilitar={true} lista="Postagens"/>
            </TabPanel>
            <TabPanel value="Eventos">
                <ListaPostagens desabilitar={true} lista="Eventos"/>
            </TabPanel>
            <TabPanel value="3" >
                <Grid direction={'row'} justifyContent={'center'} alignItems={"center"} display={"flex"}>
                    <Grid item xs={6}>
                        <Typography align='justify' variant='h6' className='sobreProjeto'>
                            Elas Exatas é uma rede social pensada para incentivar e encorajar meninas e mulheres a ingressarem na área de exatas.
                            Foi através da ODS 5: Igualdade de gênero, que enxergamos a escassez de mulheres no ramo e percebemos a importância de ter uma ferramenta que ajude a melhorar esse padrão.
                            Nosso objetivo é aproximar e facilitar o contato entre mulheres que já são dessa área com aquelas que têm interesse, e temos a esperança de que em algum momento melhoraremos esses índices.
                        </Typography>


                    </Grid>

                    <Grid item xs={6}>
                        <img src='https://cdn.discordapp.com/attachments/1070726474568568852/1102639511055380490/6612011_3350477.jpg' className='imagemSobreProjeto' />

                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value="4">
                <Box hidden={expanded}>
                <Carousel trocar={expanded}/>
                </Box>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Carousel trocar={expanded}/>
                </CardContent>
            </Collapse>
            </TabPanel>
        </TabContext>
    )
}

export default TabPostagens