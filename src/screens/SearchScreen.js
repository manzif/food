import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {

  const [term, setTerm] = useState('');
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log('term')}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
