import React from 'react';

import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';

import Discover from './components/Discover';
import Forum from './components/Forum';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/discover' element={<Discover />} />
          <Route path='/forum' element={<Forum />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
