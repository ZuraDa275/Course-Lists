import { useState, useEffect } from "react";

export const useFetch = (url, dataHandler) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        dataHandler(data);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
        setError("Something went wrong..");
      });
  }, [url]);

  return { loading, error };
};
