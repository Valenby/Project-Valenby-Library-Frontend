import { Grid } from "@mui/material"

export const AuthLayout = ({children}) => {
  return (
    <Grid
    container 
    spacing={0} 
    justifyContent="center" 
    alignItems="center" 
    style={{ minHeight: '100vh' }}
    >
        {children}
    </Grid>
  )
}
