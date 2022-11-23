import React, { useState } from 'react';
import './css/App.css';

import Navbar from './component/Navbar';

function App() {
  const [currentPage, setPage] = useState('/')

  return (
    <div className="App">
      <Navbar currentPage={currentPage} />
    </div>
  );
}

export default App;
