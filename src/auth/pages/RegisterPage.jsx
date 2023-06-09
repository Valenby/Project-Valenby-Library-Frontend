
import {Link as RouterLink} from 'react-router-dom';
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material"

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


export const RegisterPage = () => {
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
           
          <Typography mt={5} variant="h6" fontFamily='revert-layer'>Inicio de sesión</Typography>
        </Grid>
          

        <form >
        <Grid container mt={3}>
            <Grid item xs={12}>
              <TextField
               color="primary" 
              variant="filled"
              label='Nombre'
              type="text"
              placeholder="Ingresa tu nombre" 
              InputProps={{ sx: { height: '49px' } }}
              fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2}}>
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
              placeholder="Ingresa tu Contraseña"
              InputProps={{ sx: { height: '49px' } }}
              fullWidth 
              />
            </Grid>

            <Grid container
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
            >

            <Grid item sx={{ mt: 5}}>
                <Typography sx={{mr: 1}}> ¿Ya tienes cuenta? </Typography>
            </Grid>
            <Grid item sx={{ mt: 2}}>
            <Link component={RouterLink} to="/auth/login">
              <Button variant="contained" sx={buttonSesion}>
                  Ingresar
              </Button>
            </Link>
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
                <img src={libro} alt="Imagen" style={{ width: '100%', height: '57%' }} />
                
                <Typography variant="body1" mt={6} textAlign='center' fontFamily='revert-layer' lineHeight={2}>
                    El mundo que hemos creado es un proceso de nuestro pensamiento. No se puede cambiar sin nuestra forma de pensar.          
                </Typography> 

            </Box>
    </Grid>

  </AuthLayout>

  )
}

