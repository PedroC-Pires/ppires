import './App.css'
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}