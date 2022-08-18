// import React from 'react'
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router";
// import { Link } from "react-router-dom";
// import { auth } from "../../../firebase/firebase";
// import "../../../styles/Home/Nav/Nav.css";
// import SellStocksModal from "../../Investment/SellStocksModal";
// import { useEffect, useState } from "react";
// import { GiHamburgerMenu} from 'react-icons/gi'
// import Navbar from './Navbar'


// let [open, setOpen] = useState(false);
// let [modalItem, setModalItem] = useState();

// let state = useSelector((state) => state);
// let signoutHandler = async () => {
//   await auth.signOut();
// };
// let handleOpen = (item) => {
//   setModalItem(item);
//   setOpen(true);
// };
// let handleClose = () => {
//   setOpen(false);
// };
// const Navbar = () => {



//     let [open, setOpen] = useState(false);
//     let [modalItem, setModalItem] = useState();
  
//     let state = useSelector((state) => state);
//     let signoutHandler = async () => {
//       await auth.signOut();
//     };
//     let handleOpen = (item) => {
//       setModalItem(item);
//       setOpen(true);
//     };
//     let handleClose = () => {
//       setOpen(false);
//     };
//   return (
   
//     <SellStocksModal
    
//     handleClose={handleClose}
//     item={modalItem}
//     open={open}
//     // fetchPayemnts={fetchPayemnts}
//   />


//   <div className="navbar">
//     <div className="logo">
//       <p>
//         <Link to={"/"}>Agoi Financial Services</Link>
//       </p>
//     </div>
//     {!state || !state.multiFactor || !state.multiFactor.user ? (
//       ""
//     ) : (
//       <>
//         <div className="links v-class-resp h-nav-resp">
//           <Link to="/stocks">Discover</Link>
//           <Link to={"/investment"}>Investments</Link>
//           {/* <a href="#">Orders</a> */}
//           <a href="#">Resources</a>
        


//         <div class="dropdown">
//           {/* <div className="wallet-container"> */}
//           <div className="cor" ><button class="dropbtn"></button>
// <span className="material-symbols-outlined">Wallet</span>
// <div class="dropdown-content">




// <div



//                         onClick={() => handleOpen()}
//                         className="we"
//                       >
//                         Sell Stocks
//                       </div>
// <Link to={"/wallet"}>cashout</Link>
// &#8377; {state.wallet_balance}
// {/* </div> */}





// </div></div></div> </div>
// )  
// }



// export default Navbar;