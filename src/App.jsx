import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Netflix from './pages/Netflix';
import Signup from './pages/Signup';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/homepage' element={<Homepage/>} />
    <Route exact path='/' element={<Signup/>} />
    <Route exact path='/netflix' element={<Netflix/>} />
    </Routes>
    </BrowserRouter>
  );
}
