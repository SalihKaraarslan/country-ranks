import DetailCard from "../../components/DetailCard";
import FlagCard from "../../components/FlagCard";
import Layout from "../../components/Layout";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
`;

const ContainerLeft = styled.div`
  grid-column: 1 / span 4;
`;

const ContainerRight = styled.div`
  grid-column: 5 / span 8;
`;

const getCountry = async (id) => {
  const res = await fetch(`https://restcountries.com/v2/alpha/${id}`);

  const country = await res.json();

  return country;
};

const Country = ({ country }) => {
  return (
    <Layout title={country.name}>
      <Container>
        <ContainerLeft>
          <FlagCard country={country} />
        </ContainerLeft>
        <ContainerRight>
          <DetailCard country={country} getCountry={getCountry} />
        </ContainerRight>
      </Container>
    </Layout>
  );
};

export default Country;

export const getStaticPaths = async () => {
  const res = await fetch("https://restcountries.com/v2/all");
  const countries = await res.json();

  const paths = countries.map((country) => ({
    params: { id: country.alpha3Code },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const country = await getCountry(params.id);

  return {
    props: {
      country,
    },
  };
};
