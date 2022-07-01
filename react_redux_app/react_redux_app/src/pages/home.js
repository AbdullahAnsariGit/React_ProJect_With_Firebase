import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";

function Home() {
  const userFromRedux = useSelector((a) => a.user);

  const navigate = useNavigate();
  useEffect(() => {
    if (userFromRedux) {
    } else {
      navigate("login");
    }
  }, []);

  return (
    <>
      <h1>Home</h1>
    </>
  );
}
export default Home;
