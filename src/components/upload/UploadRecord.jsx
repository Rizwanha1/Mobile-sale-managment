import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import adPhoto from "./adPhoto.png";
import sectionPhoto from "./sectionPhoto.png";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LeftNotation from './left.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const theme = createTheme();
const Uploadrecord = ({ setDataSet, currentUser,setcurrentUser }) => {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (currentUser == false) {
            navigate('/login')
        }
        const data = new FormData(event.currentTarget);
        let newEntry = {
            buyerFirstName: data.get('firstName'),
            buyerLastName: data.get('lastName'),
            buyerFullName: data.get('fullName'),
            buyerContactNumber: data.get('contactNumber'),
            buyerMobileNumber: data.get('mobileNumber'),
            IMEI: data.get('imei'),
        }
        if (currentUser.isAdmin) {
            navigate('/login')
        } else if (data.get('firstName') && data.get('lastName') && data.get('contactNumber') && data.get('mobileNumber') && data.get('imei') && data.get('fullName')) {
            const response = await axios.post('http://localhost:8080/uploadIMEIData', {
                newEntry,
                currentUser,
            });
            response.data.status ? toast.success(`Registration Successful`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }) : toast.error('Refgistration Failed!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            const responseDS = await axios.get('http://localhost:8080/dataSet');
            setDataSet(responseDS.data);
            const responseCurrentUser = await axios.post('http://localhost:8080/login', { email: currentUser.sellerEmail, password: currentUser.sellerPassword });
            setcurrentUser(responseCurrentUser.data);
            navigate('/trackmobile');

        } else {
            toast.error('Failed to Upload Data !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        };
    };
    return (
        <Box maxWidth='xl' margin='50px auto'>
            <Grid container spacing={0} justifyContent={{ xs: 'center' }}>
                <Grid item xs={10} mb={5}>
                    <Typography fontSize={{ xs: '30px', sm: '35px', md: '45px' }}
                        sx={{ fontWeight: 'bolder' }}
                        mb={2}>
                        Upload Phone Status
                    </Typography>
                    <Typography fontSize={{ xs: '17px', sm: '18px', md: '22px' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit, <br /> sed diam nonummy nibh euismod tincidunt.
                    </Typography>
                </Grid>
                {/* form */}
                <Grid item xs={10} sm={5} mb={5}>
                    <ThemeProvider theme={theme}>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Box
                                sx={{
                                    mt: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >

                                <Box component="form" noValidate onSubmit={handleSubmit} >
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="given-name"
                                                name="firstName"
                                                required
                                                fullWidth
                                                id="firstName"
                                                label="First Name"
                                                autoFocus
                                                sx={{ backgroundColor: '#FFF6DB' }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="lastName"
                                                label="Last Name"
                                                name="lastName"
                                                autoComplete="family-name"
                                                sx={{ backgroundColor: '#FFF6DB' }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="fullName"
                                                label="Full Name"
                                                name="fullName"
                                                autoComplete="fullName"
                                                sx={{ backgroundColor: '#FFF6DB' }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="contactNumber"
                                                label="Contact Number"
                                                type="text"
                                                id="contactNumber"
                                                autoComplete="contactNumber"
                                                sx={{ backgroundColor: '#FFF6DB' }}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="mobileNumber"
                                                label="Mobile Number"
                                                type="text"
                                                id="mobileNumber"
                                                autoComplete="mobileNumber"
                                                sx={{ backgroundColor: '#FFF6DB' }}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="imei"
                                                label="IMEI"
                                                type="imei"
                                                id="imei"
                                                autoComplete="imei"
                                                sx={{ backgroundColor: '#FFF6DB' }}
                                            />
                                        </Grid>

                                    </Grid>
                                    <Grid container justifyContent={'center'} alignItems='center' spacing={2} mt={3} >
                                        <Grid item xs={5} sm={4} textAlign='right'>
                                            <button className='upload-btn' > Upload </button>
                                        </Grid>

                                        <Grid item xs={3}>
                                            <img src={LeftNotation} alt='right' width='100%' />
                                        </Grid>
                                    </Grid>

                                </Box>
                            </Box>
                        </Container>
                    </ThemeProvider>
                </Grid>

                <Grid item xs={10} sm={4} mb={5}>
                    <img src={sectionPhoto} alt='sectionPhoto' width='100%' style={{ maxHeight: 'auto' }} />
                </Grid>

                <Grid item xs={10} sm={2}>
                    <img src={adPhoto} alt='ad' width='100%' style={{ maxHeight: '600px' }} />
                </Grid>
            </Grid>
        </Box>

    );
}

export default Uploadrecord;
