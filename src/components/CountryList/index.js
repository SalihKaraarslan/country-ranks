import Link from "next/link";
import {
  Flag,
  Value,
  Header,
  HeadingFlag,
  Heading,
  Image,
  Countries,
} from "./style";

const CountryList = ({ countries }) => {
  return (
    <>
      <Header>
        <HeadingFlag>Bayrak</HeadingFlag>
        <Heading>İsim</Heading>
        <Heading>Nüfus</Heading>
        <Heading>Yüzölçümü(m²)</Heading>
        <Heading>Bölge</Heading>
      </Header>

      {countries.map((country) => (
        <Link href={`/country/${country.alpha3Code}`} key={country.name}>
          <Countries>
            <Flag>
              <Image src={country.flags.png} alt={country.name} />
            </Flag>

            <Value>{country.name}</Value>
            <Value>{country.population}</Value>
            <Value>{country.area || 0}</Value>
            <Value>{country.region} </Value>
          </Countries>
        </Link>
      ))}
    </>
  );
};

export default CountryList;
