import React, { useState } from 'react'
import SMButton from '../config/components/button';
import SMInput from "../config/components/input";
import { Box } from "@mui/system";
import { Typography } from '@mui/material';
import {  logedInUser} from '../config/components/firebase/firebaseMethods';
import { useNavigate } from 'react-router-dom';



export default function LoginUser() {
    const [userObj, setUserObj] = useState({})
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate();


    const loginOnUser = () => {
      if(!userObj.email){
        alert("Email is Required")
        return;
      }
      if(!userObj.password || userObj.password.length < 7){
        alert("Password must be grater than 7 Character, password is Required")
        return;
      }
      
      // if condition are true then loader true
           setLoader(true)
           console.log(userObj);
           logedInUser(userObj).then((success)=>{
            setLoader(false)   
            console.log("Successfully Login")

            navigate(`/${success.user.uid}`)
           }).catch((err)=>{
            setLoader(false)   
            console.log(err)
           })
    }
  return (
<Box>
    <Typography>Login</Typography>
    <Box>
    <SMInput onChange={(e)=>setUserObj({...userObj,email:e.target.value})} type="text" label="Enter Email"/>
    </Box>
    <Box>
    <SMInput  onChange={(e)=>setUserObj({...userObj,password:e.target.value})} type="password" label="Enter Password" />
    </Box>
    <SMButton loading={loader} onClick={loginOnUser} label="login" variant="contained"/>
    
</Box>
  )
}
