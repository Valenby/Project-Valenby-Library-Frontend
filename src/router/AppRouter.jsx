import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoute } from "../auth/routes/AuthRoute"
import { LibraryRoute } from "../LibraryValenby/routes/LibraryRoute"
import { useAuthStore } from "../hooks";
import { useEffect } from "react";
// import { LoginPage } from "../auth/pages"


export const AppRouter = () => {

  //const authStatus = 'no-authenticated'; //checking, no-authenticated, authenticated

  const {status, checkAuthToken} = useAuthStore();

  useEffect(() => {
    checkAuthToken()
  }, [])
  

  if ( status === 'checking'){
    return (
      <h3>Cargando...</h3>
    )
  }

   return (
    <Routes>
        { ( status === 'not-authenticated')
            ? (
              <>
              <Route path="/auth/*" element={<AuthRoute/>} />
              <Route path="/*" element={<Navigate  to="/auth/login"/>} />
              </>
              )
            : (
              <>
            <Route path="/" element={<LibraryRoute/>} />
            <Route path="/*" element={<Navigate  to="/"/>} />

              </>
              )
        }

    </Routes>
  )
}
