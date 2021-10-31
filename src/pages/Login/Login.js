import React from "react";
import './login.css';
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import github from "../../assets/images/github.png";
import Bounce from "react-reveal/Bounce";
const Login = () => {
  const { AllContexts } = useAuth();
  const history = useHistory();

  const location = useLocation();
  const redirect = location?.state?.from || "/home";

  const {
    getEmail,
    getPassword,
    signInWithEmail,
    error,
    setUser,
    setError,
    signInWithGoogle,
    signInWithGithub,
    signInWithFacebook,
  } = AllContexts;

  return (
    <div className="text-center login-section">
      <Bounce left>
      <div className=" login-backgroud">
      <h2 className=" text-warning">Please Login</h2>
      <p className=" mt-3 text-light">Login with Email & Password</p>
      <p className="text-danger text-center">{error}</p>
      </div>
      </Bounce>
     
      <div className="w-25 mx-auto">
      <Bounce right>
        <Form
          onSubmit={ (e) =>
          {
            e.preventDefault();
            signInWithEmail()
              
              .then((result) =>
              {
                setUser(result.user);
                history.push(redirect);
              })
              .catch((err) => {
                setError(err.message);
              });
          }}
        >
              <Row>
              <Col className="text-start">
              <Form.Label htmlFor="email" visuallyHidden>
                  Your Email Address
                  </Form.Label>
                  <InputGroup className="mb-2">
                  <InputGroup.Text>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </InputGroup.Text>
                <FormControl
                   onBlur={getEmail}
                   type="email"
                   autoComplete="current-email"
                   id="email"
                   placeholder="Enter your email address"
                />
               </InputGroup>
               </Col>
          </Row>
          <Row className="mt-2">
                <Col className="text-start">
                <Form.Label htmlFor="password"  visuallyHidden>
                 Your Password
              </Form.Label>
              <InputGroup className="mb-2">
                 <InputGroup.Text>
                  <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                </InputGroup.Text>
                <FormControl
                  onBlur={getPassword}
                  type="password"
                  autoComplete="current-password"
                  id="password"
                  placeholder="Enter your password"
                />
              </InputGroup>
            </Col>
          </Row>

          <button type="submit" className="btn btn-primary mt-2 w-25">
            Login
          </button>
             </Form>
             </Bounce>
              </div>
           
        <p className="mt-2">
       
        <NavLink className="text-decoration-none" to="/signup">
        <Bounce right cascade>   
          <p className="text-warning">Need an Account? Please Sign up!</p>
          </Bounce>   
        </NavLink>
       
          
        <NavLink className="text-decoration-none" to="/reset">
        <Bounce right cascade> 
         <h6 className="text-danger"> Forget password? Reset!</h6>
         </Bounce>
        </NavLink>
        
         </p>
         
         <p className="mt-3 text-white">Or</p>
         <p className="text-white"> Login with</p>
         <div>
         <button
          onClick={() => {
               signInWithGoogle()
              .then((result) => {
                setUser(result.user);
                history.push(redirect);
              })
              .catch((err) => {
                setError(err.message);
              });
          }}
          className="btn"
        >
          <img src={google} className="bg-white rounded-circle" width="46px" alt="google-icon" />
        </button>
        <button
          onClick={() => {
               signInWithFacebook()
              .then((result) => {
                setUser(result.user);
                history.push(redirect);
                })
                 .catch((err) => {
                setError(err.message);
                });
          }}
          className="btn"
           >
          <img width="50px" className="bg-white rounded-circle" src={facebook} alt="facebook-icon" />
           </button>
           <button
          onClick={() => {
              signInWithGithub()
              .then((result) => {
                setUser(result.user);
                history.push(redirect);
              })
              .catch((err) => {
                setError(err.message);
              });
          }}
          className="btn"
        >
          <img width="55px" className="bg-white rounded-circle" src={github} alt="github-icon" />
          </button>
          </div>
     </div>
         
  );
};

export default Login;