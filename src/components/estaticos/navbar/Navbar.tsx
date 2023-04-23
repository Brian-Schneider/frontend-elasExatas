import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Navbar.css'
import { Link } from 'react-router-dom';


function Navbar() {
    return(
    <>
      <AppBar position="static" style={{background: '#fdcad2'}}>
        <Toolbar variant="dense" >
          <Box display={'flex'} justifyContent={'space-between'} width={'100%'} >
            <Box style={{ cursor: 'pointer' }}>
              <Typography variant="h5" color="#5D6D7E">
                Elas Exatas
              </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
              <Box mx={1} style={{ cursor: 'pointer' }}>
                <Typography variant="h6" color="#5D6D7E">
                  Home
                </Typography>
              </Box>
              <Box mx={1} style={{ cursor: 'pointer' }}>
                <Typography variant="h6" color="#5D6D7E">
                  Postagens
                </Typography>
              </Box>
              <Box mx={1} style={{ cursor: 'pointer' }}>
                <Typography variant="h6" color="#5D6D7E">
                  Temas
                </Typography>
              </Box>
              <Box mx={1} style={{ cursor: 'pointer' }}>
                <Typography variant="h6" color="#5D6D7E">
                  Cadastrar tema
                </Typography>
              </Box>
              <Box mx={1}>
                <Link to='/login'>
                  <Typography variant="h6" color="#5D6D7E">
                    Logout
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
    );
}
export default Navbar