/* eslint-disable no-unused-vars */
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { register } from "../redux/features/authSlice";
import { useEffect, useState } from 'react';
import { host } from '../../utils/APIRoutes';
import axios from 'axios';
import { updateTour } from '../redux/features/productSlice';
const initialState = {
  name: '',
  email: '',
  password: '',
  phone: '',
}
function App() {
  // Get the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  console.log(id);
  const [user, setUser1] = useState(null);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch all users
        const usersResponse = await axios.get(`${host}/users/all-users`);

        // Filter the user by ID
        const filteredUser = usersResponse.data.find(user => user._id === id);

        // Set the user state
        setUser1(filteredUser);

        // Filter and set the ads excluding the user with the given ID
        const filteredAds = usersResponse.data.filter(user => user._id !== id);
        const result = filteredAds.slice(0, 14); // Limit to 14 ads
        setAds(result);

      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id]);

  // console.log("Ads:", ads);

  const [form, setForm] = useState([])
  console.log(form);
  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      refer: user?.refer + 50,
    }));
  }, []);

  const handleSubmit1 = (e) => {
    e?.preventDefault();
    if (id) {
      dispatch(updateTour({ form, navigate, toast, id: id }));
    }
  };
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const [user1, setUser] = useState(initialState);
  // console.log(user1);
  const handleSubmit = (e) => {
    e?.preventDefault();
    if (user1.name);
    dispatch(register({ user1, navigate, toast }))
  }


  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='mt-12 mb-10 abt' style={{ width: '600px' }}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput wrapperClass='mb-4' label='Your Name' onChange={(e) => setUser({ ...user1, name: e.target.value })} size='lg' id='form1' type='text' />
          <MDBInput wrapperClass='mb-4' label='Your Email' onChange={(e) => setUser({ ...user1, email: e.target.value })} size='lg' id='form2' type='email' />
          <MDBInput wrapperClass='mb-4' label='Your phon number' onChange={(e) => setUser({ ...user1, phone: e.target.value })} size='lg' id='form2' type='number' />
          <MDBInput wrapperClass='mb-4' label='Password' onChange={(e) => setUser({ ...user1, password: e.target.value })} size='lg' id='form3' type='password' />
          <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' />
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <p className='ml-24'>If have an account <Link to='/login'>Login</Link></p>

          <MDBBtn onClick={() => {
            handleSubmit();
            handleSubmit1();
          }}
            className='mb-4 w-100 gradient-custom-4' size='lg'>  {loading ? "Submitting" : "Register"}</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default App;