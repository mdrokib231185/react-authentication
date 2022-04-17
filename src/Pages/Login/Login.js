import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import "./Login.css";
import Social from "./SocialLogin/Social";

const Login = () => {
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const emailRef = useRef('')
  const passwordRef = useRef('')

  if (user) {
    navigate('/home')
  }
   

  const handelSubmit  = (event) => {
    event.preventDefault()

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password)

    signInWithEmailAndPassword(email, password)
  }

  const registerNavigate = (event) => {
    navigate("/register");
  };
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }
  return (
    <div id="login-form" className="w-50 mx-auto mt-5 color-white">
      <h1 className="text-center" id="form-title">
        Please login
      </h1>
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" required>
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
          <p>{errorElement}</p>
        </Form.Group>

        <Button
          className="w-50  d-block mx-auto text-center"
          variant="primary"
          type="submit"
        >
          Login
        </Button>
        <p>
          New to Dentel Service?
          <Link
            to={"/register"}
            className="text-primary text-decoration-none"
            onClick={registerNavigate}
          >
            Register Now
          </Link>
        </p>
        <button className="btn btn-link text-decoration-none">
          Forget Password
        </button>
      </Form>
      <Social></Social>
    </div>
  );
};

export default Login;
