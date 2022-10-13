// // UI  improvement



import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "../../../styles/Home/Intro/Intro.css";
import InfoCardModal from "./InfoCardModal";
import ReferralCardModal from "./ReferralModel";
import Slider from "./Slider";
// import Photo from "../../../../public/"

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
  console.log(state);

  

  return (
    <>
      <ReferralCardModal
        handleClose={handleCloseReferral}
        open={openReferral}
      />
      <InfoCardModal handleClose={handleClose} open={open} />

      {/* <div className="home-notice">You are not varified by Admin Yet</div> */}
      <div className="landing-page">

 {/* <div className="con1"> */}

      <section id="hom">
        <h1 className="h-primary">Invest in India's leading  private  growth companies</h1>
      
        <button onClick={() => navigate("/login")} class="btns">StartNow</button>
    </section>
       
        {/* </div> */}
 



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
            {/* <div className="hero"> */}
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
            {/* </div> */}
          </div>
        </div>
        <div className="df"><h2>Available Stocks</h2>


        </div>
        <div className="home-footers">

        </div>
       
        <Slider />

       



{/* 
<div className="df"><h2>Our Best 
  Workers </h2>
  
</div>
  <div className="home-footers">


  
</div>


  <div className="con3">
      <img
        className="ima"
     src="https://images-cdn.9gag.com/images/thumbnail-facebook/27361130_1469416860.0675_aZE6yP_n.jpg"
     />
  
    
<img
        className="ima"
     src="  https://fashionista.com/.image/t_share/MTMwNjM1MTYxMjkyMjk0MTU0/rob-lowe-image-2jpg.jpg
     "
  />

  </div> */}






        <div className="home-footers">


        </div>
        <div className="start-investment-cont">


          
          
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

          {!state || !state.multiFactor || !state.multiFactor.user ? (
          ""
        ) : (
          <>
          <div className="col-12 d-flex justify-content-center align-items-center">
            <p>Refer a Friend</p>
          </div>
          <div className="referral-code-container-home">{state.referral_code }</div>
          </>

        )}

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





















// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router";
// import "../../../styles/Home/Intro/Intro.css";
// import InfoCardModal from "./InfoCardModal";
// import ReferralCardModal from "./ReferralModel";
// import Slider from "./Slider";
// // import Photo from "../../../../public/"

// let Intro = () => {
//   let state = useSelector((state) => state);
//   let [open, setOpen] = useState(false);
//   let navigate = useNavigate();
//   let [openReferral, setOpenReferral] = useState(false);
//   let handleOpenReferral = () => {
//     setOpenReferral(true);
//   };
//   let handleCloseReferral = () => {
//     setOpenReferral(false);
//   };

//   let handleClose = () => {
//     setOpen(false);
//   };
//   console.log(state);

  

//   return (
//     <>
//       <ReferralCardModal
//         handleClose={handleCloseReferral}
//         open={openReferral}
//       />
//       <InfoCardModal handleClose={handleClose} open={open} />

//       {/* <div className="home-notice">You are not varified by Admin Yet</div> */}
//       <div className="landing-page">
//          <div className="con1">
//         <img
//         className="im"
//      src="https://blogs.idc.com/wp-content/uploads/2022/07/pexels-artem-podrez-5716016-3.jpg"
//   />
//    <div className="bottom-left">  <p>
//               Invest in India's
//                leading
//               private
//               <br />
//                growth companies
//             </p></div>



      
//           <div className="heading-btns">
           
    
//             <button onClick={() => navigate("/login")} className="acc-btn">
//                Start Now
//               </button>
//           </div>
//         </div> 

// {/* <div className="container">
//   <img  className="im" src="https://blogs.idc.com/wp-content/uploads/2022/07/pexels-artem-podrez-5716016-3.jpg" />
//   <div className="bottom-left">Bottom Left</div>
//   <div className="top-left">Top Left</div>
//   <div className="top-right">Top Right</div>
//   <div className="bottom-right">Bottom Right</div>
//   <div className="centered">Centered</div>
// </div> */}

//         <div className="section section-basic-components">
//           <div className="row">
//             <div className="ml-auto mr-auto col-md-7 col-lg-5">
//               <h1 className="title">Make Investments</h1>
//               <h5 className="category text-primary">
//                 <strong>Do safe Investments</strong>
//               </h5>
//               <p className="description mt-5">
//                 We re styled your way of investment by providing a modern
//                 platform. Use Agoi Investment Services for better investment and
//                 keep track of your investments. Do Investments of your
//                 suitablity and your convenience.
//               </p>
//             </div>
//             <div className="img-cont-home col-md-12 col-lg-6">
//               <div className="img-cont-home-in">
//                 <img src="img_1.png" />
//               </div>
//               <div className="img-cont-home-in">
//                 <img src="img_2.png" />
//               </div>
//               <div className="img-cont-home-in">
//                 <img src="img_3.png" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="df"><h2>Available Stocks</h2>


//         </div>
//         <div className="home-footers">

//         </div>
       
//         <Slider />

       



// {/* 
// <div className="df"><h2>Our Best 
//   Workers </h2>
  
// </div>
//   <div className="home-footers">
  
// </div>
//   <div className="con3">
//       <img
//         className="ima"
//      src="https://images-cdn.9gag.com/images/thumbnail-facebook/27361130_1469416860.0675_aZE6yP_n.jpg"
//      />
  
    
// <img
//         className="ima"
//      src="  https://fashionista.com/.image/t_share/MTMwNjM1MTYxMjkyMjk0MTU0/rob-lowe-image-2jpg.jpg
//      "
//   />
//   </div> */}






//         <div className="home-footers">


//         </div>
//         <div className=" start-investment-cont">


          
          
//           <div className="col-6">
//             <h3>Thanks for visiting us</h3>
//             <p>Let's get in touch with us on any of these properties.</p>
//           </div>
//           <div className="social-icons col-6">
//             <div className="twitter">
//               <img src="/twitter.svg" />
//             </div>
//             <div className="facebook">
//               <img src="/fb.svg" />
//             </div>
//             <div className="instagram">
//               <img src="/insta.svg" />
//             </div>
//           </div>
//         </div>
//         <div className="d-flex flex-column justify-content-center align-items-center referral-container">

//           {!state || !state.multiFactor || !state.multiFactor.user ? (
//           ""
//         ) : (
//           <>
//           <div className="col-12 d-flex justify-content-center align-items-center">
//             <p>Refer a Friend</p>
//           </div>
//           <div className="referral-code-container-home">{state.referral_code }</div>
//           </>

//         )}

//         </div>
//         <div className="home-footer">
//           <div className="copyright-cont">
//             All trademarks and logos or registered trademarks and logos found on
//             this Site or mentioned herein belong to their respective owners and
//             are solely used for informational and educational purposes.
//             <br />
//             <br /> The material presented in this advertisement is for
//             informational purposes only and should not be construed as
//             investment advice or investment availability. It is not a
//             recommendation of, or an offer to sell or solicitation of an offer
//             to buy, any particular unlisted share, security, strategy, or
//             investment product. Investing in the private market and securities
//             involves risks, including the potential loss of money, and past
//             performance does not guarantee future results. Market trends, data
//             interpretations, graph projections are provided for informational
//             and illustrative purposes and may not reflect actual future
//             performance. Nothing on this website should be construed as
//             personalized investment advice or should not be treated as legal,
//             financial, or any other form of advice. Agoi Financial Services is
//             not liable for financial or any other form of loss incurred by the
//             user or any affiliated party based on information provided herein.
//             <br />
//             <br /> Agoi Financial Services is neither a stock exchange nor does
//             it intend to get recognized as a stock exchange under the Securities
//             Contracts Regulation Act, 1956. Agoi Financial Services is not
//             authorized by the capital markets regulator to solicit investments.
//             The securities traded on these platforms are not traded on any
//             regulated exchange.
//             <br />
//             <br /> The website will be updated regularly.
//             <br />
//             <br /> Copyright © 2022 - Agoi Financial Services - All Rights
//             Reserved
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Intro;