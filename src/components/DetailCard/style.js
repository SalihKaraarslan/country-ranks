import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
`;

export const Label = styled.div`
  color: #b3c5cd;
`;

export const Value = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const InnerContainer = styled.div`
  padding: 20px;
`;

export const DetailBorderLabel = styled.div`
  color: #b3c5cd;
`;

export const Countyries = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 24px;
`;

export const CountryName = styled.div`
  font-weight: 500;
`;

export const Country = styled.div`
  cursor: pointer;
  text-align: center;
`;

export const Flag = styled.img`
  width: 100%;
  border-radius: 4px;
`;
