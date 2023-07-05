import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

export default function GuestLayout(){
  const { token } = useSelector(state => state.user);
  if (token) return <Navigate to="/" />;
  return(
      <>
        <Outlet />
      </>
  )
}