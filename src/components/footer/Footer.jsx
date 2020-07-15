import { Box } from '@mui/system';
import React from 'react';
import footerImg  from './footerImg.png';
const Footer = () => {
    return (
       <Box sx={{textAlign:'center'}} mb={10}>
           <img src={footerImg} alt='footer'  />
       </Box>
    );
}

export default Footer;
