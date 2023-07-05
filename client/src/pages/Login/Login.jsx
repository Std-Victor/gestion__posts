import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../redux/user/user.api.calls";
import {useEffect} from "react";
import {unsetErrors} from "../../redux/user/user.slice";

export default function Login() {
  const { errors:{login} } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const handleSubmit = e => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const user_data = Object.fromEntries(form_data.entries())
    dispatch(loginUser(user_data))
  }

  useEffect(() => {
    return () => dispatch(unsetErrors());
  },[])
  return (
    <>
      <div className="login-signup-form animated fadeInDown">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h1 className="title">Login into your account</h1>
            {
              login &&
                <div className="alert">
                  <p>{login}</p>
                </div>
            }
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button className="btn btn-block">Login</button>
            <p className="message">
              Not registered? <Link to="/signup">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
