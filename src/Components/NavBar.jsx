import React, { useState } from "react";
import "./NavBar.scss";
import {
  FaFacebook,
  FaSearch,
  FaHome,
  FaViadeo,
  FaUsers,
  FaGamepad,
  FaUser,
  FaWindows,
  FaFacebookMessenger,
  FaBell,
  FaArrowDown,
} from "react-icons/fa";
import NavMenuGenerator from "./NavMenuGenerator";
function NavBar() {
  const [selected, setselected] = useState(1);

  const changeselected = (id) => {
    setselected(id);
  };
  const Menus = [
    {
      id: 1,
      title: "Home",
      Icon: FaHome,
    },
    {
      id: 2,
      title: "Watch",
      Icon: FaViadeo,
    },
    {
      id: 3,
      title: "Groups",
      Icon: FaUsers,
    },
    {
      id: 4,
      title: "Gammings",
      Icon: FaGamepad,
    },
  ];
  return (
    <div className="NavCont">
      <div className="left">
        <FaFacebook className="fb" />
        <div className="input">
          <FaSearch className="search" />
          <input type="text" name="" id="" placeholder="Search FaceBook" />
        </div>
      </div>
      <div className="center">
        {/* <NavMenuGenerator icon={} title={}/> */}
        {Menus.map((genmenu) => {
          return (
            <NavMenuGenerator
              key={genmenu.id}
              data={genmenu}
              selected={selected}
              changeselected={changeselected}
            ></NavMenuGenerator>
          );
        })}
        {/* <div className="box" title="Watch">
          <FaViadeo className="ic" />
        </div>
        <div className="box" title="Groups">
          <FaUsers className="ic" />
        </div>
        <div className="box" title="Gamming">
          <FaGamepad className="ic" />
        </div> */}
      </div>
      <div className="right">
        <div className="profile">
          <div className="iconu">
            <FaUser className="u" />
            <b>Aki</b>
          </div>
        </div>
        <div className="attributs">
          <FaWindows />
        </div>
        <div className="attributs">
          <FaFacebookMessenger />
        </div>
        <div className="attributs">
          <FaBell />
        </div>
        <div className="attributs">
          <FaArrowDown />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
