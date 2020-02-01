import { useEffect, useState } from "react";
import yelp from "../api/yelp";

const [results, setResults] = useState([]);
const [errorMessage, setErrorMessage] = useState("");

export default () => {
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

  return [searchAPI, results, errorMessage];
};
