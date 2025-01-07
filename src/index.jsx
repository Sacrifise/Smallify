import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './Screens/Home.jsx';
import Trend from './Screens/trending';
import Artists from './Screens/artists.jsx';
import Profile from './Screens/profile.jsx';
import Music from './Screens/music.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/trending" element={<Trend/>}/>
      <Route path="/music" element={<Music/>}/>
      <Route path="/artists" element={<Artists/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
