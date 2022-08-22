import { Modal } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { BASE_URL } from "../../Constants/api_constants";
import "../../../src/styles/Investment/Investment.css";

let Ping = ({ handleClose, open}) => {
  let [qty, setQty] = useState(0);
  let state = useSelector((state) => state);
 //  console.log(state);
 const [notification, setNotification] = useState([])
  
  let [max, setMax] = useState(0);
  let { addToast } = useToasts();

  let [amount, setAmount] = useState(0);

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
   

     //  setCamount({Camount,[e.target.type]: e.target.value });

   // if (e.target.value <= max) {
   
    useEffect(() => {
        fetchnotify();
    }, [state]);
   
 


  return (
    <>
       <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
       >
         <div className="sell-card-modal">
           

            {/* { notification.notification.message} */}


            <table className="table">
           
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
                                 
                                         {/* <th scope="row">{index+1}</th> */}
                                         <div
                   
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
</table>

           
           <div className="row">
             <div className="col-12">
            

           </div>
           </div>

         </div>
       </Modal>
    </>
  );
};

export default Ping;