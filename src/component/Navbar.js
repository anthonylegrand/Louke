import Logo from './../img/logo.png'

import './../css/Navbar.css'

const Navbar = (props) => {
  return (
    <div className="navbar page-padding flex f-row jc-space-between ai-center">
      <a href="/">
        <img src={Logo} alt="Looke logo" />
      </a>

      <ul className="flex f-row">
        <a href="#home" className="active">
          <li>Home</li>
        </a>
        <a href="#service">
          <li>Service</li>
        </a>
        <a href="#menu">
          <li>Menu</li>
        </a>
        <a href="#application-mobile">
          <li>Application Mobile</li>
        </a>
      </ul>
    </div>
  )
}

export default Navbar
