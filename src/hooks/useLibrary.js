import { useDispatch, useSelector } from "react-redux"
import { libraryApi } from "../api";
import { getBooks } from "../store";


export const useLibrary = () => {

    const {books} = useSelector(state => state.library);
    const dispatch = useDispatch();


    const viewBooks = async () => {

        try {
            const {data} =  await libraryApi.get('/books');
            dispatch(getBooks(data));
            return data
        } catch (error) {
            console.log(error)
        }
    }

    return{
        //* propiedades
        books,
        
        //* métodos
        viewBooks
    }
}
