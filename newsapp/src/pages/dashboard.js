import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "./mainlayout";
import { useSelector, useDispatch } from "react-redux/es/exports";

function Dashboard() {
  const [user, setUser] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const dataFromReducer = useSelector((a) => a);
  console.log(dataFromReducer);

  const dispatch = useDispatch();

  const update = () => {
    dispatch({
      type: "DATAFROMDASHBOARD",
      userObj: {
        userName: "Abdul Basit",
        age: 18,
        contact: 1357413274,
      },
    });
  };

  useEffect(() => {
    if (location.state && location.state.user) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div>
        <h1>
          {dataFromReducer.userObj ? dataFromReducer.userObj.userName : "--"}
        </h1>
        <button onClick={update}>Update</button>
      </div>
      {/* <MainLayout /> */}
    </>
  );
}
export default Dashboard;
