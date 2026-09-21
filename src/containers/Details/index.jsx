import {
  //movie
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideo,

  //serie

  getSerieById,
  getSerieCredits,
  getSerieSimilar,
  getSerieVideo
} from "../../services/getData";

import { getImages } from "../../util/get_Images";
import { Background, Container, Cover, Info, ContainerMovie } from "./styles";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "../../components/slider";

function Details() {

  const { id, type } = useParams()
  const isSerie = type === "tv"

  // movie
  const [movie, setMovie] = useState();
  const [movieVideo, setMovieVideo] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [movieSimilar, setMovieSimilar] = useState();

  //serie

  const [serie, setSerie] = useState();
  const [serieVideo, setSerieVideo] = useState();
  const [SerieCredits, setSerieCredits] = useState();
  const [SerieSimilar, setSerieSimilar] = useState();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        isSerie ? getSerieById(id) : getMovieById(id),
        isSerie ? getSerieVideo(id) : getMovieVideo(id),
        isSerie ? getSerieCredits(id) : getMovieCredits(id),
        isSerie ? getSerieSimilar(id) : getMovieSimilar(id),
      ])
        .then(([movie, video, credits, similar]) => {
          setMovie(movie)
          setMovieVideo(video)
          setMovieCredits(credits)
          setMovieSimilar(similar)
        })
        .catch((error) => {
          console.error("Erro ao buscar dados:", error);
        });
    }

    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <>
          <Background $image={getImages(movie.backdrop_path)} />

          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} alt={movie.title} />
            </Cover>

            <Info>
              <h2>{movie.title || movie.name}</h2>
              <SpanGenres genres={movie.genres} />
              <p>{movie.overview}</p>
              
                <Credits info={movieCredits} />
              
            </Info>
          </Container>
          <ContainerMovie>
            <>
            {movieVideo && movieVideo.map(video => (
              <div key={video.id}>
                <h3>{video.name}</h3>
                <iframe
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title="Trailer"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
            </>      
          </ContainerMovie>

          {movieSimilar && <Slider info={movieSimilar} 
          title={isSerie ? "Séries Similares" : "Filmes Similares"}/>}         
        </>
      )}
    </>
  )
}

export default Details;
