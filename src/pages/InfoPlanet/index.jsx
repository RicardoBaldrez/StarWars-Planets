import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { planets } from "../../utils/planets";
import { ReactComponent as ArrowDownIcon } from "./assets/arrow-down-icon.svg";
import { ReactComponent as ClimateIcon } from "./assets/climate-icon.svg";
import { ReactComponent as FilmsIcon } from "./assets/films-icon.svg";
import loadingPlanet from "./assets/loading.gif";
import { ReactComponent as PopulationIcon } from "./assets/population-icon.svg";
import { ReactComponent as ResidentsIcon } from "./assets/residents-icon.svg";
import { ReactComponent as TerrainIcon } from "./assets/terrain-icon.svg";
import {
  WrapperChosenPlanet,
  SectionsOfArticleChosenPlanet,
  ArticleChosenPlanet,
  SectionInfosPlanet,
  Loading,
} from "./styles";

export default function InfoPlanet() {
  const [planet, setPlanet] = useState({});
  const [residents, setResidents] = useState([]);
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  const { infoPlanetSearch } = useParams();
  const navigate = useNavigate();

  const gettingIdPlanetFromName = () => {
    const replace = Number(infoPlanetSearch);

    if (isNaN(replace)) {
      return planets.filter(
        (planet) =>
          infoPlanetSearch.toLowerCase() === planet.name.toLowerCase(),
      );
    } else {
      return planets.filter((planet) => replace === planet.population);
    }
  };

  const validAndListProps = (data) => {
    return data.length === 0 ? "No data" : data.map((info) => info).join(", ");
  };

  const setPertinentInformation = (properties, setState, info) => {
    properties?.map((endpoint) => {
      fetch(endpoint)
        .then((response) => response.json())
        .then((data) =>
          setState((oldValues) => [
            ...oldValues,
            info === "resident" ? data.name : data.title,
          ]),
        )
        .catch((error) => console.error(error));
    });
  };

  useEffect(() => {
    setLoading(true);

    try {
      fetch(
        `https://swapi.py4e.com/api/planets/${gettingIdPlanetFromName()[0]?.id}`,
      )
        .then((response) => {
          if (response.status === 404) {
            navigate("/notFound");
            return;
          }
          return response.json();
        })
        .then((data) => setPlanet(data))
        .catch((error) => console.error(error))
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    setPertinentInformation(planet.residents, setResidents, "resident");
    setPertinentInformation(planet.films, setFilms, "films");
  }, [planet]);

  return (
    <>
      {loading ? (
        <Loading src={loadingPlanet} alt="loading planet" />
      ) : (
        <WrapperChosenPlanet>
          <ArticleChosenPlanet>
            <header>
              <img
                src={gettingIdPlanetFromName()[0]?.linkImage}
                alt="Image of the chosen planet"
              />
              <h2>
                Planet: <input type="text" defaultValue={planet.name} />
              </h2>
            </header>
            <SectionInfosPlanet>
              <ul>
                <li>
                  <ClimateIcon />
                  <span>Climate:</span> {planet.climate}
                </li>
                <li>
                  <TerrainIcon />
                  <span>Terrain:</span> {planet.terrain}
                </li>
                <li>
                  <PopulationIcon />
                  <span>Population:</span>{" "}
                  {planet.population !== "unknown" ? planet.population : 0}
                </li>
              </ul>
            </SectionInfosPlanet>
            <SectionsOfArticleChosenPlanet>
              <header>
                <ResidentsIcon />
                <h3>Residents ({residents.length}):</h3>
              </header>
              <p>{validAndListProps(residents)}</p>
            </SectionsOfArticleChosenPlanet>
            <SectionsOfArticleChosenPlanet>
              <header>
                <FilmsIcon />
                <h3>Films ({films.length}):</h3>
              </header>
              <p>{validAndListProps(films)}</p>
            </SectionsOfArticleChosenPlanet>
          </ArticleChosenPlanet>
          <Link to="/">
            <ArrowDownIcon />
            <span>voltar</span>
          </Link>
        </WrapperChosenPlanet>
      )}
    </>
  );
}
