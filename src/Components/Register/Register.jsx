import './Register.css';
import "../../App.css";
// Import assets
import video from "../../../public/video/small.mp4";
import logo from "../../../public/img/logo.jpg";
import { Link } from "react-router-dom";
// import icon
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from 'react-icons/md';
const Register = () => { 
  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Nơi đăng kí tài khoản</h2>
            <p> Đăng kí đê để còn đăng bài</p>
          </div>
          <div className="footerDiv flex">
            <span className="text"> Có tài khoản rồi?</span>
            <Link to={"/"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo img"></img>
            <h3>Let us know you!</h3>
          </div>

          <form action="" className="form grid">
          
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon"></MdMarkEmailRead>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter Email"
                ></input>
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="username">UserName</label>
              <div className="input flex">
                <FaUserShield className="icon"></FaUserShield>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter UserName"
                ></input>
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon"></BsFillShieldLockFill>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                ></input>
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span> Register</span>
              <AiOutlineSwapRight className="icon"></AiOutlineSwapRight>
            </button>
            <span className="forgotPassword">
              Quên mật khẩu? <a href=""> Click here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;