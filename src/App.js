import React from 'react';
import Navbar from './components/Nabvar/Navbar'
import './App.scss';
import TourList from './components/TourList/index';
function App() {
  return (
    <main>
      <Navbar/>
      <TourList/>
    </main>
  );
}

export default App;
