import React from 'react';
import Card from './Components/Card';
import Cardbeauty from './Components/Cardbeauty';
import Cardcraft from './Components/Cardcraft';
import Cardgov from './Components/Cardgov';
import Cardstiching from './Components/Cardstitching';
import Cardweb from './Components/Cardweb';
import Cardyoga from './Components/Cardyoga';
import Home from './Screens/Home';
import Sign_Up from './Screens/Sign_Up';
import Log_In from './Screens/Log_In';
import Popular_Courses from './Screens/Popular_Courses';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Corrected to BrowserRouter

export default function App() {
  return (
    <Router> {/* Corrected from Routers to Router */}
      <Routes>
        <Route path='/' element={<Sign_Up />} />
        <Route path='/login' element={<Log_In />} />
        <Route path='/home' element={<Home />} />

        <Route path='/signup' element={<Sign_Up />} />
        <Route path='/popular_courses' element={<Popular_Courses />} />
        <Route path='/core_development_related_courses' element={<Card />} />
        <Route path='/govt_job_related_courses' element={<Cardgov />} />
        <Route path='/web_development_related_courses' element={<Cardweb />} />
        <Route path='/yoga_related_courses' element={<Cardyoga />} />
        <Route path='/art_and_craft_related_courses' element={<Cardcraft />} />
        <Route path='/beautician_related_courses' element={<Cardbeauty />} />
        <Route path='/stitching_related_courses' element={<Cardstiching />} />
      </Routes>
    </Router>
  );
}
