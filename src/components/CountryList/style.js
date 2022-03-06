import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  padding: 20px;
`;

export const HeadingFlag = styled.div`
  flex: 1;
  margin-right: 16px;
  color: #b3c5cd;
  font-weight: 500;
`;

export const Heading = styled.div`
  flex: 4;
  color: #b3c5cd;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Countries = styled.div`
  display: flex;
  padding: 20px;
  text-align: center;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 16px;
  font-weight: 500;
  transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const Flag = styled.div`
  flex: 1;
  margin-right: 16px;
`;

export const Image = styled.img`
  border-radius: 2px;
  width: 100%;
`;

export const Value = styled.div`
  flex: 4;
`;
