import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase/firebase";
import "../../../styles/Home/Nav/Nav.css";
import Sell from "../../Investment/Sell";
// import Ping from "../../Notify/Ping"
import Notify from "../../Notify/Notify";
import { BASE_URL } from "../../../Constants/api_constants";
import axios from "axios";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'



let Nav = () => {

  let [open, setOpen] = useState(false);
  let [modalItem, setModalItem] = useState();
  let [modalItems, setModalItems] = useState();

  let [orders, setOrders] = useState([]);

  let state = useSelector((state) => state);
  // console.log(state);
  let signoutHandler = async () => {
    await auth.signOut();
  };





  let fetchuser = async () => {
    handleClose();
    if (state) {
      let data = await axios.get(
        `${BASE_URL}/user/${state._id}`
      );
      if (data.data && data.data.data) {
        let response = data.data.data;
        console.log(response);
        setOrders(response);
        // console.log(orders);
      }
    }
  };


  let handleOpen = (item) => {
    setModalItem(item);
    setOpen(true);
  };




  let handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchuser();
        
  }, [state]);

  return (
    <>
      <Sell
        handleClose={handleClose}
        item={modalItem}
        walletBalance={orders.wallet_balance} 
        open={open}
        fetchuser={fetchuser}
      />

    {/*  */}

      
      <div className="navbar">
        <GiHamburgerMenu className="burger"
          onClick={() => setOpen(!open)} />
        <div className="logo">
          <p>
            <Link to={"/"}>Agoi Financial Services</Link>
            {/* &#8377; {state.wallet_balance} */}
          </p>         

        </div>
            <div className="links v-class-resp h-nav-resp">
              <Link to="/stocks">Discover</Link>
              <Link to={"/investment"}>Investments</Link>
              
              <a href="#">Resources</a>

              

              <div className="dropdown">
                {/* <div className="wallet-container"> */}
                <div className="cor" >
                {/* <button className="dropbtn"></button> */}
                  <span className="material-symbols-outlined">Wallet</span>
                  <div className="dropdown-content">
                    <div
                      onClick={() => handleOpen()}
                      className="we"
                    >
                      Cashout =       &#8377; {orders.wallet_balance}
                    </div> 
                    <Link to={"/wallet"}>Referral History</Link>
                   
                   


                    <Link to={"/Cashouthistory"}>Cashout History</Link>
                  </div></div></div> </div>
      


               
                  <div className="dropdowns">
                {/* <div className="wallet-container"> */}
                
               
                <span style={{fontSize:"28px"}} className="material-symbols-outlined">notifications</span>

                  <div className="dropdown-contents">
                    {/* <div className="me"></div> */}
                
                    <Notify/>
             </div>
            </div>

                     
        <div className="login">



         
          
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



















// import React from 'react'
//  import { useSelector } from "react-redux";
//  import { Navigate } from "react-router";
//  import { Link } from "react-router-dom";
//  import { auth } from "../../../firebase/firebase";
// import "../../../styles/Home/Nav/Nav.css";
//  import Sell from "../../Investment/Sell";
//  import { BASE_URL } from "../../../Constants/api_constants";
//  import axios from "axios";
//  import { useEffect, useState } from "react";
//  import { GiHamburgerMenu } from 'react-icons/gi'

// const Nav = () => {

  
  
//   let [open, setOpen] = useState(false);
//   let [modalItem, setModalItem] = useState();
//   let [users, setUsers] = useState([]);


//   let state = useSelector((state) => state);
//   console.log(state);
//   let signoutHandler = async () => {
//     await auth.signOut();
//   };





//   let fetchuser = async () => {
//     handleClose();
//     if (state) {
//       let data = await axios.get(
//         `${BASE_URL}/user/${state._id}`
//       );
//       if (data) {
//         // let response = data.data.data;
//         console.log(data);
//         setUsers(data);
//         // console.log(orders);
//       }
//     }
//   };


  
//     // users.map((err) => {
     
       
//     //      {/* <td>{e.left_shares}</td> */}
//     //      console.log(err.stock_name)
//     //      {/* <td>{e.wallet_balance}</td> */}
       
      
//     // })
  


//   let handleOpen = (item) => {
//     setModalItem(item);
//     setOpen(true);
//   };

//   let handleClose = () => {
//     setOpen(false);
//   };

//   useEffect(() => {
//     fetchuser();
    
//   }, [state]);
  
  
//   return (

    




//     <div className='gf' >
//         {/* {
//           user.map((e) => (
//             <div>{e.wallet_balance}</div>
//           ))
//         } */}



//         {/* {
//           users.map((e) => {
//             return(
//               <> 
             
//                <td>{e.wallet_balance}</td>
//                </>
//             )
//           })
//         }  */}

//     </div>
//   )
// }

// export default Nav