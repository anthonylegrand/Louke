import Logo_svg from "./../img/logo.svg";
import './../css/Navbar.css'

function Navbar(props) {

  return (
    <div className="navbar page-padding flex f-row jc-space-between ai-center">
      <a href="/">
        <img src={Logo_svg} alt='Looke logo' />
      </a>

      <ul className="flex f-row">
        <a href="#Home" className="acctive"><li>Home</li></a>
        <a href="#Service"><li>Service</li></a>
        <a href="#Menu"><li>Menu</li></a>
        <a href="#Application_Mobile"><li>Application Mobile</li></a>
        <a href="#Contact"><li>Contact</li></a>
      </ul>
    </div>
  );
}

export default Navbar;
