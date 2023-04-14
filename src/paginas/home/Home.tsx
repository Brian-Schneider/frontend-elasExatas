import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import './Home.css';

function Home(){
    return(
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" >
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center">Seja bem vinde ao Elas Exatas!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center">Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" >Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://imgur.com/Nkw1WYD" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} >
                </Grid>
            </Grid>
        </>
    );

}

export default Home;