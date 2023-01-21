import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  h1 {
    font-family: ${({ theme }) => theme.font.family.Ubuntu};
  }
`;
