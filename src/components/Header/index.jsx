import {styles} from "../Sidebar/style"
import { ContainerNavbar } from "./style";
import { Sidebar } from "../Sidebar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <ContainerNavbar>
      <Sidebar
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        styles={styles}
      />

      <Link to="/">
        <img
          className="imgLogo"
          src="https://cdn.icon-icons.com/icons2/851/PNG/512/Pokeball_icon-icons.com_67533.png"
          alt=""
        />
        <h1>POKÉDEX</h1>
      </Link>

      
    </ContainerNavbar>
  );
};
