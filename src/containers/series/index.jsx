

import api from "../../services/api";
import {
  getTopSerie,
  getPopularSerie,
  getSerieDay
} from "../../services/getData";

import { BackGround, Info, Poster, Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { getImages } from "../../util/get_Images";
import Slider from "../../components/slider";
import Button from "../../components/button";
import { useState, useEffect } from "react";
import Modal from "../../components/modal";


function Series() {
  const [showModal, setShowModal] = useState(false);
  const [serieDay, setSerieDay] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const navigate = useNavigate();


  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getSerieDay(),
        getTopSerie(),
        getPopularSerie(),
      ])
        .then(([serieDay, topSeries, popularSeries]) => {
          setSerieDay(serieDay)
          setTopSeries(topSeries);
          setPopularSeries(popularSeries);
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
      {serieDay && (
          


        <BackGround $image={getImages(serieDay[0].backdrop_path)}>
          {showModal && (
            <Modal id={serieDay[0].id} type={`tv`} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{serieDay[0].name || serieDay[0].title}</h1>
              <p>{serieDay[0].overview}</p>
              <div>
                <Button red onClick={() => navigate(`/details/tv/${serieDay[0].id}`)}>
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o trailer
                </Button>
              </div>
            </Info>
            <Poster>
              <img src={getImages(serieDay[0].poster_path)} alt="capa-da-série" />
            </Poster>
          </Container>
        </BackGround>
      )}
      {serieDay && <Slider info={serieDay} title="Séries do Dia" />}
      {topSeries && <Slider info={topSeries} title="Top Séries" />}
      {popularSeries && (
        <Slider info={popularSeries} title="Séries Populares" />
      )}
    </>
  );
}

export default Series
