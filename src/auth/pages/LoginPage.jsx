import {Link as RouterLink} from 'react-router-dom';
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";

import Swal from 'sweetalert2';
import  "sweetalert2/dist/sweetalert2.min.css";

import { AuthLayout } from '../layout/AuthLayout';
import libro from '../../img/libro2.png'
import titulo from '../../img/titulo.png';

import { useAuthStore, useForm } from '../../hooks';
import { useEffect } from 'react';


const buttonSesion = {
  borderRadius: '20px',
  padding: '10px 20px',
  backgroundColor: '#D09CFA',
  color: 'white',
  textTransform: 'none',
  fontSize: '14px',
  width: '190px',
  '&:hover': {
    backgroundColor: '#D09CFA',
  },
};
const buttonRegister = {
  borderRadius: '20px',
  padding: '10px 20px',
  backgroundColor: 'white',
  color: '#D09CFA',
  textTransform: 'none',
  fontSize: '14px',
  width: '190px',
  borderColor: '#D09CFA',
  '&:hover': {
    backgroundColor: 'white',
  },
};

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const {startLogin, errorMessage} = useAuthStore();

  const {email, password, onInputChange, formState } = useForm(formData);

  const onSubmit = (event) => {
    event.preventDefault();
    startLogin( email, password)
  }

  useEffect(() => {
    if ( errorMessage !== undefined) {
      Swal.fire('Error en la autenticación', errorMessage, 'error')
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
           
          <Typography mt={5} variant="h6" fontFamily='revert-layer'> Inicio de sesión </Typography>
        </Grid>
         

        <form onSubmit={onSubmit} >
        <Grid container mt={3}>
            <Grid item xs={12}>
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
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
            >
              
              <Grid item sx={{ mt: 4}}>
                <Button 
                  // disabled={ isAuthenticating }
                  type='submit' 
                  variant="contained" 
                  sx={buttonSesion}
                >
                  Iniciar sesión
                </Button>
              </Grid>

            <Grid item  sx={{ mt: 2}}>
            <Link component={RouterLink} to="/auth/register">
                <Button 
                  // disabled={ isAuthenticating}
                  variant="contained" 
                  sx={buttonRegister}>
                      Registrar
                </Button>
              </Link>
            </Grid>
            <Grid item  sx={{ mt: 3}}>
                {/* para que se redirija a otra parte */}
                <Typography>¿Olvidaste tu contraseña?</Typography>
              </Grid>
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
