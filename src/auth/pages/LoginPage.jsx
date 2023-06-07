import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import libro from '../../img/libro.png'

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
    <Grid 
      container
      spacing={ 0 }
      direction='row'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: '100vh', margin: 'auto'}}
    >

    
      {/* Grid Item Izquierdo */}
      <Box  
        padding={5}
        className="box-shadow"
        style={{backgroundColor: '#D09CFA', width: '500px' , height:'600px' }}>
     
          <Grid 
            container 
            direction="column" 
            alignItems="center" 
            justifyContent="center"
          >

            <Grid item>
               <img src={libro} alt="Imagen" style={{ width: '350px', height: '300px' }} /> 
            </Grid>

            <Grid item padding={6}>
              <Typography variant="body1">
              El mundo que hemos creado es un proceso de nuestro pensamiento. No se puede cambiar sin nuestra forma de pensar.          
              </Typography>
            </Grid>

          </Grid>
      </Box>
      
      {/* Grid Item Derecho */}
      <Box 
       padding={5}
       className="box-shadow"
       style={{backgroundColor: 'white', width: '500px' , height:'600px' }}>
     
          <Grid 
            container 
            direction="column" 
            alignItems="center" 
            justifyContent="center"
          >

            <Grid item>
              <Typography variant="h2">valenby</Typography>
            </Grid>

            <Grid item margin={3}>
             <Typography variant="h5">Inicio de sesión</Typography>
            </Grid>

          <form>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                label='Email'
                type="email"
                placeholder="Ingresa tu email" 
                fullWidth
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2}}>
                <TextField
                label='Contraseña'
                type="password"
                placeholder="Ingresa tu contraseña"
                fullWidth 
                />
              </Grid>

              <Grid container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
              >
              <Grid item sx={{ mt: 2}}>
                <Button variant="contained" sx={buttonSesion}>
                  Iniciar sesión
                </Button>
              </Grid>
              <Grid item  sx={{ mt: 2}}>
                <Button variant="contained" sx={buttonRegister}>
                  Registrar
                </Button>
              </Grid>
              </Grid>
            </Grid>
          </form>

          </Grid>
      </Box>



  </Grid>
    
  )
}
