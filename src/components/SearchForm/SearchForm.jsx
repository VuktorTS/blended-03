import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({ onHandleSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = e => setQuery(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    onHandleSubmit(query);
    setQuery('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        aria-label="select"
        value={query}
        name="region"
        required
        onChange={onChange}
      >
        <option disabled value="">
          Select a region and press enter
        </option>
        {regions &&
          regions.map(({ id, name, value }) => (
            <option key={id} value={value} style={{ color: 'red' }}>
              {name}
            </option>
          ))}
      </Select>
    </SearchFormStyled>
  );
};
