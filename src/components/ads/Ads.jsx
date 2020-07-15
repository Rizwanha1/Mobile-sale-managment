import { Box } from '@mui/system';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Facebook_ads from './Facebook_ads.jpg'
import Facebook_ads2 from './1ecee0111133309.5ffc7841975bf.jpg'
import Facebook_ads3 from './1645002013504.jpg'
import Facebook_ads4 from './advertising_teaching_unit-3.png'
import Facebook_ads5 from './facebook-ads-graphic.jpg'
const Ads = ({ imagesArray, height, mobileHeight = '100px' }) => {
    imagesArray = imagesArray || [Facebook_ads, Facebook_ads2, Facebook_ads3, Facebook_ads4, Facebook_ads5]
    return (
        <div>
            <Carousel
                showArrows={false}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showArrows={false}
                showStatus={false}
                swipeable={true}
                autoPlay={true}
            >
                {
                    imagesArray.map((image, indx) => {
                        return <div>
                            <Box sx={{ '&:hover': { cursor: 'pointer' } }} varient='div' key={indx} component={'img'} src={image} alt='ad' height={{ xs: mobileHeight, md: height }} width='100%' />
                        </div>

                    })
                }

            </Carousel>
        </div>
    );
}

export default Ads;
