import './../css/ApplicationMobile.css'

import phone from './../img/stickers/phone.png'
import google from './../img/stickers/google.png'
import apple from './../img/stickers/apple.png'

function ApplicationMobile() {

  return (
    <div id='Application_Mobile' className='flex f-row ai-center jc-space-between page-padding'>

      <img className='phone-img' src={phone} alt='Phone' />

      <div>
        <lore className='title'>Télécharger l’application</lore>
        <h3>Télécharger l’application.<br/>Pour des commandes plus faciles</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='flex f-row test-img-div'>
          <div className='google-store'>
            <a href='https://play.google.com/store/apps' target="_blank" rel="noreferrer"><img className='img-store' src={google} alt='Google' /></a>
          </div>
          <div className='apple-store'>
            <a href='https://www.apple.com/fr/app-store/' target="_blank" rel="noreferrer"><img className='img-store' src={apple} alt='Apple' /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationMobile;
