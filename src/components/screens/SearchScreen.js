import React, { useState } from "react";
import SearchBar from "../SearchBar";
import { View, Text, ScrollView } from "react-native";
import useResults from "../../hooks/UseResults";
import ResultsList from "../ResultsList";

const SearchScreen = () => {
  const [searchApi, results, errorMessage] = useResults();
  const [term, setTerm] = useState("");

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        Bar
        onSubmitTerm={() => searchApi(term)}
        term={term}
        onSearchTerm={newTerm => setTerm(newTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text> We have found {results.length}</Text>
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricer" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Bit Spencer"
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
