import React from 'react';

import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import TweetSection from './components/TweetSection/TweetSection';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <TweetSection />
    </div>
  );
}

export default App;
