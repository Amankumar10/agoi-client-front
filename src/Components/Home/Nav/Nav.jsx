import { useSelector } from "react-redux";

import { Link } from "react-router-dom";



import { auth } from "../../../firebase/firebase";
import "../../../styles/Home/Nav/Nav.css";
import Sell from "../../Investment/Sell";
import Ping from "../../Notify/Ping"
import { useToasts } from "react-toast-notifications";

import { BASE_URL } from "../../../Constants/api_constants";
import axios from "axios";
import { useEffect, useState } from "react";

import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";

import moment from "moment";
import CloseIcon from '@mui/icons-material/Close';

import React from "react";


import FacebookIcon from "@mui/icons-material/Facebook";

// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from "@mui/icons-material/Instagram";

import CallIcon from "@mui/icons-material/Call";



let Nav = () => {

  // const reducer = (state,action) => {
  //   switch()
  // }

// var started
  const [user, setUser] = useState([])
  let { addToast } = useToasts();
  let [open, setOpen] = useState(false);
  let [opens, setOpens] = useState(false);
  let  [check, setCheck] = useState(false);
  const [totalseen, setTotalseen] = useState();
  let [modalItem, setModalItem] = useState();
  const [counts, setcounts] = useState([])
  // const [first, setFirst] = useState(true)
  let [notification, setNotification] = useState([])
  const [usernotifications, setuserNotifications] = useState([])
  let [modalItems, setModalItems] = useState();
  let [orders, setOrders] = useState([]);
  const [status, setStatus] = useState();

  const [isMobile, setIsMobile] = useState(false);
  //var ends
 

  let state = useSelector((state) => state); // fectching user data from redux store
  const [isActive, setIsActive] = useState(false);
  let signoutHandler = async () => {
    await auth.signOut();  // calling auth singout to logout the user
  };

  let handleOpen = (item) => {  // it open the cashout input box
    setModalItem(item);
    setOpen(true);              //use state
  };

  let handleClose = () => {     // close the
    setOpen(false);
  };


  

  let handleOpens = (e) => {   // it open the notification input box
    // setModalItems(items);
    // items.preventDefault();
    // jh();
    setOpens(true);
  };

  let handleCloses = () => {  
    setOpens(false);
  };

  let fetchuser = async () => { // to fetch the user from the get by ID api
    // handleClose();
    // handleCloses();

    if(state) {
      let data = await axios.get(
        `${BASE_URL}/user/${state._id}`
      );
      if (data.data && data.data.data) {
        let response = data.data.data;
        console.log(response);
        setOrders(response);
        setUser(response);
        // setNotification(response);
        // setStatus(response);

        // console.log(orders);
      }
    }
  };

  // console.log(usernotifications.data._id);


  
  
  let fetchstatus = async () => {
    // handleClose();
    // handleCloses();
    // console.log(state._id,'this is id')
    if(state) {
      const data = await axios.get(
        `${BASE_URL}/user/user-notification/${state._id}`); // user id 
        
        
        console.log(data);
        const notifyid = (data.data.data);
      
          notifyid.forEach(element => {
            console.log(element);
            console.log(element._id);
          });
   




      if (data.data && data.data.data) {
        let response = data.data;
        console.log(response);
       
        // setOrders(response);
        // setUser(response);
        setuserNotifications(response)
        setStatus(response);
      }
    }
  };











  let handleRead = async (event,nID) => {
    try {
      let data = await axios.post(BASE_URL + `/user/user-notification/${nID}`, {
  status:true,
       
    
        
      });
      
      if (data.data && data.data.data) {
        // addToast("Notification has been update", {
        //   appearance: "success",
        //   autoDismiss: true,
        // });
        fetchstatus();
      } else {
        addToast(data.data.message, { appearance: "error", autoDismiss: true });
      }
    } catch (e) {
      console.log(e);
      addToast("error occurred", { appearance: "error", autoDismiss: true });
    }
    
  };



  useEffect(() => {
    fetchuser();
    fetchstatus();
    // console.log(state._id)

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

      <Ping 
      handleCloses={handleCloses}
      // item={modalItems}   
      open={opens}   
      fetchuser={fetchuser}
      counts={counts}
  />
 
        

     <div className="fcontainer">

          <div className="f" >   <a id="i" href="#"> <CallIcon />-21324334</a></div>
        <div className="fitem item1">    <a id="i" href="https://www.facebook.com/">
          <FacebookIcon
          />
        </a></div>
        <div className="fitem item1">  <a  id="i" href="https://www.instagram.com">
          <InstagramIcon
         
          />
        </a></div>
        <div className="fitem item3">  <a id="i" href="https://twitter.com/">
     
     <YouTubeIcon
       
     />
   </a></div>
       
    </div>
   

      <div className="navbar">
        {/* <GiHamburgerMenu className="burger"
          onClick={() => setOpen(!open)} /> */}
        {/* <div className="logo"> */}
          <p >
            <Link id="idea" to={"/"}>Agoi Financial Services</Link>
            {/* {state.usernotifications.user_id} */}
            {/* &#8377; {state.wallet_balance} */}
          </p>         


        {/* </div> */}

        <ul className={isMobile ? "nav-links-mobile": "nav-links"}
          onClick={() => setIsMobile(false)}>


        {!state || !state.multiFactor || !state.multiFactor.user ? (
          ""
        ) : (
          <>
            <div className="links v-class-resp h-nav-resp">
              <Link id="iee" to="/stocks">Discover</Link>
              <Link  id="iee" to={"/investment"}>Investments</Link>
              
              <a id="iee" href="#">Resources</a>


              <div className="dropdown">
               
                                <div className="cor" >
                           
                                  <span id="iee" className="material-symbols-outlined">Wallet</span>
                                  <div className="dropdown-content">
                                    <div
                                      onClick={() => handleOpen()}
                                      className="we"
                                    >
                                      Cashout =  &#8377; {orders.wallet_balance}
                                    </div> 
                                    <Link id="iee" to={"/wallet"}>Referral History</Link>
                               
                               
            
            
                                    <Link id="iee" to={"/Cashouthistory"}>Cashout History</Link>
                                  </div>
                                    </div>
                                    {/* {console.log()} */}
                                    </div>
                                       </div>  


   
            <div className="dropdowns">
            <div className="button" >
                
               
                
                <NotificationBadge  count={usernotifications.unseenTotal}       effect={Effect.SCALE} />
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

           
      
            {
                  usernotifications.
                        length === 0 ? (
                    "No New Notification"
                ) : (
                    <tbody>
 
                        {usernotifications.data.slice().reverse()
                                .map((e) => {

                                    return (
                                        <>
                                    
                                      <tr >
                                     
                                      <div className="we">
                                   

                                    
                                    
                                  
                                     
                                     
                                     <div onClick={event => handleRead(event,e._id)} ><td onClick={() => {handleOpens(setcounts(e.message) )}}>{e.message}</td> 
                                      <td >{e.status ? "" :  <div className="dot" ></div> }</td> 
                                     
                                     </div>
                                     
                                        

                                               <div className="ee">
                                            <td style={{fontSize:"9px"}}>{moment(e.createdAt).fromNow()}</td> 
                            
                                            </div>
                                               </div>
                                               </tr>
                          
                                            
                                        </>
                                    );
                                })}
                    </tbody>
                )}
            
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
               <div className="logout-container" onClick={signoutHandler}>
                 <img src="logout.svg" />
               </div>
             </>
           )}
         </div>

           </ul>
         <button className="mobile-menu-icon"
         onClick={() => setIsMobile(!isMobile)}>

            {isMobile ?  (
              <CloseIcon/>
              ) : (
                <MenuIcon/>
            )}
         </button>


         </div> 
            
            
     </>
   );
 };

export default Nav;





































// import { useSelector } from "react-redux";

// import { Link } from "react-router-dom";



// import { auth } from "../../../firebase/firebase";
// import "../../../styles/Home/Nav/Nav.css";
// import Sell from "../../Investment/Sell";
// import Ping from "../../Notify/Ping"
// import { useToasts } from "react-toast-notifications";

// import { BASE_URL } from "../../../Constants/api_constants";
// import axios from "axios";
// import { useEffect, useState } from "react";

// import NotificationBadge from "react-notification-badge";
// import { Effect } from "react-notification-badge";

// import moment from "moment";
// import CloseIcon from '@mui/icons-material/Close';

// import React from "react";


// import FacebookIcon from "@mui/icons-material/Facebook";

// // import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// // import { Link } from "react-router-dom";
// import MenuIcon from '@mui/icons-material/Menu';
// import InstagramIcon from "@mui/icons-material/Instagram";

// import CallIcon from "@mui/icons-material/Call";



// let Nav = () => {

//   // const reducer = (state,action) => {
//   //   switch()
//   // }

// // var started
//   const [user, setUser] = useState([])
//   let { addToast } = useToasts();
//   let [open, setOpen] = useState(false);
//   let [opens, setOpens] = useState(false);
//   let  [check, setCheck] = useState(false);
//   const [totalseen, setTotalseen] = useState();
//   let [modalItem, setModalItem] = useState();
//   const [counts, setcounts] = useState([])
//   // const [first, setFirst] = useState(true)
//   let [notification, setNotification] = useState([])
//   const [usernotifications, setuserNotifications] = useState([])
//   let [modalItems, setModalItems] = useState();
//   let [orders, setOrders] = useState([]);
//   const [status, setStatus] = useState();

//   const [isMobile, setIsMobile] = useState(false);
//   //var ends
 

//   let state = useSelector((state) => state); // fectching user data from redux store
//   const [isActive, setIsActive] = useState(false);
//   let signoutHandler = async () => {
//     await auth.signOut();  // calling auth singout to logout the user
//   };

//   let handleOpen = (item) => {  // it open the cashout input box
//     setModalItem(item);
//     setOpen(true);              //use state
//   };

//   let handleClose = () => {     // close the
//     setOpen(false);
//   };


  

//   let handleOpens = (e) => {   // it open the notification input box
//     // setModalItems(items);
//     // items.preventDefault();
//     // jh();
//     setOpens(true);
//   };

//   let handleCloses = () => {  
//     setOpens(false);
//   };

//   let fetchuser = async () => { // to fetch the user from the get by ID api
//     // handleClose();
//     // handleCloses();

//     if(state) {
//       let data = await axios.get(
//         `${BASE_URL}/user/${state._id}`
//       );
//       if (data.data && data.data.data) {
//         let response = data.data.data;
//         console.log(response);
//         setOrders(response);
//         setUser(response);
//         // setNotification(response);
//         // setStatus(response);

//         // console.log(orders);
//       }
//     }
//   };

//   // console.log(usernotifications.data._id);


  
  
//   let fetchstatus = async () => {
//     // handleClose();
//     // handleCloses();
//     // console.log(state._id,'this is id')
//     if(state) {
//       const data = await axios.get(
//         `${BASE_URL}/user/user-notification/${state._id}`); // user id 
        
        
//         console.log(data);
//         const notifyid = (data.data.data);
      
//           notifyid.forEach(element => {
//             console.log(element);
//             console.log(element._id);
//           });
   




//       if (data.data && data.data.data) {
//         let response = data.data;
//         console.log(response);
       
//         // setOrders(response);
//         // setUser(response);
//         setuserNotifications(response)
//         setStatus(response);
//       }
//     }
//   };











//   let handleRead = async (event,nID) => {
//     try {
//       let data = await axios.post(BASE_URL + `/user/user-notification/${nID}`, {
//   status:true,
       
    
        
//       });
      
//       if (data.data && data.data.data) {
//         // addToast("Notification has been update", {
//         //   appearance: "success",
//         //   autoDismiss: true,
//         // });
//         fetchstatus();
//       } else {
//         addToast(data.data.message, { appearance: "error", autoDismiss: true });
//       }
//     } catch (e) {
//       console.log(e);
//       addToast("error occurred", { appearance: "error", autoDismiss: true });
//     }
    
//   };



//   useEffect(() => {
//     fetchuser();
//     fetchstatus();
//     // console.log(state._id)

//   }, [state]);
  
//   return (
//     <>
//     <Sell
//       handleClose={handleClose}
//       item={modalItem}
//       walletBalance={orders.wallet_balance} 
//       open={open}
//       fetchuser={fetchuser}
//       />

//       <Ping 
//       handleCloses={handleCloses}
//       // item={modalItems}   
//       open={opens}   
//       fetchuser={fetchuser}
//       counts={counts}
//   />
 
        

// <div className="fcontainer">

//           <div className="f" >   <a id="i" href="#"> <CallIcon />-21324334</a></div>
//         <div className="fitem item1">    <a id="i" href="https://www.facebook.com/">
//           <FacebookIcon
//           />
//         </a></div>
//         <div className="fitem item1">  <a  id="i" href="https://www.instagram.com">
//           <InstagramIcon
         
//           />
//         </a></div>
//         <div className="fitem item3">  <a id="i" href="https://twitter.com/">
     
//      <YouTubeIcon
       
//      />
//    </a></div>
       
//     </div>
   

//       <div className="navbar">
//         {/* <GiHamburgerMenu className="burger"
//           onClick={() => setOpen(!open)} /> */}
//         {/* <div className="logo"> */}
//           <p >
//             <Link id="idea" to={"/"}>Agoi Financial Services</Link>
//             {/* {state.usernotifications.user_id} */}
//             {/* &#8377; {state.wallet_balance} */}
//           </p>         

//         {/* </div> */}


//         {!state || !state.multiFactor || !state.multiFactor.user ? (
//           ""
//         ) : (
//           <>
//             <div className="links v-class-resp h-nav-resp">
//               <Link id="i" to="/stocks">Discover</Link>
//               <Link  id="i" to={"/investment"}>Investments</Link>
              
//               <a id="i" href="#">Resources</a>


//               <div className="dropdown">
               
//                 <div className="cor" >
               
//                   <span id="i" className="material-symbols-outlined">Wallet</span>
//                   <div className="dropdown-content">
//                     <div
//                       onClick={() => handleOpen()}
//                       className="we"
//                     >
//                       Cashout =  &#8377; {orders.wallet_balance}
//                     </div> 
//                     <Link id="i" to={"/wallet"}>Referral History</Link>
                   
                   


//                     <Link id="i" to={"/Cashouthistory"}>Cashout History</Link>
//                   </div>
//                     </div>
//                     {/* {console.log()} */}
//                     </div>
//                        </div>     
       


   
//             <div className="dropdowns">
//             <div className="button" >
                
               
//                   {/* <span  className="button__badge"> {usernotifications.unseenTotal}</span> */}
//                 <NotificationBadge  count={usernotifications.unseenTotal}       effect={Effect.SCALE} />
//                 <span style={{fontSize:"28px"}}  className="material-symbols-outlined">notifications</span>
//                 {/* onClick={() => setCheck(!check)} */}
//                   <div className="dropdown-contents">
      
//            <div className="table-containers">
//              <table className="table">
//             <thead>
//               <tr>
 
//                <div className="investment-item d-flex flex-column">
//              <span style={{ fontSize:"24px" }}>
//              Notifications

//              </span>
        
//            </div>
//               </tr>
//             </thead>

           
      
//             {
//                   usernotifications.
//                         length === 0 ? (
//                     "No New Notification"
//                 ) : (
//                     <tbody>
 
//                         {usernotifications.data.slice().reverse()
//                                 .map((e) => {

//                                     return (
//                                         <>
                                    
//                                       <tr >
                                     
//                                       <div className="we">
                                   

                                    
                                    
                                  
                                     
                                     
//                                      <div onClick={event => handleRead(event,e._id)} ><td onClick={() => {handleOpens(setcounts(e.message) )}}>{e.message}</td> 
//                                       <td >{e.status ? "" :  <div className="dot" ></div> }</td> 
                                     
//                                      </div>
                                     
                                        

//                                                <div className="ee">
//                                             <td style={{fontSize:"9px"}}>{moment(e.createdAt).fromNow()}</td> 
                            
//                                             </div>
//                                                </div>
//                                                </tr>
                          
                                            
//                                         </>
//                                     );
//                                 })}
//                     </tbody>
//                 )}
            
// </table>
 
//       </div>
  
//              </div>
//              </div>

//             </div>

//             </>
//         )} 

        
        

//     <div className="login">
//           {!state || !state.multiFactor || !state.multiFactor.user ? (
//             ""
//           ) : (
//             <>       
//               <div className="wallet">
             
//                 <div className="wallet-container">
//                   <span
//                     style={{ cursor: "pointer" }}
//                     className="material-symbols-outlined"
//                   >
//                     person
//                   </span>{" "}
//               </div>     
//                 </div>              
//               </>
//         )} 


//            {!state || !state.multiFactor || !state.multiFactor.user ? (
//              <Link className="login-link" to="/login">
//                <div className="login-container">Login/Signup</div>
//              </Link>
//            ) : (
//              <>
//                <div className="logout-container" onClick={signoutHandler}>
//                  <img src="logout.svg" />
//                </div>
//              </>
//            )}
//          </div>

//          <button className="mobile-menu-icon">
//             {isMobile ?  (
//               <CloseIcon/>
//               ) : (
//                 <MenuIcon/>
//             )}
//          </button>
         
//          </div> 
            
            
//      </>
//    );
//  };

// export default Nav;



