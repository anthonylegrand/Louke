import React from 'react'
import ScrollToTopButton from './ScrollToTopButton'
import apple from './../img/stickers/apple.png'
import google from './../img/stickers/google.png'
import phone from './../img/stickers/phone.png'
import './../css/ApplicationMobile.css'

const ApplicationMobile = () => {
  return (
    <div id="application-mobile" className="flex f-row ai-center jc-space-between page-padding">
      <img className="phone-img" src={phone} alt="Mobile phone" />

      <div>
        <h3>Télécharger l’application.</h3>
        <p>Pour géolocaliser en temps réel votre foodtrucks proche de vous.</p>
        <p>Régalez-vous avec Louke !</p>
        <div className="flex f-row test-img-div">
          <div className="google-store">
            <a href="https://play.google.com/store/apps" target="_blank" rel="noreferrer">
              <img className="img-store" src={google} alt="Google Play Store" />
            </a>
          </div>
          <div className="apple-store">
            <a href="https://www.apple.com/fr/app-store/" target="_blank" rel="noreferrer">
              <img className="img-store" src={apple} alt="Apple App Store" />
            </a>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  )
}

export default ApplicationMobile
