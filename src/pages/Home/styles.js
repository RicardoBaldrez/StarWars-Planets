import styled from "styled-components";

import bgPlanet from "./assets/image-left-find.svg";

export const WrapperFindPlanets = styled.div`
  display: flex;
  color: #fff;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const WrapperLeftImage = styled.div`
  background: url(${bgPlanet});
  background-position: center;
  background-repeat: no-repeat;
  width: 400px;
  height: 400px;
  @media (max-width: 1024px) {
    height: 188px;
    background-size: cover;
    border-radius: 10px 10px 0 0;
  }
  & img {
    position: relative;
    top: 220px;
    left: -130px;
    @media (max-width: 1024px) {
      top: 10px;
      left: 100px;
    }
  }
`;

export const SectionRightFindPlanets = styled.section`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0 10px 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  height: 400px;
  padding: 40px;
  @media (max-width: 1024px) {
    padding: 20px;
    height: 340px;
    padding: 60px;
    border-radius: 0 0 10px 10px;
  }
  & header {
    padding: 10px;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    & h2 {
      line-height: 25px;
    }
  }
  & form {
    display: flex;
    width: 100%;
    flex-direction: column;
    & input {
      text-align: center;
      margin: 12px 0 8px 0;
    }
    & button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      color: #fff;
      font-weight: bold;
      letter-spacing: 1px;
      background-color: rgba(222, 18, 18, 0.8);
      & span {
        margin-left: 10px;
      }
      &:hover {
        cursor: pointer;
        background-color: rgba(222, 18, 18, 1);
      }
    }
    & input,
    button {
      border: none;
      padding: 12px;
      border-radius: 5px;
    }
  }
`;

export const WrapperFilters = styled.div`
  margin-top: 10px;
  font-size: 14px;
  display: flex;
  & svg {
    margin-right: 5px;
  }
  & span {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
  }
`;

export const ErrorMessage = styled.p`
  color: rgba(222, 18, 18, 1);
  font-weight: bold;
  font-size: 12px;
  margin: 0 0 15px 0;
`;
