import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import google from '../../../images/google.png'
import Loading from '../../Shared/Loading/Loading';
import './Social.css'

const Social = () => {
const navigate = useNavigate()


      const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (loading) {
    return <Loading></Loading>
  }    
  
  
      if (user) {
            navigate('/home')
      }
      let errorElement
       if (error) {
         errorElement = (
           <div>
             <p className="text-danger">
               Error: {error?.message}
             </p>
           </div>
         );
       }


      return (
        <div>
          <div className="d-flex align-items-center">
            <div style={{ height: "1.5px" }} className="bg-dark w-50"></div>
            <p className="mt-2 px-2">or</p>
            <div style={{ height: "1.5px" }} className="bg-dark w-50"></div>
          </div>
          <p>{errorElement}</p>

          <button
            onClick={() => signInWithGoogle()}
            className="btn-bg w-50 mx-auto d-block text-center"
          >
            <img src={google} alt="" />
            <span className="px-2">Google Sign in</span>
          </button>
        </div>
      );
};

export default Social;