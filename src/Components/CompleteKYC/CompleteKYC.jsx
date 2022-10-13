import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { BASE_URL } from "../../Constants/api_constants";
import { auth } from "../../firebase/firebase";
import { useToasts } from "react-toast-notifications";
// import { Button, Backdrop, CircularProgress } from "@material-ui/core";
import "../../styles/CompleteKYC/CompleteKYC.css";
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/core/styles";
import Loader from "../Loader/Loader";




const useStyles = makeStyles((theme) => ({

  backdrop:{
       color: '#fff', zIndex: theme.zIndex.drawer + 1 },
}));


let CompleteKYC = () => {
  let navigate = useNavigate();
  let firebaseuser = auth.currentUser;
  let [user, setUser] = useState(null);
  let [panCardNumber, setPanCardNumber] = useState("");
  let [accountNumber, setAccounNumber] = useState("");
  let [aadharNumber, setAadharNumber] = useState("");
  let [dematSS, setdematSS] = useState("");
  let [email, setEmail] = useState("");
  let [nomineeName, setNomineeName] = useState("");
  let [passbook, setPassbook] = useState("");
  let [pancard, setPancard] = useState("");
  let [dematAccNo, setDematAccNo] = useState("");
  let { addToast } = useToasts();
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  async function uploadImage(url) {
    if (url) {
      let formData = new FormData();
      formData.append("file", url);
      formData.append("fileName", url.name);
      formData.append("folder", "/AgoiFinancialServices/");

      try {
        let data = await axios.post(
          "https://upload.imagekit.io/api/v1/files/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "Access-Control-Allow-Headers": "*",
            },
            auth: {
              username: "private_tnCtvUMQSwLRVw/OJYQXkgJPdGg=",
              password: "",
            },
          }
        );
        console.log(data);

        addToast("successfully added images", {
          appearance: "success",
          autoDismiss: true,
          autoDismissTimeout: 1500,
        });
        return data.data.url;
     
      } catch (e) {
        console.log(e);
      }
    }
  }

  let addKYCdetails = async () => {
    try {
      let requestBody = {
        mobile_number: user.mobile_number,
        pan_card_number: panCardNumber,
        account_number: accountNumber,
        aadhar_number: aadharNumber,
        nominee_name: nomineeName,
        email_id: email,
        demat_acc_no: dematAccNo,
      };
      if (!user.pan_card_link && pancard) {
        let link = await uploadImage(pancard);
        requestBody.pan_card_link = link;
      }

      if (!user.account_number_link && passbook) {
        let link = await uploadImage(passbook);
        requestBody.account_number_link = link;
      }

      if (!user.demat_screenshot && dematSS) {
        let link = await uploadImage(dematSS);
        requestBody.demat_screenshot = link;
      }
      if (
        requestBody.mobile_number &&
        requestBody.pan_card_number &&
        requestBody.account_number &&
        requestBody.aadhar_number &&
        requestBody.nominee_name &&
        requestBody.email_id &&
        requestBody.account_number_link &&
        requestBody.pan_card_link &&
        requestBody.demat_screenshot &&
        requestBody.demat_acc_no
      ) {
        requestBody.is_completed_kyc = true;
      }

      try {
        let data = await axios.post(BASE_URL + "/user/addkyc", requestBody);
        console.log(data);
        addToast("successfully added data", {
          appearance: "success",
          autoDismiss: true,
          autoDismissTimeout: 1500,
        });
        navigate("/");
      } catch (e) {
        addToast("data couldn't be updated", {
          appearance: "error",
          autoDismiss: true,
          autoDismissTimeout: 1500,
        });
      }
    } catch (e) {}
  };

  let getUser = async () => {
    try {
      let data = await axios.post(BASE_URL + "/user/finduser", {
        mobile_number: auth.currentUser.phoneNumber,
      });
      console.log(data.data.data);
      if (data && data.data && data.data.data) {
        let res = data.data.data;
        if (
          res.mobile_number &&
          res.pan_card_number &&
          res.account_number &&
          res.aadhar_number &&
          res.nominee_name &&
          res.email_id &&
          res.account_number_link &&
          res.pan_card_link &&
          res.demat_screenshot &&
          res.demat_acc_no
        ) {
          if (!res.is_completed_profile)
            try {
              let data = await axios.post(BASE_URL + "/user/addkyc", {
                mobile_number: auth.currentUser.phoneNumber,
                is_completed_kyc: true,
              });
            } catch (e) {
              console.log("couldn't mark flag");
            }
          navigate("/");



        

          
        } else {
          setUser(data.data.data);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

// const handleToggle = () => {
//   setOpen(!open);
//   addKYCdetails();
//   navigate("/");
// }


const handleClose = () => {
  setOpen(false);
  
};

const handleToggle = () => {
  setOpen(!open);
  addKYCdetails();
  // navigate("/complete-kyc");
}



  useEffect(() => {
    if (auth.currentUser) getUser();
  }, []);

  return !auth.currentUser ? (
    <Navigate to="/login"></Navigate>
  ) : !user ? (
    <>
       loading...
       {/* <Loader /> */}
    
    {/* <Backdrop
          className={classes.backdrop}
            open>
            <CircularProgress color="red" />
          </Backdrop> */}
    </>
  ) : (
    <>

      <div className="complete-kyc-title-container">
        <h1>Agoi Financial Services</h1>
      </div>
      <h2>Add KYC Details</h2>
      <div className="complete-kyc-form">
        <div className="row">
          <div className="col-6">
            <label htmlFor="">Enter Pan Card Number*</label>
            <input
              type="text"
              onChange={(e) => {
                setPanCardNumber(e.target.value);
              }}
              disabled={user.pan_card_number ? true : false}
              defaultValue={user.pan_card_number}
              placeholder="Enter pan card number"
            />
          </div>
          <div className="col-6">
            <label htmlFor="">Enter Bank Account Number*</label>
            <input
              type="text"
              onChange={(e) => {
                setAccounNumber(e.target.value);
              }}
              disabled={user.account_number ? true : false}
              defaultValue={user.account_number}
              placeholder="Enter Bank Account number"
            />
          </div>
          <div className="col-6" id="hg">
            
            <label htmlFor="">
              Upload Pan Card
              <span style={{ color: user.pan_card_link ? "red" : "" }}>*</span>
            </label>
            <input
              type="file"
              disabled={user.pan_card_link ? true : false}
              onChange={(e) => {
                setPancard(e.currentTarget.files[0]);
              }}
              placeholder="Enter pan card number"
            />
          </div>
          <div className="col-6" id="hg">
            <label htmlFor="">
              Upload passbook front page/cancelled cheque
              <span style={{ color: user.account_number_link ? "red" : "" }}>
                *
              </span>
            </label>
            <input
              type="file"
              disabled={user.account_number_link ? true : false}
              onChange={(e) => {
                setPassbook(e.currentTarget.files[0]);
              }}
              placeholder="Enter Bank Account number"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label htmlFor="">Enter Aadhar Card Number*</label>
            <input
              type="text"
              onChange={(e) => {
                setAadharNumber(e.currentTarget.value);
              }}
              disabled={user.aadhar_number ? true : false}
              defaultValue={user.aadhar_number}
              placeholder="Enter Aadhar Card Number"
            />
          </div>
          <div className="col-6" id="hg">
            <label htmlFor="">
              Anyone of CML/ DI Slip/ Demat Profile Screenshot
              <span style={{ color: user.demat_screenshot ? "red" : "" }}>
                *
              </span>
            </label>
            <input
              type="file"
              disabled={user.demat_screenshot ? true : false}
              onChange={(e) => {
                setdematSS(e.currentTarget.files[0]);
              }}
              placeholder="Anyone of CML/ DI Slip/ Demat Profile Screenshot"
            />
          </div>
          <div className="col-6">
            <label htmlFor="">Nominee Name*</label>
            <input
              type="text"
              onChange={(e) => {
                setNomineeName(e.target.value);
              }}
              disabled={user.nominee_name ? true : false}
              defaultValue={user.nominee_name}
              placeholder="Nominee Name"
            />
          </div>
          <div className="col-6">
            <label htmlFor="">Email Id*</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              disabled={user.email_id ? true : false}
              defaultValue={user.email_id}
              placeholder="Email Id"
            />
          </div>
          <div className="col-6">
            <label htmlFor="">Mobile Number*</label>
            <input
              type="text"
              disabled
              value={user.mobile_number}
              placeholder="Mobile Number"
            />
          </div>
          <div className="col-6">
            <label htmlFor="">Demat Account No*</label>
            <input
              type="text"
              onChange={(e) => {
                setDematAccNo(e.target.value);
              }}
              value={user.demat_acc_no}
              placeholder="Demat Account No"
            />
          </div>
        </div>
      </div>

      <div className="complete-kyc-btn"
       
       onClick={handleToggle}     
                
  >
        Complete KYC</div>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
     
    



{/* <div
        onClick={async () => {
          await addKYCdetails();
          navigate("/");
          // navigate("/demat");
        }}
        className="complete-kyc-btn"
      >
        Complete KYC
      </div> */}

        
    
 
    </>
  );
};

export default CompleteKYC;
