import { Grid, Typography } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react'
import { Box } from '@mui/material';

function Footer() {
    return (<>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ backgroundColor: '#d74883' }}>
            <Box display={'flex'} alignItems="center" style={{ height: '120px' }} width={'100%'} justifyContent={'space-around'}>
                <Box>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom style={{ color: "#ffff" }}>
                            Siga-nos nas redes sociais{' '}
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">

                        <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                            <InstagramIcon style={{ fontSize: 40, color: "#ffff" }} />
                        </a>
                        <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                            <LinkedInIcon style={{ fontSize: 40, color: "#ffff" }} />
                        </a>
                        <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                            <MailIcon style={{ fontSize: 40, color: "#ffff" }} />
                        </a>
                    </Box>
                </Box>

                <Box>
                    <Box paddingTop={1}>
                        
                        <a>
                            <Typography 
                            variant="h5" 
                            gutterBottom 
                            align="center" 
                            component={"span"} 
                            style={{ color: "#ffff" }}
                            >
                                elasexatas.com
                            </Typography>
                        </a>

                        <Typography 
                        variant="h5" 
                        align="center" 
                        gutterBottom 
                        style={{ color: "#ffff" }} 
                        component={"span"}
                        >
                            {'  '} © 2023 
                        </Typography>

                    </Box>
                </Box>
            </Box>

        </Grid>
    </>
    )
}

export default Footer