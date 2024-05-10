import styled from "styled-components";

import bgPlanets from "./assets/image-bg-planets.svg";

export const WrapperApp = styled.div`
  height: 100vh;
  background: url(${bgPlanets});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

export const WrapperContent = styled.div`
  height: 100%;
  display: flex;
  margin-top: 30px;
  justify-content: center;
`;
