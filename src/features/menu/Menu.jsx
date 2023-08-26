import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  return (
    <ul>
      {menu.map((e) => (
        <MenuItem pizza={e} key={e.id} />
      ))}
    </ul>
  );
}

export default Menu;
