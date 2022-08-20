import React from 'react'
import Nav from "../Home/Nav/Nav";
import "../../Components/Notify/Notify.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../Constants/api_constants";
import { useEffect, useState } from "react";
import moment from "moment";
import userEvent from "@testing-library/user-event";
import Ping from '../Home/Nav/Ping';



const Notify = () => {

    let navigate = useNavigate();
  let [modalItems, setModalItems] = useState();

    let state = useSelector((state) => state);
    let [open, setOpen] = useState(false);
    let [modalItem, setModalItem] = useState();
    // let [order, setOrder] = useState([]);
    // const [cashout, setCashout] = useState([])
    const [notification, setNotification] = useState([])
    const [user, setUser] = useState([])

    let handleOpens = (item) => {
        setModalItems(item);
        setOpen(true);
      };

      
  let handleClose = () => {
    setOpen(false);
  };
      
      
    let fetchnotify = async () => {
        // handleClose();
        if (state) {
            let data = await axios.get(
                `${BASE_URL}/user/${state._id}`
            );

            if (data && data.data && data.data.data) {
                let response = data.data.data;
                console.log(response);
                setNotification(response);
            }
        }
    };


    useEffect(() => {
        fetchnotify();
    }, [state]);


    
    return (
<>
        <Ping
        handleClose={handleClose}
        item={modalItems}   
        open={open}   
        // fetchnotify={fetchnotify}
    />
         <div className="investment-table">
        <div className="table-containers">
          <table className="table">
            <thead>
              <tr>
                {/* <th scope="row">Notify</th> */}
               {/* {notification.notification.message} */}
              
              </tr>
            </thead>

            {
                notification
                    .length &&
                    notification
                        .length === 0 ? (
                    ""
                ) : (
                    <tbody>
                        {
                            notification.notification
                            &&
                            notification.notification
                                .map((e, index) => {

                                    return (
                                        <>
                                        {/* <div className="hello"> */}
                                            {/* <tr key={index}> */}
                                            <tr>
                                 
                                         <th scope="row">{index+1}</th>
                                         <div
                      onClick={() => handleOpens()}
                      className="we"
                    >
                                               <td>{e.message}</td> 
                                               {/* </div> */}
                                       </div>
                                            </tr>
                          
                                            
                                        </>
                                    );
                                })}
                    </tbody>
                )}

</table>
                
                   
              
                </div>
            //   </div>

      

</>


    )
}

export default Notify