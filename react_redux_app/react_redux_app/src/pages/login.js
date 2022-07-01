import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SMButton from "../config/components/button";
import SMInput from "../config/components/Input";
import { login } from "../config/firebase/firebasemethod";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = () => {
    const obj = {
      email,
      password,
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
    login(obj)
      .then((res) => {
        alert(res);
        console.log(res);
        dispatch({
          type: "DATAFROMLOGIN",
          payload: res,
        });
        navigate("/");
        setLoader(false);
      })
      .catch((err) => {
        alert(err);
        setLoader(false);
      });
  };
  return (
    <>
      <h1>Login</h1>
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
        If You are New <Link to="/signup">Create Account</Link>
      </div>
      <div>
        <SMButton label="Login" onClick={loginUser} />
      </div>
    </>
  );
}
export default Login;
