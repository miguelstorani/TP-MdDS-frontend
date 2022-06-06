import React from "react";
import { useHistory } from "react-router-dom";
import { Dropdown, Menu, Image } from "semantic-ui-react";
import userStore from "../../stores/user.store";

import logo from "./../../assets/logo.png";

const Header = (props: any) => {
  const history = useHistory();

  const handleItemClick = (e: React.MouseEvent, { url }: any) => {
    history.push(`/dashboard/${url}`);
  };

  return (
    <Menu pointing style={{ color: "" }}>
      <Image
        src={logo}
        style={{ marginLeft: 15, marginTop: 8 }}
        width="40"
        height="40"
      />
      <Menu.Item style={{ fontSize: 22, position: "relative", right: 20 }}>
        TP - MdDS
      </Menu.Item>
      <Menu.Item
        style={{ fontSize: 15, position: "relative", right: 20 }}
        url=""
        onClick={handleItemClick}
      >
        Inicio
      </Menu.Item>
      <Menu.Item
        style={{ fontSize: 15, position: "relative", right: 20 }}
        url="cargarEstudiante"
        onClick={handleItemClick}
      >
        Estudiante
      </Menu.Item>
      <Menu.Item
        style={{ fontSize: 15, position: "relative", right: 20 }}
        url="cargarFamiliar"
        onClick={handleItemClick}
      >
        Familiares
      </Menu.Item>
    </Menu>
  );
};

export default Header;
