// App.js
import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Refferal from './pages/Refferal';
import Register from './pages/Register';
import Login from './pages/Login';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { setUser } from "./redux/features/authSlice";

const Home = React.lazy(() => import('./pages/Home'));
const Account = React.lazy(() => import('./pages/Accounts'));

function App() {
  const dispatch = useDispatch();
  const users = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(users));
  }, []);
  // const { user } = useSelector((state) => ({ ...state.auth }));

  return (
    <div className="app-wrapper">
      <ToastContainer />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/account' element={<Account />} />
            <Route path='/refferal' element={<Refferal />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <footer>
            <Footer />
          </footer>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
