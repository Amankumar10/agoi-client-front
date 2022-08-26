// import Nav from "../Home/Nav/Nav";
// import "../../styles/Investment/Investment.css";
// import { useNavigate } from "react-router";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import { BASE_URL } from "../../Constants/api_constants";
// import { useEffect, useState } from "react";
// import generatePDF from "./repGenerator";
// import SellStocksModal from "./SellStocksModal";





// let Investment = () => {
//   let navigate = useNavigate();
//   let state = useSelector((state) => state);
//   let [open, setOpen] = useState(false);
//   let [modalItem, setModalItem] = useState();
//   let [orders, setOrders] = useState([]);

//   let fetchPayemnts = async () => {
//     handleClose();
//     if (state) {
//       let data = await axios.get(
//         `${BASE_URL}/user/get-user-orders/${state._id}`
//       );
//       if (data.data && data.data.data) {
//         let response = data.data.data;
//         console.log(response);
//         setOrders(response);
//       }
//     }
//   };
//   let handleOpen = (item) => {
//     setModalItem(item);
//     setOpen(true);
//   };

//   let handleClose = () => {
//     setOpen(false);
//   };

//   useEffect(() => {
//     fetchPayemnts();
//   }, [state]);
//   return (
//     <>
//       <Nav />
//       <SellStocksModal
//         handleClose={handleClose}
//         item={modalItem}
//         open={open}
//         fetchPayemnts={fetchPayemnts}
//       />
    

//       <div className="investment-heading">
//         <h3>Browse Investments</h3>
//         <div className="investment-chart d-flex justify-content-around align-items-center">
//           <div className="investment-item d-flex flex-column">
//             <span style={{ color: "var(--color-light-grey)" }}>
//               Total Investment
//             </span>
//             <p style={{ color: "var(--white-font)" }}>{orders.length}</p>
//           </div>
      
//         </div>
//       </div>
//       <div className="investment-table">
//         <div className="table-container">
//           <table className="table">
//             <thead>
//               <tr>
//                 <th scope="col">Company Name</th>
//                 <th scope="col">No. of Shares</th>
//                 <th className="col">Current Holding</th>
//                 <th scope="col">Avg. Cost</th>
//                 <th scope="col">Current Value</th>
//                 {/* <th scope="col">{"P&L"}</th> */}
//                 <th scope="col">Net Chg.</th>
//                 <th scope="col">Sell Stocks</th>
//                 <th>Export Bill</th>
//               </tr>
//             </thead>
//             {orders.length === 0 ? (
//               ""
//             ) : (
//               <tbody>
//                 {orders.map((e, idx) => {
//                   return (
//                     <>
//                       <tr key={idx + 6}>
//                         <td>{e.stock_id.stock_name}</td>
//                         <td>{e.no_of_stocks}</td>
//                         <td>{e.left_shares}</td>
//                         <td>{e.order_amount / e.no_of_lots}</td>
//                         <td>{e.stock_id.price_per_lot}</td>
//                         <td>
//                           {e.stock_id.price_per_lot /
//                             (e.order_amount / e.no_of_lots)}
//                         </td>
//                         <td>
//                           <div
//                             onClick={() => handleOpen(e)}
//                             className="export-btn"
//                           >
//                             Sell Stocks
//                           </div>
//                         </td>
//                         <td>
//                           <div
//                             onClick={() => generatePDF(e)}
//                             className="export-btn"
//                           >
//                             Download
//                           </div>
//                         </td>
//                       </tr>
//                     </>
//                   );
//                 })}
//               </tbody>
//             )}
//           </table>
//           {orders.length === 0 ? (
//             <div className="invest-btn d-flex flex-column justify-content-center align-items-center">
//               <p>You do not have any holdings yet</p>
//               <button
//                 onClick={() => navigate("/stocks")}
//                 className="invest-now-btn d-flex justify-content-center align-items-center"
//               >
//                 Invest Now
//               </button>
//             </div>
//           ) : (
//             ""
//           )}
//         </div>
//       </div>
//       <div className="investment-footer">
           
           


       
      
//         <p>Please read these important legal notices and disclosures</p>
//         <br /> None of the information displayed on or downloadable from
//         www.joinAgoi Financial Services.com (the website") represents an offer
//         to buy or sell or a solicitation of an offer to buy or sell any
//         security, nor does it constitute an offer to provide investment advice
//         or service. Registered representatives of Agoi Financial Services do not
//         (1) Advise any member on the merits or advisability of a particular
//         investment or transaction, or (2) Assist in the determination of fair
//         value of any security or investment, or (3) Provide legal, tax, or
//         transactional advisory services.
//       </div>
//     </>
//   );
// };

// export default Investment;










import React from 'react'
import Nav from "../Home/Nav/Nav";
import "../../styles/Investment/Investment.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../Constants/api_constants";
import { useEffect, useState } from "react";
import generatePDF from "./repGenerator";
import SellStocksModal from "./SellStocksModal";
import { lightGreen } from '@mui/material/colors';


const Investement = () => {

  
   let navigate = useNavigate();
   let state = useSelector((state) => state);
   let [open, setOpen] = useState(false);
   let [modalItem, setModalItem] = useState();
   let [orders, setOrders] = useState([]);
   let fetchPayemnts = async () => {
     handleClose();
     if (state) {
       let data = await axios.get(
         `${BASE_URL}/user/get-user-orders/${state._id}`
       );
       if (data.data && data.data.data) {
         let response = data.data.data;
         console.log(response);
         setOrders(response);
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
  //  console.log(orders.length);
   useEffect(() => {
     fetchPayemnts();
   }, [state]);
   return (
     <>
       <Nav />
       <SellStocksModal
         handleClose={handleClose}
         item={modalItem}
         open={open}
         fetchPayemnts={fetchPayemnts}
       />
 
       <div className="investment-heading">
         <h3>Browse Investments</h3>
         <div className="investment-chart d-flex justify-content-around align-items-center">
           <div className="investment-item d-flex flex-column">
             <span style={{ color: "var(--color-light-grey)" }}>
               Total Investment
             </span>
             <p style={{ color: "var(--white-font)" }}>{orders.length}</p>
           </div>
   
         </div>
       </div>
       <div className="investment-table">
         <div className="table-container">
           <table className="table">
             <thead>
               <tr>
                 <th scope="col">Company Name</th>
                 <th scope="col">No. of Shares</th>
                 <th className="col">Current Holding</th>
                 <th scope="col">Avg. Cost</th>
                 <th scope="col">Current Value</th>
                 {/* <th scope="col">{"P&L"}</th> */}
                 <th scope="col">Net Chg.</th>
                 <th scope="col">Sell Stocks</th>
                 <th>Export Bill</th>
               </tr>
             </thead>
             {orders.length === 0 ? (
               ""
             ) : (
               <tbody>
                 {orders.map((e, idx) => {
                   return (
                     <>
                       <tr key={idx + 6}>
                         <td>{e.stock_id.stock_name}</td>
                         <td>{e.no_of_stocks}</td>
                         <td>{e.left_shares}</td>
                         <td>{e.order_amount / e.no_of_lots}</td>
                         <td>{e.stock_id.price_per_lot}</td>
                         <td>
                           {e.stock_id.price_per_lot /
                             (e.order_amount / e.no_of_lots)}
                         </td>
                         <td>
                           <div
                             onClick={() => handleOpen(e)}
                             className="export-btn"
                           >
                             Sell Stocks
                           </div>
                         </td>
                         <td>
                           <div
                             onClick={() => generatePDF(e)}
                             className="export-btn"
                           >
                             Download
                           </div>
                         </td>
                       </tr>
                     </>
                   );
                 })}
               </tbody>
             )}
           </table>
           {orders.length === 0 ? (
             <div className="invest-btn d-flex flex-column justify-content-center align-items-center">
               <p>You do not have any holdings yet</p>
               <button
                 onClick={() => navigate("/stocks")}
                 className="invest-now-btn d-flex justify-content-center align-items-center"
               >
                 Invest Now
               </button>
             </div>
           ) : (
             ""
           )}
         </div>
       </div>
       <div className="investment-footer">
        
        
    
   
         <p>Please read these important legal notices and disclosures</p>
         <br /> None of the information displayed on or downloadable from
         www.joinAgoi Financial Services.com (the website") represents an offer
         to buy or sell or a solicitation of an offer to buy or sell any
         security, nor does it constitute an offer to provide investment advice
         or service. Registered representatives of Agoi Financial Services do not
         (1) Advise any member on the merits or advisability of a particular
         investment or transaction, or (2) Assist in the determination of fair
         value of any security or investment, or (3) Provide legal, tax, or
         transactional advisory services.
       </div>
     </>
   );
 };
 export default Investement;


