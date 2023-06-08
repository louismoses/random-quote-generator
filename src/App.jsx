import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(() => setLoading(false));
  }, []);
  const newQuote = () => {
    setLoading(true);
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(() => setLoading(false));
  };
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold m-5">Random Quote Generator</h1>
        <div className="col-lg-6 mx-auto">
          <h3 className=" m-2">"{data.quote}"</h3>
          <h3 className=" m-4 text-success ">~{data.author}</h3>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              onClick={newQuote}
              type="button"
              className="btn btn-warning btn-lg px-4"
            >
              Get New Random Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
