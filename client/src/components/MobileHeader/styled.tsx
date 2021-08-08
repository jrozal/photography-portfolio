import styled from "styled-components";

export const HeaderMobileContainer = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;