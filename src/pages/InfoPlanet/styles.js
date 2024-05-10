import styled from "styled-components";

export const WrapperChosenPlanet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & a {
    margin-top: 50px;
    color: #fff;
    text-decoration: none;
    & span {
      margin-left: 10px;
    }
  }
  @media (max-width: 1024px) {
    margin: 0 30px;
    min-width: 350px;
  }
`;

export const ArticleChosenPlanet = styled.article`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  max-width: 650px;
  border-radius: 10px;
  font-size: 14px;
  background-color: rgba(255, 255, 255, 1);
  & header {
    display: flex;
    align-items: center;
    margin-right: 20px;
    & img {
      width: 75px;
    }
    & h2 {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      & input {
        border: none;
        width: 130px;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
        &:focus {
          outline: 0;
        }
      }
    }
  }
`;

export const SectionInfosPlanet = styled.section`
  margin-bottom: 20px;
  max-width: 350px;
  @media (max-width: 1024px) {
    margin-top: 20px;
  }
  & ul {
    & li {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      & span {
        font-weight: bold;
        margin: 0 5px 0 15px;
      }
    }
  }
`;

export const SectionsOfArticleChosenPlanet = styled.section`
  padding: 15px;
  border-radius: 10px;
  font-size: 14px;
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  background-color: rgba(241, 241, 241, 1);
  & header {
    flex-basis: 100%;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(144, 144, 144, 1);
    & svg {
      margin: 10px;
    }
    & h3 {
      font-weight: bold;
    }
  }
  & p {
  }
`;

export const Loading = styled.img`
  width: 150px;
  height: 150px;
`;
