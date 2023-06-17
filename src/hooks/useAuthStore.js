import { useDispatch, useSelector } from "react-redux"
import { libraryApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth";


export const useAuthStore = () => {

    const {status, user, errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch();


    const startLogin = async (email, password) => {
      dispatch( onChecking() );
        //llegamos al back
        try {
            const {data} = await libraryApi.post('/login',{ email, password});
            // console.log(data)
            localStorage.setItem('token', data.token);
            dispatch( onLogin({email: data.email, uid: data.uid, name: data.name }))
            
        } catch (error) {
            dispatch( onLogout('Credenciales no existentes') )
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            },10);
        }
    };

    const startRegister = async ( email, password, name) => {
        // dispatch( onChecking() );
        //llegamos al back
        try {
            const {data} = await libraryApi.post('/users',{ email, password, name});
            // dispatch( onLogin({email: data.email, uid: data.uid, name: data.name }))
            return data
        } catch (error) {
            console.log(error)
            dispatch( onLogout( error.response.data.message || '' ) );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            },10);
        }
    };

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if ( !token ) return dispatch( onLogout() );
        dispatch(onLogin({token}))
    }


    return{
        //* propiedades
        errorMessage,
        status,
        user,
        
        //* métodos
        startLogin,
        startRegister,
        checkAuthToken,
    }
}
