import { useState } from "react";
import { Link } from "react-router-dom";
import SMButton from "../config/components/button";
import SMInput from "../config/components/Input";
import { signuUp } from "../config/firebase/firebasemethod";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [loader, setLoader] = useState(false);

  const SignupUser = () => {
    const obj = {
      email,
      password,
      userName,
    };
    if (!email) {
      alert("enter Email");
      return;
    }
    if (!password) {
      alert("enter Password");
      return;
    }
    setLoader(true);
    signuUp(obj)
      .then((res) => {
        setLoader(false);
        alert(res);
      })
      .catch((err) => {
        setLoader(false);
        alert(err);
      });
  };
  return (
    <>
      <h1>Signup</h1>
      <div>
        <SMInput
          label="User Name"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <SMInput
          label="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <SMInput
          label="Enter Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        already have an account?<Link to="/login">Login</Link>
      </div>
      <div>
        <SMButton loading={loader} label="Signup" onClick={SignupUser} />
      </div>
    </>
  );
}
export default Signup;
