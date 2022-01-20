import { useState } from "react";
import Header from "../Header";
import SearchBar from "../SearchBar";
import SearchResults from "../SearchResults"

function SearchEngine () {
  const [products, setProducts] = useState([]);

  return (
    <>
      <Header/>
      <SearchBar/>
      <SearchResults
        products={products}
      />
    </>
  )
}

export default SearchEngine;