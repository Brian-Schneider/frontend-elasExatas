import { Grid, Typography } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react'
import { Box } from '@mui/material';

function Footer() {
    return (
    <>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center">
            <Box display={'flex'} alignItems="center"  style={{ backgroundColor: '#d74883', height: '95px'}} width={'100%'} justifyContent={'space-around'} paddingBottom={1}>
                <Box>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h6" align="center" gutterBottom style={{ color: "#ffff", marginBottom:'10px' }}>
                            Siga-nos nas redes sociais{' '}
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://github.com/orgs/ElasExatas/repositories" target="_blank">
                            <GitHubIcon style={{ fontSize: 35, color: "#ffff", marginBottom:'10px' }} />
                        </a>
                        <a href="mailto:elasexatasgen@gmail.com" target="_blank">
                            <MailIcon style={{ fontSize: 40, color: "#ffff", marginLeft: '20px', marginBottom:'5px' }} />
                        </a>
                    </Box>
                </Box>

                <Box>
                    <Box paddingTop={1} >
                        
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