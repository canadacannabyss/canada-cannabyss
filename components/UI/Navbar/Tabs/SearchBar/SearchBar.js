import React from 'react';
import Router from 'next/router';
import { FaSearch } from 'react-icons/fa';
import {
  SearchBarForm,
  SearchBarFlex,
} from '../../../../../styles/Components/UI/Navbar/Tabs/SearchBar/SearchBar';

const SearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = document.querySelector('#search');
    const type = document.querySelector('#type');
    Router.push({
      pathname: '/search',
      query: {
        query: query.value,
        type: type.value,
      },
    });
  };

  return (
    <SearchBarFlex>
      <SearchBarForm
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          autoComplete='new-password'
          type='text'
          placeholder='Looking for something?'
          id='search'
          name='query'
        />
        <select id='type'>
          <option value='all'>All</option>
          <option value='products'>Products</option>
          <option value='bundles'>Bundles</option>
          {/* <option value='promotions'>Promotions</option>
          <option value='categories'>Categories</option>
          <option value='tags'>Tags</option> */}
        </select>
        <button
          type='submit'
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <FaSearch />
        </button>
      </SearchBarForm>
    </SearchBarFlex>
  );
};

export default SearchBar;
