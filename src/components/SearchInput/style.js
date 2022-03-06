import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #eef3f6;
  border-radius: 8px;
  padding-left: 16px;
  color: #b3c5cd;
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  padding: 16px;
  width: 100%;
  height: 100%;
  outline: none;
  color: #b3c5cd;
  ::placeholder {
    color: #b3c5cd;
  }
`;
