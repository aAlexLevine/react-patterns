import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, method) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;
    axios[method](url)
      .then(({ data }) => setData(data))
      .catch((err) => setError(err));
  }, [url, method]);

  return data;
};

export default useFetch;

// TODO:
  //manage logic and state for status, loading, etc
    //avoid impossible state situations
  //tailor to different implementations
    //using dynamic queries
    //dynamic api's
  //abort fetch on unmount

  // implement refetch
  // passing a config object

  //optionally memoize/cache data retrieved
