import Link from "next/link";
import { useEffect, useState } from "react";
import {
  InnerContainer,
  Countyries,
  Country,
  Flag,
  CountryName,
  Label,
  Container,
  Row,
  Value,
} from "./style";

const DetailCard = ({ country, getCountry }) => {
  const [borders, setBorders] = useState([]);

  const getBorders = async () => {
    const borders =
      country.borders &&
      (await Promise.all(country.borders.map((border) => getCountry(border))));

    setBorders(borders);
  };

  useEffect(() => {
    getBorders();
  }, [country]);
  return (
    <Container>
      <Row>
        <Label>Başkent</Label>
        <Value>{country.capital}</Value>
      </Row>

      <Row>
        <Label>Diller</Label>
        <Value>{country.languages?.map(({ name }) => name).join(", ")}</Value>
      </Row>

      <Row>
        <Label>Para Birimi</Label>
        <Value>{country.currencies?.map(({ name }) => name).join(", ")}</Value>
      </Row>

      <Row>
        <Label>Gini</Label>
        <Value>{country.gini || 0} %</Value>
      </Row>

      <InnerContainer>
        <Label>Komşu Ülkeler</Label>

        <Countyries>
          {borders?.map(({ flag, name, alpha3Code }) => (
            <Link href={`/country/${alpha3Code}`} key={name}>
              <Country>
                <Flag src={flag} alt={name}></Flag>
                <CountryName>{name}</CountryName>
              </Country>
            </Link>
          ))}
        </Countyries>
      </InnerContainer>
    </Container>
  );
};

export default DetailCard;
