import { Section, Container, CountryInfo, Loader, Heading, GoBackBtn } from 'components';
import { useFetchCountry } from 'hoocs';
import { useLocation } from 'react-router-dom';
import { routes } from 'routes';

export const Country = () => {
  const { country, isLoading, error } = useFetchCountry();
  const location = useLocation();
  // const goBack = useRef(location?.state?.from ?? '/');
  const goBack = location?.state?.from ?? routes.HOME;
  return (
    <Section>
      <Container>
      <GoBackBtn path= {goBack}>Go Back</GoBackBtn>
      {error && (
          <Heading textAlign="center">Something went wrong ...</Heading>
        )}

        {isLoading && <Loader />}
        {country && <CountryInfo country={country}/>}
      </Container>
    </Section>
  );

};
