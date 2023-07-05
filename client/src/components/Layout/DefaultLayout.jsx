import Header from "../Header/Header";
import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

export default function DefaultLayout(){
  const { token } = useSelector(state => state.user);
  if(!token) return <Navigate to="/login" />;
  return(
      <>
        <Header />
        <Outlet />
      </>
  )
}