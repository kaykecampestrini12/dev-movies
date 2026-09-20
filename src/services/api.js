
import Axios from "axios"

const api = Axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key:    import.meta.env.VITE_TMDB_API_KEY,
        language: "pt-BR", 
        page: 1
    }
})

export default api