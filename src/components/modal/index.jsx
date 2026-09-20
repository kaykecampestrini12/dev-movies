import { useEffect, useState } from "react";

import { IoClose } from "react-icons/io5";
import { getMovieVideo, getSerieVideo } from "../../services/getData";
import { Container, BackGround } from "./styles";

function Modal({ id, type, setShowModal }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovieData() {

      const video = type === "tv" ? await getSerieVideo(id) : await getMovieVideo(id)
      setMovie(video)
    }

    getMovieData()
  }, []);

  return (
    <BackGround onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <button onClick={() => setShowModal(false)}>
            <IoClose />
          </button>
          <iframe
            src={`https://www.youtube.com/embed/${movie[0].key}`}
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Container>
      )}
    </BackGround>
  );
}

export default Modal;
