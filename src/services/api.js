
import Axios from "axios"

const api = Axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "9981bde100d83414ce44dc049ab9fe4a",
        language: "pt-BR", 
        page: 1
    }
})

export default api