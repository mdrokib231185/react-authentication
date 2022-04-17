import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Social from "../SocialLogin/Social";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init";
import { sendEmailVerification } from "firebase/auth";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


  const Navigate = useNavigate();

  const handelSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password, name);

    createUserWithEmailAndPassword(email, password);
  };
  if (user) {
    Navigate("/home");
  }

  return (
    <div id="login-form" className="w-50 mx-auto mt-5 color-white">
      <h1 className="text-center" id="form-title">
        Please Register Here
      </h1>
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter Your Name"
            name="name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>

        <Button
          className="w-50  d-block mx-auto text-center"
          variant="primary"
          type="submit"
        >
          Register now
        </Button>
        <p>
          Already Register?
          <Link to={"/login"} className="  text-decoration-none">
            Login Now
          </Link>
        </p>
      </Form>
      <Social></Social>
    </div>
  );
};

export default Register;
