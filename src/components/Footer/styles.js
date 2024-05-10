import styled, { css } from "styled-components";

export const mobile = css`
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const WrapperFooter = styled.footer`
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: center;
  padding: 20px 0;
`;

export const InfoCompany = styled.span`
  font-size: 14px;
  color: #343434;
  ${mobile}
`;

export const WrapperSeparator = styled.div`
  padding: 0 40px;
  ${mobile}
`;
