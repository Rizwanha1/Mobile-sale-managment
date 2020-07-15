import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import adPhoto from './adPhoto.png';
import sectionPhoto from './sectionPhoto.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TableSellerInfo from './TableSellerInfo';
import { useNavigate } from 'react-router-dom';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 3,// optional, default to 1.
        partialVisibilityGutter: 40
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
        partialVisibilityGutter: 40

    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
        partialVisibilityGutter: 40
    }
};
const Sellerinfo = ({ dataSet, currentUser }) => {
    
    const navigate = useNavigate();

    dataSet ? navigate('/login') : navigate('/login');
    return (
        <Box maxWidth={'xl'} margin='auto'>
            <Grid container alignItems={'center'} justifyContent={'center'} mt={8}>
                <Grid item xs={11} md={2} mb={5}>
                    <img src={adPhoto} alt="adPhoto" />
                </Grid>
                <Grid item xs={10} md={4} mb={5}>
                    <img src={sectionPhoto} alt="sectionPhoto" />
                </Grid>
                <Grid item xs={11} md={4} mb={5}>
                    <Box component="main" maxWidth="xs">
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                // alignItems: 'right',
                            }}
                        >
                            <Typography fontSize={{ xs: '25px', sm: '30px', md: '40px' }}
                                sx={{ fontWeight: 'bolder' }}>
                                Seller Detail
                            </Typography>

                            <TableSellerInfo dataSet={dataSet} />
                        </Box>
                    </Box>
                    {/* slider */}
                    <Box>
                        <Typography textAlign={'right'} mt={5}>
                            <span>Product Images</span>
                        </Typography>
                        <Box sx={{ mt: 3 }}>
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                responsive={responsive}
                                infinite={true}
                                autoPlay={true}
                                partialVisible={true}
                            // renderButtonGroupOutside={true}
                            >
                                <div style={{ background: 'red', height: '150px', width: '200px' }}>Item 1</div>
                                <div style={{ background: 'green', height: '150px', width: '200px' }}>Item 2</div>
                                <div style={{ background: 'yellow', height: '150px', width: '200px' }}>Item 3</div>
                                <div style={{ background: 'gray', height: '150px', width: '200px' }}>Item 4</div>
                            </Carousel>;
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Sellerinfo;
