import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Header = styled.header`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;
