import { useState } from "react";
import "../../styles/Login/Login.css";
import MuiPhoneNumber from "material-ui-phone-number";
import { auth } from "../../firebase/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../Home/Home";

let Login = () => {
  const [selected, setSelected] = useState("IN");
  const [phoneNum, setPhoneNum] = useState("");
  const [hasReferral, setHasReferral] = useState(false);
  const [referral, setReferral] = useState("");
  const navigate = useNavigate();
  const loc = useLocation();
  let state = useSelector((state) => state);
  console.log(state);
  console.log(loc);
  const generateRecaptcha = () => {
    if (window.recaptchaVerifier) {
      console.log(window.recaptchaVerifier);
      window.recaptchaVerifier.recaptcha.reset();
    }
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log("response", response);
        },
      },
      auth
    );
  };

  const requestOtp = (e) => {
    e.preventDefault();
    if (phoneNum != null && phoneNum.length != 0) {
      generateRecaptcha();
      let appVarifier = window.recaptchaVerifier;
      console.log("appVarifier", appVarifier);
      signInWithPhoneNumber(auth, phoneNum, appVarifier)
        .then((result) => {
          console.log(result);
          window.confirmationResult = result;
          navigate(`/auth/verifyOtp`, {
            state: {
              contactNum: phoneNum,
              hasReferral: hasReferral,
              referral: referral,
            },
          });
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  return state ? (
    loc != null && loc.state != null && loc.state.route != null ? (
      <Navigate to={loc.state.route} />
    ) : (
      <Home />
    )
  ) : (
    <>
      <div className="login-login-container">
        <div
          className="login-banner"
          style={{ backgroundImage: `url("/login-svg-vector.svg")` }}
        >
          <h2>
            Welcome to <span>Agoi Financial Services</span>
          </h2>
          <h3>Choose where to invest</h3>
          <p>
            We provide the platform to serve your needs of making wealth by
            investing money in various growing startups and companies. Our aim
            is to provide the utmost care for our customer by providing them a
            way to invest their money to secure their future.
          </p>
        </div>
        <div className="auth-container">
          <h1>Login</h1>
          <div className="phone-input-cont">
            <MuiPhoneNumber
              onChange={(phone) => {
                console.log(phone);
                setPhoneNum(phone);
              }}
              className="phone-input"
              defaultCountry={"in"}
              countryCodeEditable={false}
            />
            <button className="submit-btn" onClick={requestOtp}>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
          <div className="d-flex mt-2 align-items-center has-referral-code">
            <input
              checked={hasReferral}
              onChange={() => {}}
              onClick={() => {
                setHasReferral(!hasReferral);
              }}
              style={{ marginRight: "5px" }}
              type="radio"
              label="radio"
            />
            <label style={{ padding: "0", margin: "0" }} htmlFor="radio">
              Have a Referral Code
            </label>
          </div>
          {hasReferral ? (
            <div className="d-flex mt-2 align-items-center">
              <input
                value={referral}
                onChange={(e) => {
                  console.log(referral.length);
                  if (e.currentTarget.value.length <= 6) {
                    setReferral(e.currentTarget.value);
                  }
                }}
                style={{ width: "200px", height: "40px" }}
                type="text"
                placeholder="Enter 6 digit Referral code"
              />
            </div>
          ) : (
            ""
          )}
          <div id="sign-in-button"></div>
          <div className="copyright-sec">
            @Copyright 2022 : AgoiFincancialServices
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
