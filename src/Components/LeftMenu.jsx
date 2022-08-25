import React from "react";
import "./listmenu.scss";
import {
  FaBookmark,
  FaEdit,
  FaHome,
  FaUser,
  FaUserFriends,
  FaUsers,
  FaVideo,
} from "react-icons/fa";
function LeftMenu() {
  return (
    <div className="lc">
      <div className="listcont">
        <FaUser className="ic" />
        <span>Aki sami</span>
      </div>
      <div className="listcont">
        <FaUserFriends className="ic" />
        <span>Frinds</span>
      </div>
      <div className="listcont">
        <FaUsers className="ic" />
        <span>Groups</span>
      </div>
      <div className="listcont">
        <FaHome className="ic" />
        <span>MarketPlace</span>
      </div>
      <div className="listcont">
        <FaVideo className="ic" />
        <span>Watch</span>
      </div>
      <div className="listcont">
        <FaEdit className="ic" />
        <span>Memories</span>
      </div>
      <div className="listcont">
        <FaBookmark className="ic" />
        <span>Saved</span>
      </div>
    </div>
  );
}

export default LeftMenu;
