import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

function Home() {
  const dataFromRedux = useSelector((a) => a);
  console.log(dataFromRedux);
  const dispatch = useDispatch();
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "DATAFROMAPI",
          apiUser: res.data,
        });
      })
      .catch((err) => {});
  };
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <h2>{dataFromRedux.userObj.name}</h2>
      <h2>{dataFromRedux.apiUser ? dataFromRedux.apiUser.name : "--"}</h2>

      <button onClick={() => navigate("profile")}>Nav</button>
      <button onClick={getData}>Get Data</button>
    </>
  );
}

export default Home;
