import './Login.css';
// Import assets
import video from '../../../public/video/small.mp4';
import logo from '../../../public/img/logo.jpg';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <>
      <div className='loginPage flex'>
        <div className='container flex'>
            <div className='videoDiv'>
                <video src={video} autoPlay muted loop></video>
                <div className='textDiv'>
                    <h2 className='title'>Create and sell products</h2>
                    <p> test1234</p>
                </div>
                <div className='footerDiv flex'>
                    <span className='text'> Dont have account?</span>
                    <Link to={'/register'}>
                      <button className='btn'>Sign up</button>
                    </Link>
                </div>
            </div>

            <div className='formDiv flex'>
              <div className='headerDiv'>
                <img src={logo} alt='Logo img'></img>
                <h3>Welcome back!</h3>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Login;
