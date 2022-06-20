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
        <Box sx={{ padding: 1}}>
          <SMInput onChange={(e)=>setUserObj({...userObj,name:e.target.value})} type="text" label="Enter Name"/>
            <SMInput onChange={(e)=>setUserObj({...userObj,fatherName:e.target.value})} type="text" label="Enter Father Name"/>
        </Box>

        <Box sx={{ padding: 1}}>
        <SMInput  onChange={(e)=>setUserObj({...userObj,cnic:e.target.value})} type="text" label="Enter CNIC" />
        <SMInput onChange={(e)=>setUserObj({...userObj,contact:e.target.value})} type="text" label="Enter Contact"/>
        </Box>

        <Box sx={{ padding: 1}}>
        <SMInput onChange={(e)=>setUserObj({...userObj,age:e.target.value})} type="text" label="Enter Age"/>
        <SMInput onChange={(e)=>setUserObj({...userObj,dateOFBirth:e.target.value})} type="text" label="Enter Date OF Birth"/>
        </Box>

        <Box sx={{ padding: 1}}>
        <SMInput onChange={(e)=>setUserObj({...userObj,class:e.target.value})} type="text" label="Enter Class"/>
        <SMInput onChange={(e)=>setUserObj({...userObj,section:e.target.value})} type="text" label="Enter Section"/>
        </Box>

        <Box sx={{ padding: 1}}>
        <SMInput onChange={(e)=>setUserObj({...userObj,id:e.target.value})} type="text" label="Enter ID"/>
        <SMInput onChange={(e)=>setUserObj({...userObj,email:e.target.value})} type="text" label="Enter Email"/>
        </Box>

        <Box sx={{ padding: 1}}>
        <SMInput onChange={(e)=>setUserObj({...userObj,password:e.target.value})} type="password" label="Enter Password"/>
        </Box>
        <SMButton loading={loader}  onClick={signupUser} label="Add Student" variant="contained"/>
        
    </Box>
  )
}
