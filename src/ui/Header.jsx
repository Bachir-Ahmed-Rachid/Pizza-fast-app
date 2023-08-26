import { Link } from "react-router-dom";
import SearchBar from "../features/order/SearchBar";

export default function Header() {
  return (
    <div>
      <Link to="/">Recat Fast pizza app</Link>
      <SearchBar />
    </div>
  );
}
