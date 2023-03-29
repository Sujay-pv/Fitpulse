import React from 'react';
import { Routes, Route , Redirect} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
 import Home from './components/Home';
 import BookingPage from './components/BookingPage';

function App() {
  return (
    <Routes>
      
              {/* <Route exact path="/" component={<Login />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/login"  element={<Login />} />
              <Route path="/signup" element={<Signup />} />   
              <Route path="/BookingPage" element={<BookingPage />}/>
                 
    </Routes>
  );
}

export default App;
