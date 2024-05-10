import styled from "styled-components";

export const WrapperHeader = styled.header`
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  padding: 40px 0;
  & svg {
    @media (max-width: 1024px) {
      height: 120px;
    }
  }
`;
