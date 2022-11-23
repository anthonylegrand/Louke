import React, { useState } from 'react';
import './css/App.css';

import Navbar from './component/Navbar';
import Home from './component/Home';

function App() {
  const [currentPage, setPage] = useState('/')

  return (
    <div>

      <section className='flex f-col' style={{ paddingTop: '2em' }}>
        <Navbar currentPage={currentPage} />

        <Home />
      </section>

    </div>
  );
}

export default App;
