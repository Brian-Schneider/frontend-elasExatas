import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import './Home.css';

function Home(){
    return(
        <>
        <Grid container 
        direction="row" 
        justifyContent="center" 
        alignItems="center" 
        className='caixa'
        >
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography 
                        variant="h3" 
                        gutterBottom 
                        color="textPrimary" 
                        component="h3" 
                        align="center" 
                        className='titulo' 
                        style={{color: "#174581", fontWeight: "bold"}}
                        >
                            Sejam bem vindas ao Elas Exatas!
                        </Typography>

                        <Typography 
                        variant="h5" 
                        gutterBottom 
                        color="textPrimary" 
                        component="h5" align="center" 
                        className='titulo'
                        
                        >
                            Expresse aqui os seus pensamentos e opiniões!
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#107bbf", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img 
                    src="https://i.imgur.com/MAqYMtr.png" 
                    alt="" 
                    className='fotoHome' 
                    />
                </Grid>
                        <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
        </>
    );

}

export default Home;