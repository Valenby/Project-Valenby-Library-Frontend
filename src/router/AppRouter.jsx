import { Route, Routes } from "react-router-dom"
import { AuthRoute } from "../auth/routes/AuthRoute"
import { LibraryRoute } from "../LibraryValenby/routes/LibraryRoute"


export const AppRouter = () => {
  return (
    <Routes>
        {/* login-registro */}
        <Route path="/auth/*" element={<AuthRoute/>} />

        {/* cualquier ruta x = en este caso la librarybooks */}
        <Route path="/*" element={<LibraryRoute/>} />

    </Routes>
  )
}
