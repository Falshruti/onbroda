import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase/firebase";
import "./tabstyle.css";

const Login = ({ productId }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate(`/home/${productId}`);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="p-2 pt-0 box">
        <div className="login-header">
          <h1>On<span>broda</span></h1>
        </div>
        <p className="pt-0 mt-0 loginP">Unlock onbording scrren with one-step <br></br> by singing up ! </p>

        {error && <Alert variant="danger">{error}</Alert>}
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
        <p style={{color:"whitesmoke"}} className="pt-1">_________________OR___________________</p>
        <Form onSubmit={handleSubmit}>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2 log-submit mb-2">
            <Button type="Submit">
              Log In
            </Button>
          </div>
        </Form>
      </div>
      {/* <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div> */}
    </>
  );
};

export default Login;