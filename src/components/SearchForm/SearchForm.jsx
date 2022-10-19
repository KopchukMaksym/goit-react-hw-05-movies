import { useState } from 'react';

import PropTypes from 'prop-types';

export const Form = ({ handleSubmit }) => {
  const [search, setSearch] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    setSearch('');
    handleSubmit(search);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={e => setSearch(e.target.value)}
        type="text"
        value={search}
      />
      <button type="submit">Search</button>
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func,
};
