import { useCallback, useEffect, useState } from "react";
import React from "react";

export default function SearchResults() {
  const [query, setQuery] = useState(0);
  const getFetchUrl = useCallback(
    (type) =>
      `https://hn.algolia.com/api/v1/search?type=${type}&qurey=${query}`,
    [query]
  );

  useEffect(() => {
    console.log(getFetchUrl("react"));
  }, [getFetchUrl]);

  useEffect(() => {
    console.log(getFetchUrl("redux"));
  }, [getFetchUrl]);

  return <button onClick={() => setQuery(Math.random)}> changeQuery</button>;
}
