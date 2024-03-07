import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../redux/features/authSlice";
const initialState = {
  password: "",
  email: "",
};
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialState);
  const { loading } = useSelector((state) => ({ ...state.auth }));

  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email) {
      dispatch(login({ user, navigate, toast }));
    }
  };

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='mt-16 mb-48 abt' style={{ width: '600px' }}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Login to your account</h2>
          <MDBInput onChange={(e) => setUser({ ...user, email: e.target.value })}
            wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />
          <MDBInput onChange={(e) => setUser({ ...user, password: e.target.value })}
            wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' />

          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <p className='ml-24'>If have an account <Link to='/register'>Register</Link></p>

          <MDBBtn onClick={handleSubmit} className='mb-4 w-100 gradient-custom-4' size='lg'>  {loading ? "Submitting" : "Login"}</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;