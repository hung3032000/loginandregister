
import "../../App.css";
import "./Login.css";
// Import assets
import video from "/video/small.mp4";
import logo from "../../../public/img/logo.jpg";
import { Link } from "react-router-dom";
// import icon
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
const Login = () => {
  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Tạo và đăng bài đê</h2>
            <p> Login vào để có thể cập nhập blog xàm xí của Hưng</p>
          </div>
          <div className="footerDiv flex">
            <span className="text"> Không có tài khoản? Đăng kí ngay</span>
            <Link to={"/register"}>
              <button className="btn">Sign up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo img"></img>
            <h3>Welcome back!</h3>
          </div>

          <form action="" className="form grid">
            <span className="showMessage">Login status will go here</span>
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
              <span className="btnSpan"> Login</span>
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

export default Login;
