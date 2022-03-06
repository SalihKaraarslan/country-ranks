import { Name, Flag, Info, Container, Label, Region, Value } from "./style";

const FlagCard = ({ country }) => {
  return (
    <Container>
      <Flag src={country.flag} alt={country.name} />
      <Name>{country.name}</Name>
      <Region>{country.region}</Region>

      <Info>
        <Label>Yüzölçümü(m²)</Label>
        <Label>Nüfus</Label>
        <Value>{country.area} </Value>
        <Value>{country.population}</Value>
      </Info>
    </Container>
  );
};

export default FlagCard;
