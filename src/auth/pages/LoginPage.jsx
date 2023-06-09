import {Link as RouterLink} from 'react-router-dom';

import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";

import { AuthLayout } from '../layout/AuthLayout';
import libro from '../../img/libro2.png'
import titulo from '../../img/titulo.png';

const buttonSesion = {
  borderRadius: '20px',
  padding: '10px 20px',
  backgroundColor: '#D09CFA',
  color: 'white',
  textTransform: 'none',
  fontSize: '14px',
  width: '200px',
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
  width: '200px',
  borderColor: '#D09CFA',
  '&:hover': {
    backgroundColor: 'white',
  },
};


export const LoginPage = () => {

  return (
  <AuthLayout>

    {/* Caja del formulario de login */}
    <Grid item xs={12} sm={6} md={4} className="box-shadow">
      <Box p={4} bgcolor='white'  sx={{ height: '560px'}} >

      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        >
            <img src={titulo} alt="titulo" style={{ width: '80%', height: '10%' }} />
           
          <Typography mt={5} variant="h6" fontFamily='revert-layer'> Inicio de sesión </Typography>
        </Grid>
         

        <form  >
        <Grid container mt={3}>
            <Grid item xs={12}>
              <TextField
              color="primary" 
              variant="filled"
              label='Email'
              type="email"
              placeholder="Ingresa tu email" 
              InputProps={{ sx: { height: '49px' } }}
              fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2}}>
              <TextField
              color="primary" 
              variant="filled"
              label='Contraseña'
              type="password"
              placeholder="Ingresa tu contraseña"
              InputProps={{ sx: { height: '49px' } }}
              fullWidth 
              />
            </Grid>

            <Grid container
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
            >
               <Grid item sx={{ mt: 3}}>
                {/* para que se redirija a otra parte */}
                <Typography sx={{mr: 1}}> ¿Olvidaste tu contraseña? </Typography>
              </Grid>

            <Grid item sx={{ mt: 3}}>
              <Button variant="contained" sx={buttonSesion}>
                Iniciar sesión
              </Button>
            </Grid>

            <Grid item  sx={{ mt: 3}}>
            <Link component={RouterLink} to="/auth/register">
                <Button variant="contained" sx={buttonRegister}>
                      Registrar
                </Button>
              </Link>
            </Grid>

            </Grid>
          </Grid>
    
        </form>
      </Box>
    </Grid>

    {/* Caja de la imagen */}
    <Grid item  xs={12} sm={6} md={4} className="box-shadow">
            <Box
              p={4} 
              bgcolor='#D09CFA'  
              sx={{height:'560px'}}
            >
                <img src={libro} alt="Imagen" style={{ width: '100%', height: '57%' }} />
                
                <Typography variant="body1" mt={6} textAlign='center' fontFamily='revert-layer' lineHeight={2}>
                    El mundo que hemos creado es un proceso de nuestro pensamiento. No se puede cambiar sin nuestra forma de pensar.          
                </Typography> 

            </Box>
    </Grid>
  </AuthLayout>
  
  )
}
