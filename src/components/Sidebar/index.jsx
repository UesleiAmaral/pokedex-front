import { scaleDown as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

import { styles } from "./style";

export const Sidebar = () => {
  return (
    <Menu styles={styles}>
      <img className="imgLogo"
        src="https://cdn.icon-icons.com/icons2/851/PNG/512/Pokeball_icon-icons.com_67533.png"
        alt=""
      />
      <Link to="/" className="container-item">
        Home
      </Link>
      <Link to="/all-pokemons" className="container-item">
        All Pokemons
      </Link>
      <Link to="/create-card" className="container-item">
        Create You Card
      </Link>
      <Link to="/update-card" className="container-item">
        Update and Delete
      </Link>
    </Menu>
  );
};
