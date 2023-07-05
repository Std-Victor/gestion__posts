import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signUpUser} from "../../redux/user/user.api.calls";
import {useEffect} from "react";
import {unsetErrors} from "../../redux/user/user.slice";

export default function SignUp(){
  const {errors:{signup}} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const user_data = Object.fromEntries(form_data.entries());
    dispatch(signUpUser(user_data))
  }

  useEffect(() => {
    return () => dispatch(unsetErrors());
  },[])
  return(
      <>
        <div className="login-signup-form animated fadeInDown">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <h1 className="title">Signup for Free</h1>
              {signup &&
                  <div className="alert">
                    {Object.keys(signup).map(key => (
                        <p key={key}>{signup[key][0]}</p>
                    ))}
                  </div>
              }
              <input name="name" type="text" placeholder="Full Name"/>
              <input name="email" type="email" placeholder="Email Address"/>
              <input name="password" type="password" placeholder="Password"/>
              <input name="password_confirmation" type="password" placeholder="Repeat Password"/>
              <button className="btn btn-block">Signup</button>
              <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
            </form>
          </div>
        </div>
      </>
  )
}