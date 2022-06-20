// Come from firebase docs => authentication => password authen..
import { getAuth,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
     onAuthStateChanged 
     } from "firebase/auth";
import app from "./firebaseConfig";
import { getDatabase, ref, set} from "firebase/database";

// Authentication Methods
// global scope me rakhdiya q k bar bar use krni hai
// Come from firebase docs => authentication => password authen..
     
  const auth = getAuth(app);
  const database = getDatabase(app);


     let signUpUser=(obj)=>{
      if(!obj.email){
        return"Email is Required"
      }
      if(!obj.password || obj.password.length > 7){
        return"Password must be grater than 7 Character, password is Required"
      }
      return createUserWithEmailAndPassword(auth, obj.email, obj.password)
    }
     
     let logedInUser=(obj)=>{
       return signInWithEmailAndPassword(auth, obj.email, obj.password)
      
    }

    // let logoutUser=()=>{
    //     signOut(auth).then(() => {
    //         // Sign-out successful.
    //       }).catch((error) => {
    //         // An error happened.
    //       });
    // }
    // let checkAuthUser=()=>{
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //           // User is signed in, see docs for a list of available properties
    //           // https://firebase.google.com/docs/reference/js/firebase.User
    //           const uid = user.uid;
    //           // ...
    //         } else {
    //           // User is signed out
    //           // ...
    //         }
    //       });
    // }

// Database methods

let sendData = (obj,nodeName,id) =>{
 let reference = ref(database,`${nodeName}/ ${id?id:""}`)
 return set(reference,obj);
};

// set(ref(db, 'users/' + userId), {
//   username: name,
//   email: email,
//   profile_picture : imageUrl
// });

export {signUpUser,logedInUser,sendData}
// ,loginUser,logoutUser,checkAuthUser