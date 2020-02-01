import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import { View, Text } from "react-native";
import yelp from "../../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose"
        }
      });
      setResults(response.data.businesses);
    } catch (error) {
      console.log(error);
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return (
    <View>
      <SearchBar
        onSubmitTerm={() => searchApi(term)}
        term={term}
        onSearchTerm={newTerm => setTerm(newTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text> We have found {results.length}</Text>
    </View>
  );
};

export default SearchScreen;
