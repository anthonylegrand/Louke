import React from 'react'
import './css/App.css'

import Navbar from './component/Navbar'
import Home from './component/Home'
import Service from './component/Service'
import Menu from './component/Menu'
import ApplicationMobile from './component/ApplicationMobile'
import Footer from './component/Footer'

function App() {
  return (
    <div>
      <section id="top" className="flex f-col" style={{ paddingTop: '2em' }}>
        <Navbar currentPage="/" />

        <Home />
      </section>

      <section className="flex jc-center ai-center colored">
        <Service />
      </section>

      <section className="flex" style={{ height: 'auto', margin: '5em 0' }}>
        <Menu />
      </section>

      <section className="flex jc-center ai-center colored">
        <ApplicationMobile />
      </section>

      <Footer />
    </div>
  )
}

export default App
