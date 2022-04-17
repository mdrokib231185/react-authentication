import { sendPasswordResetEmail } from "firebase/auth";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import Loading from "../Shared/Loading/Loading";
import "./Login.css";
import Social from "./SocialLogin/Social";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { async } from "@firebase/util";

const Login = () => {
  const navigate = useNavigate();
  const location= useLocation()

  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  
   const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const emailRef = useRef('')
  const passwordRef = useRef('')

  if (loading) {
    return <Loading></Loading>
  }

  if (user) {
    navigate(from, { replace: true });
  }
  const SendPasswordReset = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent Email");
    } else {
      toast("Please Enter Your email");
    }
  };

   
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
        <button
          onClick={SendPasswordReset}
          className="btn btn-link text-decoration-none"
        >
          Forget Password
        </button>
      </Form>
      <Social></Social>
      <ToastContainer />
    </div>
  );
};

export default Login;
