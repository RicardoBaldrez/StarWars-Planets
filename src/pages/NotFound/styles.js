import styled from "styled-components";

export const WrapperNotFound = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-basis: 50%;
  text-shadow: 3px 3px 3px #000;
  color: #fff;
  & p:nth-child(2) {
    font-size: 25px;
    font-weight: bold;
    text-align: center;
  }
  & p:nth-child(3) {
    margin-top: -40px;
    font-size: 18px;
    & a {
      color: rgba(222, 18, 18, 0.8);
      font-weight: bold;
      text-decoration: none;
    }
  }
`;
