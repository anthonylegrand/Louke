import './../css/ApplicationMobile.css'
import React from 'react'
import phone from './../img/stickers/phone.png'
import google from './../img/stickers/google.png'
import apple from './../img/stickers/apple.png'

// Components
import ScrollToTopButton from './ScrollToTopButton'

function ApplicationMobile() {
  return (
    <div id="Application_Mobile" className="flex f-row ai-center jc-space-between page-padding">
      <img className="phone-img" src={phone} alt="Phone" />

      <div>
        <h3>Télécharger l’application.</h3>
        <p>Pour géolocaliser en temps réel votre foodtrucks proche de vous.</p>
        <p>Régalez-vous avec Louke !</p>
        <div className="flex f-row test-img-div">
          <div className="google-store">
            <a href="https://play.google.com/store/apps" target="_blank" rel="noreferrer">
              <img className="img-store" src={google} alt="Google" />
            </a>
          </div>
          <div className="apple-store">
            <a href="https://www.apple.com/fr/app-store/" target="_blank" rel="noreferrer">
              <img className="img-store" src={apple} alt="Apple" />
            </a>
          </div>
        </div>
      </div>
      <ScrollToTopButton id="cssscroll"  />
    </div>
  )
}

export default ApplicationMobile
