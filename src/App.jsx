import "./App.scss";
import Center from "./Components/Center";
import LeftMenu from "./Components/LeftMenu";
import Loginpage from "./Components/Loginpage";
import NavBar from "./Components/NavBar";
import Right from "./Components/Right";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import RegisterUser from "./Components/RegisterUser";
function App() {
  const { login } = useSelector((state) => state.LoginReducer);
  return (
    <div className="App">
      {/* <Routes> */}
      <NavBar />
      {/* </Routes> */}
      {/* <Routes> */}
      {login ? (
        <NavBar />
      ) : (
        // <Routes>
        // <Loginpage />
        <RegisterUser/>

        // </Routes>
      )}
      {/* </Routes> */}
      {/* <Routes> */}
      <NavBar />
      {/* </Routes>{" "} */}
      <div className="sections">
        <div className="leftmain">
          <LeftMenu />
        </div>
        <div className="centermain">
          <Center />
        </div>
        <div className="rightmain">
          <Right />
        </div>
      </div>
    </div>
  );
}

export default App;
