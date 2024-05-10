import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import InfoPlanet from "./pages/InfoPlanet";
import NotFound from "./pages/NotFound";

export default function ConfigRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/infoPlanet/:infoPlanetSearch" element={<InfoPlanet />} />
        <Route path="/notFound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
