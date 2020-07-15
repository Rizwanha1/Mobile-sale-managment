import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import adPhoto from './adPhoto.png';
import sectionPhoto from './sectionPhoto.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function SignIn({ setcurrentUser }) {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const response = await axios.post('http://localhost:8080/login', { email: data.get('email'), password: data.get('password') });
    setcurrentUser(response.data);
    response.data ? toast.success(`Welcome ${response.data.sellerFirstName}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }) : toast.error('Invalid Credentials!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate('/');
  };
  return (
    <Box maxWidth={'xl'} margin='auto'>
      <Grid container alignItems={'center'} justifyContent={'center'}>
        <Grid item xs={false} md={5} mb={5}>
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'center',
              }}
            >
              <Typography fontSize={{ xs: '25px', sm: '30px', md: '37px' }}
                sx={{ fontWeight: 'bolder' }}>
                Account Details
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  sx={{ backgroundColor: '#FFF6DB' }}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  sx={{ backgroundColor: '#FFF6DB' }}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, pr: 2, pl: 2, borderRadius: '30px', background: '#2D454F', color: 'white' }}
                >
                  Log In
                </Button>
              </Box>
            </Box>
          </Container>
        </Grid>
        {/* image  */}
        <Grid item xs={false} md={5} mb={5}>
          <img src={sectionPhoto} alt="ad" />
        </Grid>
        <Grid item xs={false} md={10} textAlign='center' mt={7}>
          <img src={adPhoto} alt="ad" width='70%' />
        </Grid>
      </Grid>
    </Box>
  );
}