import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import './TabPostagens.css'
import ListaPostagens from '../listaPostagem/ListaPostagens';

function TabPostagens() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    // TabIndicatorProps={{style: {display: 'none'}}}
    return (
        <TabContext value={value}>
            <AppBar position="static" className='barrinha'>
                <TabList centered indicatorColor='primary'  
                className='barrinha' onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Postagens" value="1" />
                    <Tab label="Sobre o projeto" value="2" />
                </TabList>
            </AppBar>
            <TabPanel value="1">
                <ListaPostagens />
            </TabPanel>
            <TabPanel value="2">
            Elas Exatas é uma rede social pensada para incentivar e encorajar meninas e mulheres a ingressarem na área de exatas. 
            Foi através da ODS 5: Igualdade de gênero, que enxergamos a escassez de mulheres no ramo e percebemos a importância de ter uma ferramenta que ajude a melhorar esse padrão.
Nosso objetivo é aproximar e facilitar o contato entre mulheres que já são dessa área com aquelas que têm interesse, e temos a esperança de que em algum momento melhoraremos esses índices.
            </TabPanel>
        </TabContext>
    )
}

export default TabPostagens