import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "../../../styles/Home/Intro/Intro.css";
import InfoCardModal from "./InfoCardModal";
import ReferralCardModal from "./ReferralModel";
import Slider from "./Slider";

let Intro = () => {
  let state = useSelector((state) => state);
  let [open, setOpen] = useState(false);
  let navigate = useNavigate();
  let [openReferral, setOpenReferral] = useState(false);
  let handleOpenReferral = () => {
    setOpenReferral(true);
  };
  let handleCloseReferral = () => {
    setOpenReferral(false);
  };

  let handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ReferralCardModal
        handleClose={handleCloseReferral}
        open={openReferral}
      />
      <InfoCardModal handleClose={handleClose} open={open} />
      {/* <div className="home-notice">You are not varified by Admin Yet</div> */}
      <div className="landing-page">
        <div className="con1">
          <div className="con1-heading">
            <p>
              Invest in India's leading
              <br />
              private growth companies
            </p>
          </div>
          <div className="heading-btns">
            {/* <button className="res-btn">Explore Stocks</button> */}
            {state && state.multiFactor && state.multiFactor.user ? (
              <button onClick={() => navigate("/stocks")} className="acc-btn">
                Explore Stocks
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="section section-basic-components">
          <div className="row">
            <div className="ml-auto mr-auto col-md-7 col-lg-5">
              <h1 className="title">Make Investments</h1>
              <h5 className="category text-primary">
                <strong>Do safe Investments</strong>
              </h5>
              <p className="description mt-5">
                We re styled your way of investment by providing a modern
                platform. Use Agoi Investment Services for better investment and
                keep track of your investments. Do Investments of your
                suitablity and your convenience.
              </p>
            </div>
            <div className="img-cont-home col-md-12 col-lg-6">
              <div className="img-cont-home-in">
                <img src="img_1.png" />
              </div>
              <div className="img-cont-home-in">
                <img src="img_2.png" />
              </div>
              <div className="img-cont-home-in">
                <img src="img_3.png" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="video-container">
          <h1>User into a new era of private investments.</h1>
          <div className="vid-cont">
            <video
              src="https://chace-pe-assets.s3.us-east-2.amazonaws.com/Agoi Financial Services/videos/Agoi Financial Services+Ad+Compressed.mp4"
              preload="auto"
              muted
              autoPlay={true}
              controls=""
              style={{ width: "100%", height: "100%" }}
              playsInline=""
              webkit-playsinline=""
              x5-playsinline=""
            ></video>
          </div>
        </div> */}
        <Slider />

        {/* <div className="info-container">
          <h1>User into a new era of private investments.</h1>
          <div className="cards-container">
            <div onClick={handleOpen} className="info-card">
              <h1>Why</h1>
              <div className="add-btn">+</div>
            </div>
            <div onClick={handleOpen} className="info-card">
              <h1>What</h1> <div className="add-btn">+</div>
            </div>
            <div onClick={handleOpen} className="info-card">
              <h1>How</h1> <div className="add-btn">+</div>
            </div>
            <div onClick={handleOpen} className="info-card">
              <h1>Legal</h1> <div className="add-btn">+</div>
            </div>
          </div>
        </div> */}
        <div className="d-flex justify-content-center align-items-center start-investment-cont">
          <div className="col-6">
            <h3>Thanks for visiting us</h3>
            <p>Let's get in touch with us on any of these properties.</p>
          </div>
          <div className="social-icons col-6">
            <div className="twitter">
              <img src="/twitter.svg" />
            </div>
            <div className="facebook">
              <img src="/fb.svg" />
            </div>
            <div className="instagram">
              <img src="/insta.svg" />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center referral-container">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <p>Refer a Friend</p>
          </div>
          <div className="referral-code-container-home">{state ? state.referral_code : ""}</div>
        </div>
        <div className="home-footer">
          <div className="copyright-cont">
            All trademarks and logos or registered trademarks and logos found on
            this Site or mentioned herein belong to their respective owners and
            are solely used for informational and educational purposes.
            <br />
            <br /> The material presented in this advertisement is for
            informational purposes only and should not be construed as
            investment advice or investment availability. It is not a
            recommendation of, or an offer to sell or solicitation of an offer
            to buy, any particular unlisted share, security, strategy, or
            investment product. Investing in the private market and securities
            involves risks, including the potential loss of money, and past
            performance does not guarantee future results. Market trends, data
            interpretations, graph projections are provided for informational
            and illustrative purposes and may not reflect actual future
            performance. Nothing on this website should be construed as
            personalized investment advice or should not be treated as legal,
            financial, or any other form of advice. Agoi Financial Services is
            not liable for financial or any other form of loss incurred by the
            user or any affiliated party based on information provided herein.
            <br />
            <br /> Agoi Financial Services is neither a stock exchange nor does
            it intend to get recognized as a stock exchange under the Securities
            Contracts Regulation Act, 1956. Agoi Financial Services is not
            authorized by the capital markets regulator to solicit investments.
            The securities traded on these platforms are not traded on any
            regulated exchange.
            <br />
            <br /> The website will be updated regularly.
            <br />
            <br /> Copyright © 2022 - Agoi Financial Services - All Rights
            Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
