import {  FacebookOutlined, GitHub, Google } from '@mui/icons-material';
import {  Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import adPhoto from "./adPhoto.png";
import sectionPhoto from "./sectionPhoto.png";

const Contact = () => {
    return (
        <Box maxWidth='xl' margin='50px auto'>
            <Grid container spacing={3} justifyContent={{ xs: 'center' }}>
                <Grid item xs={11} sm={7} spacing={1} mt={5}>
                    <Typography fontSize={{ xs: '30px', sm: '35px', md: '45px' }}
                        sx={{ fontWeight: 'bolder' }}
                        mb={2}>
                        Who We are
                    </Typography>
                    <Typography fontSize={{ xs: '17px', sm: '18px', md: '22px' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit,
                        <br /> sed diam nonummy nibh euismod tincidunt.
                        <br />Lorem ipsum dolor sit amet consectetur adipisicing tincidunt.
                    </Typography>
                    {/* second Heading  */}
                    <Grid container alignItems={'center'} mt={5}>
                        <Grid item xs={11} sm={6}>
                            <Typography fontSize={{ xs: '30px', sm: '35px', md: '45px' }}
                                sx={{ fontWeight: 'bolder' }}
                                mb={2}>
                                For Any Queries
                            </Typography>
                            <List>
                                <ListItem >
                                    <ListItemIcon>
                                        <span style={{ border: '1px solid #FDC40F', borderRadius: '50%' }} >
                                            <Google style={{ padding: '8px', color: '#FDC40F' }} />
                                        </span>
                                    </ListItemIcon>
                                    <ListItemText>
                                        Lorem ipsum dolor sit amet
                                    </ListItemText>
                                </ListItem>



                                <ListItem >
                                    <ListItemIcon>
                                        <span style={{ border: '1px solid #FDC40F', borderRadius: '50%' }} >
                                            <FacebookOutlined style={{ padding: '8px', color: '#FDC40F' }} />
                                        </span>
                                    </ListItemIcon>
                                    <ListItemText>
                                        Lorem ipsum dolor sit amet
                                    </ListItemText>
                                </ListItem>



                                <ListItem >
                                    <ListItemIcon>
                                        <span style={{ border: '1px solid #FDC40F', borderRadius: '50%' }} >
                                            <GitHub style={{ padding: '8px', color: '#FDC40F' }} />
                                        </span>
                                    </ListItemIcon>
                                    <ListItemText>
                                        Lorem ipsum dolor sit amet
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={11} sm={4} textAlign={{ xs: 'center', sm: 'right' }}>
                            <img src={sectionPhoto} alt="adPhoto" />
                        </Grid>
                    </Grid>
                </Grid>
                {/* adds section */}
                <Grid item xs={11} sm={2} textAlign='right' spacing={1} mt={5}>
                    <img src={adPhoto} alt="adPhoto" />
                </Grid>
            </Grid>
        </Box>

    );
}

export default Contact;
