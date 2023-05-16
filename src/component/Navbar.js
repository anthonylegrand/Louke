import Logo from './../img/logo.png'

import './../css/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar page-padding flex f-row jc-space-between ai-center">
      <a href="/">
        <img src={Logo} alt="Looke logo" />
      </a>

      <ul className="flex f-row">
        <li>
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#application-mobile">Application Mobile</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
