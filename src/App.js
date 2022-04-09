
import './App.css';

import Layout from "./components/Layout/Layout";
import LogIn from "./components/LogIn/LogIn";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Services from "./components/Services";

import SignUp from "./components/SignUp/SignUp";
import AuthProvider from "./Context/AuthContext";
import Appointment from "./pages/Appointment/Appointment/Appointment";
import Home from "./pages/Home/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Contact from "./components/Contact";
import Videochat from "./components/Doctors video chat";

import "antd/dist/antd.css";
import "font-awesome/css/font-awesome.min.css";

import Footer from "./components/Footer";

function App() {
  return (



      <Router>
        <AuthProvider>
            <Navbar></Navbar>
        <Layout>
            <Routes>
            
                   <Route path="/" element={<Home />}/>
                    <Route index element={<Home />} />
                    <Route path="/Signup" element={<SignUp />} />
                    <Route path="/Login" element={<LogIn />} />
                    <Route path="/service"
                    element={<PrivateRoute children={<Services/>} />}>
                    </Route>

                    <Route
              path="/contact"
              element={<PrivateRoute children={<Contact />} />}
            ></Route>
            <Route
              path="/doctors"
              element={<PrivateRoute children={<Videochat />} />}>
            </Route>
            
                {/*<Route path="/results"*/}
                {/*/!*       element={<PrivateRoute element={<Results/>} />}>*!/*/}
                {/*</Route>*/}
                <Route path="/Appointment"
                       element={<PrivateRoute children={<Appointment/>} />}>
                </Route>
                   </Routes>

        </Layout>
            <Footer></Footer>
        </AuthProvider>
      </Router>



  );
}

export default App;
