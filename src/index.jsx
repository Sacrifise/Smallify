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
import store from './store/store.js'
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store = {store}>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/trending" element={<Trend/>}/>
        <Route path="/music" element={<Music/>}/>
        <Route path="/artists" element={<Artists/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    
    </BrowserRouter>
  </Provider>
);

