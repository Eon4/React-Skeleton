import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/mainlayout';
import AboutPage from './Pages/About/about';
import Homepage from './Pages/HomePage/home'; 
import  Blog  from './Pages/BlogPage/blog'; 
import  Gallery  from './Pages/Gallery/gallery'; 
import  Contact  from './Pages/Contact/contact'; 
import  Login  from './Pages/Login/login'; 

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blogPage" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;


