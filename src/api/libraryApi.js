import axios from "axios";

const libraryApi = axios.create({
    baseURL: 'https://valenbylibrary.onrender.com/api'
})

// todo: configurar intersectores
libraryApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
    }

    return config;
})

export default libraryApi;