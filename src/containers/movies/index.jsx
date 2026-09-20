

import api from "../../services/api";
import {
  getMovieDay,
  getTopMovie,
  getMovieAction,
  getMovieTerror,
} from "../../services/getData";

import { BackGround, Info, Poster, Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { getImages } from "../../util/get_Images";
import Slider from "../../components/slider";
import Button from "../../components/button";
import { useState, useEffect } from "react";
import Modal from "../../components/modal";


function Movies() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [actionMovies, setActionMovies] = useState()
  const [terrorMovies, setTerrorMovies] = useState()  
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieDay(),
        getTopMovie(),
        getMovieAction(),
        getMovieTerror(),
      ])
        .then(([movie, topMovies, actionMovies, terrorMovies]) => {
          setMovie(movie)
          setTopMovies(topMovies)
          setActionMovies(actionMovies)
          setTerrorMovies(terrorMovies)
        })
        .catch((error) => {
          console.error("Erro ao buscar dados:", error);
        });
    }

    getAllData();
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <>
      {movie && (
        <BackGround $image={getImages(movie[0].backdrop_path)}>
          {showModal && (
            <Modal id={movie[0].id} type={`movie`} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie[0].title}</h1>
              <p>{movie[0].overview}</p>
              <div>
                <Button red onClick={() => navigate(`/details/movie/${movie[0].id}`)}>
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o trailer
                </Button>
              </div>
            </Info>
            <Poster>
              <img src={getImages(movie[0].poster_path)} alt="capa-do-filme" />
            </Poster>
          </Container>
        </BackGround>
      )}
      {topMovies && <Slider info={topMovies} title="Top Filmes" />}
      {movie && <Slider info={movie} title="Filmes do Dia" />}
      {actionMovies && <Slider info={actionMovies} title="Filmes de Ação" />}
      {terrorMovies && <Slider info={terrorMovies} title="Filmes de Terror" />}
    </>
  );
}

export default Movies;
