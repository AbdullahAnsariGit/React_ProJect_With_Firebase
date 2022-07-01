import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";

function Login() {
  let user = {};

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = () => {
    user.name = "abc";
    user.age = 18;
    console.log(user);
    dispatch({
      type: "DATAFROMLOGIN",
      userObj: user,
    });
    navigate("/");
  };

  return (
    <>
      <h1>Login</h1>
      <button onClick={loginUser}>Login</button>
    </>
  );
}

export default Login;
