import React, { useState } from "react";
import SearchBar from "../SearchBar";
import { Text, ScrollView } from "react-native";
import useResults from "../../hooks/UseResults";
import ResultsList from "../ResultsList";

const SearchScreen = ({ navigation }) => {
  const [searchApi, results, errorMessage] = useResults();
  const [term, setTerm] = useState("");

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        onSubmitTerm={() => searchApi(term)}
        term={term}
        onSearchTerm={newTerm => setTerm(newTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Bit Pricer"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Bit Spencer"
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
