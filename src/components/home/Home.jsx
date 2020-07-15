import { Box, Grid, Hidden, Typography } from '@mui/material';
import React from 'react';
import AdPhoto from './ad.png';
import RightNotation from './right.png';
import LeftNotation from './left.png';
import sectionPhoto from './sectionPhoto.png';
import sectionPhotoTrack from './sectionPhotoTrack.png';
const Home = () => {
    return (
        <div>
            <Box maxWidth='xl' margin='50px auto'>
                <Grid container spacing={0} alignContent='center' justifyContent={'center'}>
                    {/* fist section */}
                    <Grid item container xs={12} mt={5} alignItems='center' justifyContent={'center'}>
                        <Grid item xs={1} sm={1}> </Grid>
                        <Grid item xs={12} sm={10} container justifyContent={{ xs: 'center', sm: '' }}>
                            <Grid item xs={8}>
                                <Typography fontSize={{ xs: '30px', sm: '35px', md: '45px' }} sx={{ fontWeight: 'bolder' }} mb={2}>
                                    Upload Mobile Content
                                </Typography>

                                <Typography fontSize={{ xs: '17px', sm: '18px', md: '22px' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit, sed diam <br />
                                    nonummy nibh euismod tincidunt.
                                </Typography>
                                {/* button and slider img section */}
                                <Grid container alignItems='center' spacing={2} mt={3} >
                                    <Grid item xs={5} sm={4} textAlign='right'>
                                        <button className='upload-btn' > Upload </button>
                                    </Grid>

                                    <Grid item xs={2}>
                                        <img src={LeftNotation} alt='right' width='100%' />
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item xs={3}>
                                <img src={sectionPhoto} alt='ad' width='100%' />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={1} mt={4} sx={{ background: '#FFEBB4' }}>
                            {/* <span>Ads</span> */}
                            <img src={AdPhoto} alt='ad' width='100%' style={{ maxHeight: '200px' }} />
                        </Grid>
                    </Grid>

                    {/* second Section */}
                    <Grid item container xs={12} mt={10} alignItems='center' justifyContent={'center'}>
                        <Hidden smDown>
                            <Grid item xs={12} sm={1} mt={4} sx={{ background: '#FFEBB4' }}>
                                <img src={AdPhoto} alt='ad' width='100%' style={{ maxHeight: '200px' }} />
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} sm={10} container justifyContent={{ xs: 'center', sm: '' }}>
                            <Grid item xs={3}>
                                <img src={sectionPhotoTrack} alt='ad' width='100%' />
                            </Grid>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={7}>
                                <Typography fontSize={{ xs: '30px', sm: '35px', md: '45px' }} sx={{ fontWeight: 'bolder' }} mb={2}>
                                    Track Phone Content
                                </Typography>

                                <Typography fontSize={{ xs: '17px', sm: '18px', md: '22px' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit, sed diam <br />
                                    nonummy nibh euismod tincidunt.
                                </Typography>
                                {/* button and slider img section */}
                                <Grid container alignItems='center' justifyContent={{ xs: '', sm: 'center' }} spacing={2} mt={3} >
                                    <Grid item xs={2}>
                                        <img src={RightNotation} alt='right' width='100%' />
                                    </Grid>
                                    <Grid item xs={5} sm={4} textAlign='left'>
                                        <button className='upload-btn' > Track </button>
                                    </Grid>
                                </Grid>

                            </Grid>

                        </Grid>
                        <Hidden smUp>
                            <Grid item xs={12} sm={1} mt={4} sx={{ background: '#FFEBB4' }}>
                                <img src={AdPhoto} alt='ad' width='100%' style={{ maxHeight: '200px' }} />
                            </Grid>
                        </Hidden>
                        <Grid item xs={1} sm={1}> </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Home;
