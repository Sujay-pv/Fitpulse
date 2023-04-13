import React from 'react';
import { Routes, Route /*, Redirect*/} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
 import Home from './components/Home';
 import BookingPage from './components/BookingPage';
import Contact from './components/contact-c/Contact';
 import Bookingconfirm from './components/Bookingconfirm';
 import Forgotpassword from './components/Forgotpassword';

function App() {
  return (
    <Routes>
      
              {/* <Route exact path="/" component={<Login />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/login"  element={<Login />} />
              <Route path="/signup" element={<Signup />} />   
              <Route path="/BookingPage" element={<BookingPage />}/>
              <Route path="/Contact" element={<Contact/>}/>
              <Route path="/Bookingconfirm" element={<Bookingconfirm/>}/>
              <Route path='/Forgotpassword' element={<Forgotpassword/>}/>
                 
    </Routes>
  );
}

export default App;
