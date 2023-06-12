import React, { Fragment, useState } from "react";
import CenterSide from "../../components/centerSide/CenterSide";
import LeftSide from "../../components/leftSide/LeftSide";
import RightSide from "../../components/rightSide/RightSide";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import {signOut} from "firebase/auth"
import googleAuth from "../../config/firebaseConfig";

const Home = () => {
  const navigate = useNavigate()
  // const user = JSON.parse(window.localStorage.getItem("user"));
  const dateNow = new Date();
  const [currentMonth, setCurrentMonth] = useState(dateNow.getMonth());
  const [currentYear, setCurrentYear] = useState(dateNow.getFullYear());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const logOut = () => {
    window.localStorage.removeItem("user");
    if (!window.localStorage.getItem("user")) {
      navigate("/")
    }
    signOut(googleAuth)
    .then(()=>{
      window.localStorage.removeItem("user")
      navigate("/")
    })
  };
  return (
    <Fragment>
      <div className="home-page">
        <div className="container-fluid home-page-content">
          <LeftSide />
          <CenterSide
          dateNow={dateNow}
          months={months}
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          currentYear={currentYear}
          setCurrentYear={setCurrentYear}
        />
          <RightSide
            dateNow={dateNow}
            months={months}
            currentMonth={currentMonth}
            currentYear={currentYear}
            setCurrentYear={setCurrentYear}
          />
        </div>
        <button onClick={logOut} className="btn btn-primary w-50">
          Logout
        </button>
      </div>
    </Fragment>
  );
};
export default Home;
