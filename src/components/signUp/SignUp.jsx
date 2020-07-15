import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import adPhoto from './adPhoto.png';
import rightImage from './rightImage.png';
import leftImage from './leftImage.png';
import { Hidden } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';


const theme = createTheme();
const Signup = ({ dataSet, setDataSet }) => {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const flagRegistration = dataSet.filter(user => user.sellerEmail === data.get('email') ? true : false);
        if (flagRegistration.length === 0 && data.get('firstName') && data.get('lastName') && data.get('email') && data.get('password')) {
            const response = await axios.post('http://localhost:8080/register', {
                firstName: data.get('firstName'),
                lastName: data.get('lastName'),
                password: data.get('password'),
                email: data.get('email'),
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
            });
            const responseDS = await axios.get('http://localhost:8080/dataSet');
            setDataSet(responseDS.data);
            navigate('/login');
        } else {
            toast.error('Try New Email', {
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
        <ThemeProvider theme={theme}>
            <Grid container alignItems={'center'} justifyContent={'center'} maxWidth='xl' margin='auto'>
                <Grid item xs={false} md={2} >
                    <img src={adPhoto} alt="ad" />
                </Grid>
                <Grid item xs={false} md={1} >
                    <Hidden mdDown>
                        <img src={leftImage} width='auto' alt="ad" />
                    </Hidden>
                </Grid>
                <Grid item xs={12} sm={5} md={4} sx={{ position: 'relative' }}>
                    <Container component="main" maxWidth="xs" sx={{ background: '#FFF6DB', borderRadius: '30px' }}>
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign up
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} >
                                        <TextField
                                            sx={{ background: '#FFEEC2' }}
                                            autoComplete="given-name"
                                            name="firstName"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} >
                                        <TextField
                                            sx={{ background: '#FFEEC2' }}
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="family-name"
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            sx={{ background: '#FFEEC2' }}
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            sx={{ background: '#FFEEC2' }}
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"
                                        />
                                    </Grid>
                                </Grid>
                                <center>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2, pr: 2, pl: 2, borderRadius: '30px', background: '#2D454F', color: 'white' }}
                                    >
                                        Sign Up
                                    </Button>
                                </center>

                            </Box>
                        </Box>
                    </Container>
                    <Grid container justifyContent="flex-end" mt={5}>
                        <Grid item xs={12} mb={5}>
                            <Link to='/login' variant="body2">
                                <center>Get Verified</center>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={false} sm={false} md={1} sx={{ position: 'relative' }} >
                    <Hidden mdDown>
                        <img src={rightImage} width='auto' alt="ad" />
                    </Hidden>
                </Grid>
                {/* second Ads */}
                <Grid item xs={false} md={2} textAlign={{ xs: 'center', sm: 'right' }}>
                    <img src={adPhoto} alt="ad" />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Signup;
