import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
const App = () => {
  const [quote, setQuote] = useState({});
  const [quotes, setQuotes] = useState([]);
  const baseUrl = "https://type.fit/api/quotes";

  function getrandomquote(quotes) {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
  }
  const getQuote = async () => {
    try {
      const response = await axios.get(baseUrl);
      const quotesArray = response.data;
      setQuotes(quotesArray);
      setQuote(quotesArray[0]);
    } catch (err) {
      console.log(err);
    }
  };

  function getNewQuote() {
    setQuote(getrandomquote(quotes));
  }

  useEffect(() => {
    getQuote();
  }, []);
  return (
    <div className="quotes">
      <button onClick={getNewQuote}>New Quote</button>
      <h3 className="h3">
        <span>“</span>
        {quote?.text}
      </h3>
      <i>- {quote?.author}</i>
    </div>
  );
};

export default App;
