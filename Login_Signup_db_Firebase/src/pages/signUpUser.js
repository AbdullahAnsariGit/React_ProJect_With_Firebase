import React from 'react'
import { Box } from "@mui/system";
import SMInput from "../config/components/input";
import {useState} from 'react'
import SMButton from '../config/components/button';
import { sendData, signUpUser } from '../config/components/firebase/firebaseMethods';

// Main Function for signup
export default function SignUp() {

  // useState for update users
  const [userObj,setUserObj]=useState({})   

  // usetate for showing loader or progress bar
  const [loader,setLoader]=useState(false)

  // this function for onlick and fetch user object
    let signupUser = () =>{

      // condition if else
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
        signUpUser(userObj).then((res)=>{
          console.log(res)
          sendData(userObj,"users",res.user.uid).then(()=>{
           console.log("Saved")
          }).catch((err)=>{
            console.log(err)
          })

        // if response send loader off or false
          setLoader(false)   
        }).catch((err)=>{
          console.log(err)

          // if user already axist 
          setLoader(false)
          alert("User Already axists")   
        })
      
    }
  return (
    // user interface
    <Box>
        <Box>
            
            <SMInput onChange={(e)=>setUserObj({...userObj,name:e.target.value})} type="text" label="Enter Name"/>
        </Box>
        <Box>
        <SMInput onChange={(e)=>setUserObj({...userObj,email:e.target.value})} type="text" label="Enter Email"/>
        </Box>
        <Box>
        <SMInput  onChange={(e)=>setUserObj({...userObj,password:e.target.value})} type="password" label="Enter Password" />
        </Box>
        <SMButton loading={loader}  onClick={signupUser} label="Sign Up" variant="contained"/>
        
    </Box>
  )
}
