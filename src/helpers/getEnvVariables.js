//import.meta para usar variables de entorno y para testear
export const getEnvVariables = () => {
  
    import.meta.env;

    return {
        ...import.meta.env
    }
}

