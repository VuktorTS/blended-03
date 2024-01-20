import { Grid, GridItem } from 'components';
import { routes } from 'routes';
import { Link, useLocation } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  const location = useLocation();
  
  return (
    <Grid>
      {countries.map(({ country, id, flag }) => (
        <GridItem key={id}>
          <Link to={`${routes.COUNTRY}/${id}`} state = {{from:location}}><img src={flag} alt={country} /> </Link>
          
        </GridItem>
      ))}
    </Grid>
  );
};
