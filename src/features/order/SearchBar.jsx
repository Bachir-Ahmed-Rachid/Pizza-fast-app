import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handelSubmit(e) {
    e.preventDefault();
    if (query === "") return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  function handelChange(e) {
    setQuery(e.target.value);
  }
  return (
    <form onSubmit={handelSubmit}>
      <input
        onChange={handelChange}
        value={query}
        placeholder="search by order id"
      ></input>
    </form>
  );
}

export default SearchBar;
