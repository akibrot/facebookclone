import React, { useState } from "react";
import { FaEye, FaHandPeace, FaHandshake } from "react-icons/fa";
import { useDispatch } from "react-redux";
import "./Login.scss";
import { LOGIN } from "./Redux/actions/actions";
import { Link } from "react-router-dom";
function Loginpage() {
  const dispatch = useDispatch();

  const [showpassword, setshowpassword] = useState("password");

  const showpasshandler = () => {
    if (showpassword === "text") {
      setshowpassword("password");
    } else if (showpassword === "password") {
      setshowpassword("text");
    }
  };
  const logedin = () => {
    // alert("loged in");
    dispatch(LOGIN(true));
  };
  return (
    <div className="logincont">
      <div className="left">
        <div className="box">
          <h1>
            Hello <FaHandPeace className="ic" />
          </h1>
          <h5>Welcome to Aki Social</h5>
        </div>
      </div>
      <div className="right">
        <div className="box">
          <div className="input">
            <input
              type="text"
              name=""
              id=""
              placeholder="Email or Phone Number"
            />
          </div>
          <div className="input passcont">
            <input type={showpassword} name="" id="" placeholder="Password" />
            <FaEye className="eye" onClick={showpasshandler} />
          </div>
          <div className="input login" onClick={logedin}>
            <p>Login</p>
          </div>
            <div className="input create">
          <Link to="/reguser">

              <p>create account</p>
          </Link>

            </div>
          <p className="forget">Forget password</p>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
