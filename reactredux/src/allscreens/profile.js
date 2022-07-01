import { useSelector } from "react-redux/es/hooks/useSelector";
import { getDataFromFirebase } from "../config/firebase/firebasemethod";

function Profile() {
  const dataFromRedux = useSelector((a) => a);
  console.log(dataFromRedux);
  const getData = async () => {
    let res = await getDataFromFirebase("users", "-N4CwJxLjF14oiLfVusP");
    console.log(res);
  };
  return (
    <>
      <h1>Profile</h1>
      <h2>{dataFromRedux.userObj.name}</h2>
      <button onClick={getData}> Firebase Data</button>
    </>
  );
}

export default Profile;
