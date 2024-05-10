import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as ArrowDown } from "./assets/image-arrow-down.svg";
import { ReactComponent as Filters } from "./assets/image-filter.svg";
import glass from "./assets/image-glass.svg";
import spaceCraft from "./assets/image-nave.svg";
import {
  WrapperFindPlanets,
  WrapperLeftImage,
  SectionRightFindPlanets,
  WrapperFilters,
  ErrorMessage,
} from "./styles";

export default function Home() {
  const [namePlanet, setNamePlanet] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (!namePlanet) {
      setError("Enter the name or population of a planet");
      return;
    }

    navigate(`/infoPlanet/${namePlanet}`);
  };

  return (
    <WrapperFindPlanets>
      <WrapperLeftImage>
        <img src={spaceCraft} alt="spacecreft" />
      </WrapperLeftImage>
      <SectionRightFindPlanets>
        <header>
          <h2>
            Discover all the information about Planets of the Star Wars Saga
          </h2>
        </header>
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            placeholder="Enter the name or population in the planet"
            onChange={(e) => setNamePlanet(e.target.value)}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <button type="submit">
            <img src={glass} alt="magnifying glass" />
            <span>Search</span>
          </button>
        </form>
        <WrapperFilters>
          <Filters />
          Filter:
          <span>
            <ArrowDown />
            Name
          </span>
          <span>
            <ArrowDown />
            Population
          </span>
        </WrapperFilters>
      </SectionRightFindPlanets>
    </WrapperFindPlanets>
  );
}
