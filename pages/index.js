import React, { useState, useEffect } from "react";
import ResultsList from "../src/Components/ResultsList";
import AddVotingResults from "../src/Components/AddVotingResults";

const index = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("/api/zipcode")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => (console.log("data:\n", data), setResults(data)))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h3>index page</h3>
      <AddVotingResults />
      <ResultsList results={results} top5={true} />
    </div>
  );
};

export default index;
