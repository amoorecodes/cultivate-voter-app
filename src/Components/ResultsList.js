import React from "react";
import stateNames from "../data/stateNames";
import zipcodes from "zipcodes";

function ResultsList({ results, top5 }) {
  function filterResults(input) {
    const results = {};

    for (let zipcode in input) {
      console.log("before lookup");
      const { city, state } = zipcodes.lookup(zipcode);
      console.log("after lookup");
      // console.log("acc", accumulator, city, count);
      if (city in results) {
        results[city].count += input[zipcode];
      } else {
        results[city] = {
          count: input[zipcode],
          state: stateNames[state],
        };
      }
    }

    return results;

    // return Object.entries(input).reduce((accumulator, [zipcode, count]) => {
    //   const { city, state } = lookup(zipcode);
    //   console.log("acc", accumulator, city, count);
    //   if (city in accumulator) {
    //     accumulator[city].count += count;
    //   } else {
    //     accumulator[city] = {
    //       count,
    //       state: stateNames[state],
    //     };
    //   }
    //   return accumulator;
    // }, {});
  }

  let filtered = Object.entries(filterResults(results)).sort((a, b) => {
    console.log(a, "b", b);
  });

  if (top5) {
    filtered = filtered.slice(0, 5);
  }

  return (
    <table>
      <tr>
        <th>City</th>
        <th>State</th>
        <th>Count</th>
      </tr>
      <tbody>
        {filtered.map(({ city, state, count }) => (
          <tr>
            <td>{city}</td>
            <td>{stateNames[state]}</td>
            <td>{count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultsList;
