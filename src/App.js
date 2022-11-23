import React, { useState } from 'react';
import './css/App.css';

import Navbar from './component/Navbar';
import Home from './component/Home';
import Service from './component/Service';
import Menu from './component/Menu';
import ApplicationMobile from './component/ApplicationMobile';

function App() {
  const [currentPage, setPage] = useState('/')

  return (
    <div>

      <section className='flex f-col' style={{ paddingTop: '2em' }}>
        <Navbar currentPage={currentPage} />

        <Home />
      </section>

      <section className='flex jc-center ai-center colored'>
        
        <Service />

      </section>

      <section className='flex' style={{ height: 'auto', margin: '5em 0' }}>

        <Menu />

      </section>

      <section className='flex jc-center ai-center colored'>

        <ApplicationMobile />

      </section>

    </div>
  );
}

export default App;
