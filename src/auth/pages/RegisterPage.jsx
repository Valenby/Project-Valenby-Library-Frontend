
import {Link as RouterLink, useNavigate} from 'react-router-dom';

import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material"

import Swal from 'sweetalert2';
import  "sweetalert2/dist/sweetalert2.min.css";

import { useAuthStore, useForm } from '../../hooks';

import { AuthLayout } from '../layout/AuthLayout';
import libro from '../../img/libro2.png'
import titulo from '../../img/titulo.png';
import { useEffect } from 'react';


const buttonSesion = {
  borderRadius: '20px',
  padding: '10px 20px',
  backgroundColor: '#D09CFA',
  color: 'white',
  textTransform: 'none',
  fontSize: '14px',
  width: '170px',
  '&:hover': {
    backgroundColor: '#D09CFA',
  },
};
const formData = {
  email: '',
  displayName: '',
  password: ''
}

export const RegisterPage = () => {

  const {startRegister, errorMessage} = useAuthStore();
  const {displayName ,email, password, onInputChange} = useForm(formData)
  const navigate = useNavigate()

  const onSubmit = async (event) => {
    event.preventDefault();

    if (displayName.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor ingresa tu nombre completo',
      });
      return;
    }
  
    if (email.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor ingresa tu email',
      });
      return;
    } else if (!email.includes('@')) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor ingresa un email válido',
      });
      return;
    }
  
    if (password.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor ingresa tu contraseña',
      });
      return;
    } else if (password.trim().length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La contraseña debe tener al menos 6 caracteres',
      });
      return;
    }

    const data = await startRegister(email, password, displayName);
    console.log(data)
    if (data.email) {
      navigate('/auth/login');
    }
  };

  useEffect(() => {
    if ( errorMessage !== undefined ) {
      Swal.fire('Error en la autenticación', errorMessage, 'error');
    }    
  }, [errorMessage])

  return (
  <AuthLayout>
    {/* Caja del formulario de login */}
    <Grid item xs={12} sm={6} md={4} lg={4} xl={2.5} className="box-shadow">
      <Box p={4} bgcolor='white'  sx={{ height: '560px'}} >
        
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <img src={titulo} alt="titulo" style={{ width: '80%' }} />
          <Typography mt={3} variant="h6" fontFamily='revert-layer'>Crear cuenta</Typography>

        </Grid>
          
        <form onSubmit={ onSubmit }>

        <Grid container mt={3}>
            <Grid item xs={12}>
              <TextField
              color="primary" 
              label='Nombre completo'
              type="text"
              placeholder="Ingresa tu nombre" 
              variant="filled"
              InputProps={{ sx: { height: '49px' } }}
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2}}>
              <TextField
              color="primary" 
              label='Email'
              type="email"
              placeholder="Ingresa tu email" 
              variant="filled"
              InputProps={{ sx: { height: '49px' } }}
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2}}>
              <TextField
              color="primary" 
              label='Contraseña'
              type="password"
              placeholder="Ingresa tu contraseña" 
              variant="filled"
              InputProps={{ sx: { height: '49px' } }}
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
              />
            </Grid>

            <Grid container
                  mt={4}
                  direction='column' 
                  alignItems='center'
                  justifyContent='center'
            >
                <Button 
                  type='submit'
                  variant="contained" 
                  sx={buttonSesion}>
                    Crear Cuenta
                </Button>
            </Grid>

            <Grid container
                  mt={4}
                  direction='row' 
                  alignItems='center'
                  justifyContent='space-around'
            >
               
                <Typography> ¿Tienes una cuenta? </Typography>
                
                <Link sx={{mr: 1}} component={RouterLink} to="/auth/login"> 
                      Ingresar
                </Link>
            </Grid>
           

            </Grid>
        </form>

      </Box>
    </Grid>

    {/* Caja de la imagen */}
    <Grid item  xs={12} sm={6} md={4} lg={4} xl={2.5} className="box-shadow">
    <Box
      p={4} 
      bgcolor='#D09CFA'  
      sx={{height:'560px'}}
    >
        <img src={libro} alt="Imagen" style={{ width: '100%', height: '68%' }} />
        
        <Typography variant="body1" mt={3} textAlign='center' fontFamily='revert-layer' lineHeight={2}>
            El mundo que hemos creado es un proceso de nuestro pensamiento. No se puede cambiar sin nuestra forma de pensar.          
        </Typography> 

    </Box>
    </Grid>
  </AuthLayout>
  )
}

