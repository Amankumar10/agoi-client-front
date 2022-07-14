import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase/firebase";
import "../../../styles/Home/Nav/Nav.css";

let Nav = () => {
  let state = useSelector((state) => state);
  let signoutHandler = async () => {
    await auth.signOut();
  };
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <p>
            <Link to={"/"}>Agoi Financial Services</Link>
          </p>
        </div>
        {!state || !state.multiFactor || !state.multiFactor.user ? (
          ""
        ) : (
          <>
            <div className="links">
              <Link to="/stocks">Discover</Link>
              <Link to={"/investment"}>Investments</Link>
              {/* <a href="#">Orders</a> */}
              <a href="#">Resources</a>
            </div>
          </>
        )}

        <div className="login">
          {!state || !state.multiFactor || !state.multiFactor.user ? (
            ""
          ) : (
            <>
              <div className="wallet">
                {/* <Link to={"/wallet"}> */}
                <div className="wallet-container">
                  <span
                    style={{ cursor: "pointer" }}
                    className="material-symbols-outlined"
                  >
                    person
                  </span>{" "}
                </div>
                {/* </Link> */}
              </div>
              <div className="wallet">
                <Link to={"/wallet"}>
                  <div className="wallet-container">
                    <span className="material-symbols-outlined">wallet</span>{" "}
                  </div>
                </Link>
                &#8377; {state.wallet_balance}
              </div>
            </>
          )}
          {!state || !state.multiFactor || !state.multiFactor.user ? (
            <Link className="login-link" to="/login">
              <div className="login-container">Login</div>
            </Link>
          ) : (
            <>
              <div className="logout-container" onClick={signoutHandler}>
                <img src="logout.svg" />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
