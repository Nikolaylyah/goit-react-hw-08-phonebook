import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { getIsLoggedIn } from "../redux/user/userSelectors";

function HomePage() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/contacts");
    }
    navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default HomePage;
