import React, { useState } from "react";

function AddVotingResults() {
  const [zipcode, setZipcode] = useState("");
  const [count, setCount] = useState("");

  // method to send submission to DB
  async function submitVotes() {
    await fetch("/api/zipcode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ zipcode, count }),
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      // .then((data) => data)
      .catch(console.error);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // call api to post
        submitVotes();
        // clear inputs
        setZipcode("");
        setCount("");
      }}
    >
      <label htmlFor="zipcode">
        <p>Zipcode: </p>
        <input value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
      </label>
      <label htmlFor="count">
        <p>Count: </p>
        <input value={count} onChange={(e) => setCount(e.target.value)} />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default AddVotingResults;
