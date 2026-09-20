

import api from "../../services/api";
import {
  getDataMovie,
  getTopMovie,
  getTopSerie,
  getPopularSerie,
  getDataTopPeaples,
} from "../../services/getData";

import { BackGround, Info, Poster, Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { getImages } from "../../util/get_Images";
import Slider from "../../components/slider";
import Button from "../../components/button";
import { useState, useEffect } from "react";
import Modal from "../../components/modal";


function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topPeoples, setTopPeoples] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getDataMovie(),
        getTopMovie(),
        getTopSerie(),
        getPopularSerie(),
        getDataTopPeaples(),
      ])
        .then(([movie, topMovies, topSeries, popularSeries, topPeoples]) => {
          setMovie(movie);
          setTopMovies(topMovies);
          setTopSeries(topSeries);
          setPopularSeries(popularSeries);
          setTopPeoples(topPeoples);
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
        <BackGround $image={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal id={movie.id} type={`movie`} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <div>
                <Button red onClick={() => navigate(`/details/movie/${movie.id}`)}>
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o trailer
                </Button>
              </div>
            </Info>
            <Poster>
              <img src={getImages(movie.poster_path)} alt="capa-do-filme" />
            </Poster>
          </Container>
        </BackGround>
      )}
      {topMovies && <Slider info={topMovies} title="Top Filmes" />}
      {topSeries && <Slider info={topSeries} title="Top Séries" />}
      {popularSeries && (
        <Slider info={popularSeries} title="Séries Populares" />
      )}
      {topPeoples && <Slider info={topPeoples} title="Pessoas Populares" />}
    </>
  );
}

export default Home;
