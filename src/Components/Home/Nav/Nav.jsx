import { useSelector } from "react-redux";
// import { Navigate } from "react-router";
import { Link } from "react-router-dom";
//  import "../../../Components/Notify/Noftify.css";
// import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";

// import { auth } from "../../../firebase/firebase";
import "../../../styles/Home/Nav/Nav.css";
import Sell from "../../Investment/Sell";
import Ping from "../../Notify/Ping"
// import { useToasts } from "react-toast-notifications";

// import { BASE_URL } from "../../../Constants/api_constants";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { GiHamburgerMenu } from 'react-icons/gi'
// import NotificationBadge from "react-notification-badge";
// import { Effect } from "react-notification-badge";
// import { useReducer } from "react";
// import moment from "moment";
// import { blueGrey } from "@mui/material/colors";


import React from "react";


import FacebookIcon from "@mui/icons-material/Facebook";
// import SearchIcon from "@material-ui/Search";
// import { SearchOutlined } from "@mui/icons-material";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import { Link } from "react-router-dom";
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import InstagramIcon from "@mui/icons-material/Instagram";

import CallIcon from "@mui/icons-material/Call";


let Nav = () => {

  // const reducer = (state,action) => {
  //   switch()
  // }

// var started
  // const [user, setUser] = useState([])
  // let { addToast } = useToasts();
  // let [open, setOpen] = useState(false);
  // let [opens, setOpens] = useState(false);
  // let  [check, setCheck] = useState(false);
  // let [totalseen, setTotalseen] = useState();
  // let [modalItem, setModalItem] = useState();
//  let [counts, setcounts] = useState([])
  // const [first, setFirst] = useState(true)
  // let [notification, setNotification] = useState([])
  // const [usernotifications, setuserNotifications] = useState([])
  // let [modalItems, setModalItems] = useState();
  // let [orders, setOrders] = useState([]);
  // const [status, setStatus] = useState();
  //var ends

 

  let state = useSelector((state) => state); // fectching user data from redux store

  // let signoutHandler = async () => {
  //   await auth.signOut();  // calling auth singout to logout the user
  // };

  // let handleOpen = (item) => {  // it open the cashout input box
  //   setModalItem(item);
  //   setOpen(true);              //use state
  // };

  // let handleClose = () => {     // close the
  //   setOpen(false);
  // };


  

  // let handleOpens = (e) => {   // it open the notification input box
    // setModalItems(items);
    // items.preventDefault();
    // jh();
  //   setOpens(true);
  // };

  // let handleCloses = () => {  
  //   setOpens(false);
  // };

  // let fetchuser = async () => { // to fetch the user from the get by ID api
 

  //   if(state) {
  //     let data = await axios.get(
  //       `${BASE_URL}/user/${state._id}`
  //     );
  //     if (data.data && data.data.data) {
  //       let response = data.data.data;
  //       console.log(response);
  //       setOrders(response);
  //       setUser(response);
       
  //     }
  //   }
  // };

  // console.log(usernotifications.data._id);


  
  
  // let fetchstatus = async () => {
 
  //   if(state) {
  //     const data = await axios.get(
  //       `${BASE_URL}/user/user-notification/${state._id}`); // user id 
        
        
  //       console.log(data);
  //       const notifyid = (data.data.data);
      
  //         notifyid.forEach(element => {
  //           console.log(element);
  //           console.log(element._id);
  //         });
   




  //     if (data.data && data.data.data) {
  //       let response = data.data;
  //       console.log(response);
   
  //       setuserNotifications(response)
  //       setStatus(response);
  //     }
  //   }
  // };











  // let handleRead = async (event,nID) => {
  //   try {
     


  //     let data = await axios.post(BASE_URL + `/user/user-notification/${nID}`, {
  // status:true,
       
    
        
  //     });
      
  //     if (data.data && data.data.data) {  
  //       // fetchstatus();
  //     } else {
  //       addToast(data.data.message, { appearance: "error", autoDismiss: true });
  //     }
  //   } catch (e) {
  //     console.log(e);
  //     addToast("error occurred", { appearance: "error", autoDismiss: true });
  //   }
    
  // };



  // useEffect(() => {
    // fetchuser();
    // fetchstatus();
   

  // }, [state]);
  
  return (
    <>
    <Sell
      // handleClose={handleClose}
      // item={modalItem}
      // walletBalance={orders.wallet_balance} 
      // open={open}
      // fetchuser={fetchuser}
      />

      <Ping 
      // handleCloses={handleCloses}
      // item={modalItems}   
      // open={opens}   
      // fetchuser={fetchuser}
      // counts={counts}
  />
 
        

<div className="fcontainer">

          <div className="f" >   <a href="#"> <CallIcon />-21324334</a></div>
        <div className="fitem item1">    <a href="https://www.facebook.com/">
          <FacebookIcon
          />
        </a></div>
        <div className="fitem item1">  <a href="https://www.instagram.com">
          <InstagramIcon
         
          />
        </a></div>
        <div className="fitem item3">  <a href="https://twitter.com/">
     
     <YouTubeIcon
       
     />
   </a></div>
       
    </div>
   

      <div className="navbar">
       
        <div className="logo">
          <p>
            <Link to={"/"}>Agoi Financial Services</Link>
         
          
          </p>         

        </div>


        {!state || !state.multiFactor  ? (
          ""
        ) : (
          <>
            <div className="links v-class-resp h-nav-resp">
              <Link to="/stocks">Discover</Link>
              <Link to={"/investment"}>Investments</Link>
              
              <a href="#">Resources</a>


              <div className="dropdown">
               
                <div className="cor" >
               
                  <span className="material-symbols-outlined">Wallet</span>
                  <div className="dropdown-content">
                    {/* <div
                      onClick={() => handleOpen()}
                      className="we"
                    >
                      Cashout =       &#8377; {orders.wallet_balance}
                    </div>  */}
                    <Link to={"/wallet"}>Referral History</Link>
                   
                   


                    <Link to={"/Cashouthistory"}>Cashout History</Link>
                  </div>
                    </div>
                 
                    </div>
                       </div>     
       


   
            <div className="dropdowns">
            <div className="button">
                
               
                 
                {/* <NotificationBadge count={usernotifications.unseenTotal}       effect={Effect.SCALE} /> */}
                <span style={{fontSize:"28px"}}  className="material-symbols-outlined">notifications</span>
           
                  <div className="dropdown-contents">
      
           <div className="table-containers">
             <table className="table">
            <thead>
              <tr>
 
               <div className="investment-item d-flex flex-column">
             <span style={{ fontSize:"24px" }}>
             Notifications

             </span>
        
           </div>
              </tr>
            </thead>

           
      
            {/* {
                  usernotifications.
                        length === 0 ? (
                    "No New Notification"
                ) : (
                    <tbody>
 
                        {usernotifications.data.slice().reverse()
                                .map((e) => {

                                    return (
                                        <>
                                    
                                      <tr > */}
                                     
                                      {/* <div className="we">
                                   

                                    
                                    
                                  
                                     
                                     
                                     <div onClick={event => handleRead(event,e._id)} ><td onClick={() => {handleOpens(setcounts(e.message) )}}>{e.message}</td> 
                                      <td >{e.status ? "" :  <div className="dot" ></div> }</td> 
                                     
                                     </div>
                                     
                                        

                                               <div className="ee">
                                            <td style={{fontSize:"9px"}}>{moment(e.createdAt).fromNow()}</td> 
                            
                                            </div>
                                               </div> */}
                                               {/* </tr> */}
                          
                                            
                                        {/* </>
                                    );
                                })}
                    </tbody>
                )} */}
            
</table>
 
      </div>
  
             </div>
             </div>

            </div>

            </>
        )} 

        
        

    <div className="login">
          {!state || !state.multiFactor || !state.multiFactor.user ? (
            ""
          ) : (
            <>       
              <div className="wallet">
             
                <div className="wallet-container">
                  <span
                    style={{ cursor: "pointer" }}
                    className="material-symbols-outlined"
                  >
                    person
                  </span>{" "}
              </div>     
                </div>              
              </>
        )} 


           {!state || !state.multiFactor || !state.multiFactor.user ? (
             <Link className="login-link" to="/login">
               <div className="login-container">Login/Signup</div>
             </Link>
           ) : (
             <>
               {/* <div className="logout-container" onClick={signoutHandler}>
                 <img src="logout.svg" />
               </div> */}
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
