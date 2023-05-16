import facebook from './../img/stickers/facebook.png'
import instagram from './../img/stickers/instagram.png'
import twitter from './../img/stickers/twitter.png'

import './../css/Footer.css'

const Footer = () => {
  return (
    <footer className="page-padding">
      <div className="flex jc-center socials-medias">
        <a href="https://www.instagram.com/?hl=fr" target="_blank" rel="noreferrer">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="https://twitter.com/home?lang=fr" target="_blank" rel="noreferrer">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img src={facebook} alt="facebook" />
        </a>
      </div>

      <hr className="separator" />

      <div className="flex jc-center">
        <p>Louke ©2022 , Tout droit réservé.</p>
      </div>
    </footer>
  )
}

export default Footer
