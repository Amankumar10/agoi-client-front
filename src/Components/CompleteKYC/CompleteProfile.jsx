import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  } from "@mui/material";

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
// import Button from '@mui/material/Button';
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { useToasts } from "react-toast-notifications";
import { BASE_URL } from "../../Constants/api_constants";
import { auth } from "../../firebase/firebase";
import "../../styles/Stocks/CompleteProfileDialog.css";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({

  backdrop:{
       color: '#fff', zIndex: theme.zIndex.drawer + 1 },
}));





let CompleteProfile = () => {
  let [user, setUser] = useState();
  console.log(auth.currentUser);
  let [name, setName] = useState("");
  let [gender, setGender] = useState("Male");
  let [incomeRange, setIncomeRange] = useState("<10lpa");
  let [company, setCompany] = useState("");
  let [dob, setDob] = useState("");
  let [city, setCity] = useState("");
  let [desig, setDesig] = useState("");
  let navigate = useNavigate();
  let { addToast } = useToasts();

  const [open, setOpen] = useState(false);

  // const { loading} = useSelector(
  //   (state) => state);
  
  const classes = useStyles();
  
  
  
  
  
  let addComleteProfile = async () => {
    

    try {
      let requestBody = {
        mobile_number: auth.currentUser.phoneNumber,
        gender: gender,
        income_range: incomeRange,
        company_name: company,
        designation: desig,
        city: city,
        name: name,
        dob: dob,
      };


      let data = await axios.post(
        BASE_URL + "/user/complete-profile",
        requestBody

      );


 

      console.log(data);
      addToast("successfully added data", {
        appearance: "success",
        autoDismiss: true,
        autoDismissTimeout: 1500,
      });
      navigate("/complete-kyc");
    } catch (e) {
      addToast("data couldn't be updated", {
        appearance: "error",
        autoDismiss: true,
        autoDismissTimeout: 1500,
      });
    }
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
          res.gender &&
          res.income_range &&
          res.company_name &&
          res.dob &&
          res.city &&
          res.designation &&
          res.name
        ) {
          if (!res.is_completed_profile)
            try {
              let data = await axios.post(BASE_URL + "/user/complete-profile", {
                mobile_number: auth.currentUser.phoneNumber,
                is_completed_profile: true,
              });
            } catch (e) {
              console.log("couldn't mark flag");
            }
          navigate("/complete-kyc");
      
        } else {
          setUser(data.data.data);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  
  const handleClose = () => {
    setOpen(false);
    
  };



  const handleToggle = () => {
    setOpen(!open);
    addComleteProfile();
    // navigate("/complete-kyc");
  }
 

  useEffect(() => {
    if (auth.currentUser) getUser();

  }, []);








  

  return !auth.currentUser ? (
    <Navigate to="/login" state={{ route: "/complete-profile" }}></Navigate>
  ) : !user ? (
    <>
         {/* <Loader /> */}
loading...


{/* 
  <Backdrop
      className={classes.backdrop}
        open
    
      >
        <CircularProgress color="red" />
      </Backdrop> */}
  
  
  
    </>
  ) : (
    <>
      <div className="complete-kyc-title-container">
        <h1>Agoi Financial Services</h1>
      </div>
      <div className="complete-profile-modal">
        <h1>Complete Profile</h1>
        <div className="row">
          <div className="rform col-6">
            <div className="input-field">
              <label htmlFor="">Name*</label>
              <input
                type="text"
                defaultValue={user.name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Enter Your Name"
              />
            </div>
            <div className="input-field">
              <InputLabel id="demo-simple-select-label">Gender*</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={user.gender}
                label="Gender"
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </div>
            <div className="input-field">
              <label htmlFor="">Date of Birth*</label>
              <input
                type="date"
                defaultValue={user.dob ? user.dob.substr(0, 10) : ""}
                onChange={(e) => {
                  setDob(e.target.value);
                }}
                placeholder="dd/mm/yyyy"
              />
            </div>
            <div className="input-field">
              <label htmlFor="">City*</label>
              <input
                type="text"
                defaultValue={user.city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Input Your City"
              />
            </div>
            <div className="input-field">
              <label htmlFor="">Designation*</label>
              <input
                type="text"
                defaultValue={user.designation}
                onChange={(e) => {
                  setDesig(e.target.value);
                }}
                placeholder="Enter Designation"
              />
            </div>
          </div>
          <div className="lform col-6">
            <div className="input-field">
              <label htmlFor="">Company Name*</label>
              <input
                type="text"
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
                placeholder="Enter Company name"
              />
            </div>
            <div className="input-field">
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Income Range(INR)*
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={user.income_range}
                  name="radio-buttons-group"
                  onChange={(e) => {
                    setIncomeRange(e.target.value);
                  }}
                >
                  <FormControlLabel
                    value="<10lpa"
                    control={<Radio />}
                    label="Below 10 lakhs"
                  />
                  <FormControlLabel
                    value=">10<50"
                    control={<Radio />}
                    label="10 lakhs to 50 lakhs"
                  />
                  <FormControlLabel
                    value=">50<1cr"
                    control={<Radio />}
                    label="50 lakhs to 1 crore"
                  />
                  <FormControlLabel
                    value=">1cr"
                    control={<Radio />}
                    label="Above 1 crore"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        {/* <div

          onClick={async () => {
      
            
            
            await addComleteProfile();
            
            navigate("/complete-kyc");
          }}
          className="complete-kyc-btn"
        >
          Complete Profile
        </div>

         */}
        


     

      <div className="complete-kyc-btn"
       
       onClick={handleToggle}     
                
  >
        Complete Profile</div>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
     
      </div> 





{/*    
              </Fragment>
      )}
    </Fragment> */}
    </>
  );
};

export default CompleteProfile;




        {/* <div>

      <div className="complete-kyc-btn"
       
       onClick={handleToggle}>
        Complete KYC</div>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
    
      >

    
        <CircularProgress color="inherit" />
      </Backdrop>
     
      </div> */}