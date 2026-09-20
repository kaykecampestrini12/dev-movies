import api from "./api";

export async function getDataMovie() {
      const {
        data: { results },
      } = await api.get("movie/popular");

    return results[0]
}

export async function getTopMovie() {
      const {
        data: { results },
      } = await api.get("movie/top_rated");

    return results
}

export async function getTopSerie() {
      const {
        data: { results },
      } = await api.get("tv/top_rated");

    return results
}

export async function getPopularSerie() {
      const {
        data: { results },
      } = await api.get("tv/popular");

    return results
}

export async function getDataTopPeaples() {
      const {
        data: { results },
      } = await api.get("person/popular");

    return results
}

export async function getMovieVideo($movieid) {
      const {
        data: { results },
      } = await api.get(`/movie/${$movieid}/videos`)

    return results
}

// Creditos
export async function getMovieCredits($movieid) {
      const { data: { cast } } = await api.get(`/movie/${$movieid}/credits`)

    return cast
}

// Similares
export async function getMovieSimilar($movieid) {
      const {
        data: { results },
      } = await api.get(`/movie/${$movieid}/similar`)

    return results
}

export async function getMovieById($movieid) {
      const { data } = await api.get(`/movie/${$movieid}`)

    return data
}

export async function getSerieDay() {
      const {
        data: { results },
      } = await api.get("trending/tv/day");

    return results
}

// tela details/serie
export async function getSerieById(serieId) {
  const { data } = await api.get(`/tv/${serieId}`);
  return data;
}

export async function getSerieVideo(serieId) {
  const {
    data: { results },
  } = await api.get(`/tv/${serieId}/videos`);

  return results;
}

export async function getSerieCredits(serieId) {
  const {
    data: { cast },
  } = await api.get(`/tv/${serieId}/credits`);

  return cast;
}

export async function getSerieSimilar(serieId) {
  const {
    data: { results },
  } = await api.get(`/tv/${serieId}/similar`);

  return results;
}

// Movies
export async function getMovieDay() {
      const {
        data: { results },
      } = await api.get("trending/movie/day");

    return results
}

export async function getMovieAction() {
      const {
        data: { results },
      } = await api.get("discover/movie?with_genres=28&sort_by=popularity.desc");

    return results
}

export async function getMovieTerror() {
      const {
        data: { results },
      } = await api.get("discover/movie?with_genres=27&sort_by=popularity.desc");

    return results
}