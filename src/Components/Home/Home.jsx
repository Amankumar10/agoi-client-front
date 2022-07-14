import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { auth } from "../../firebase/firebase";
import Intro from "./Intro/Intro";
import Nav from "./Nav/Nav";

let Home = () => {
  return (
    <>
      <Nav />
      <Intro />
    </>
  );
};

export default Home;
