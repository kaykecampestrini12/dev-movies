import { Route, Routes } from "react-router-dom";

import Home from "../containers/Home";
import Movies from "../containers/movies";
import Series from "../containers/series"
import Details from "../containers/Details"
import DefaultLayout from "../layout/DefaultLayout";

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Filmes" element={<Movies />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/Details/:type/:id" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default Router;
