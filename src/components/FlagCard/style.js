import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  background-color: white;
`;
export const Flag = styled.img`
  width: 100%;
  border-radius: 6px;
`;
export const Name = styled.h1`
  font-style: italic;
`;
export const Region = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 4px;
  margin-bottom: 24px;
`;
export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
`;
export const Value = styled.div`
  margin-top: 4px;
  font-size: 16px;
  font-weight: 500;
`;
export const Label = styled.div`
  color: #b3c5cd;
`;
