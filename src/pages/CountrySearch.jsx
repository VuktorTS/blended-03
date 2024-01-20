import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useFetchByRegione } from 'hoocs';

export const CountrySearch = () => {
  const { countries, isLoading, error, onHandleSubmit } = useFetchByRegione();

  return (
    <Section>
      <Container>
        <SearchForm onHandleSubmit={onHandleSubmit} />
        {error && (
          <Heading textAlign="center">Something went wrong ...</Heading>
        )}

        {isLoading && <Loader />}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
