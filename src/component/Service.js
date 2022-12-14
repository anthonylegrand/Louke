import './../css/Service.css'

import home_made_svg from './../img/stickers/home-made.svg';
import local_products_svg from './../img/stickers/local-products.svg';
import small_prices_svg from './../img/stickers/small-prices.svg';

function Service() {

  return (
    <div id='Service' className='flex f-col ai-center jc-space-between'>
        
        <div className='flex f-col ai-center'>
          <lore className='title'>Nos services</lore>
          <h3>Un large choix de fait maison</h3>
        </div>

        <div className='flex f-row jc-space-between page-padding'>

          <div>
            <img src={home_made_svg} alt='icon' />
            <h3>Fait maison</h3>
            <p>Produits préparé et cuisiné sur place</p>
          </div>

          <div>
            <img src={local_products_svg} alt='icon' />
            <h3>Produits locaux</h3>
            <p>Produit provenant de fournisseurs locaux et de region</p>
          </div>
          
          <div>
            <img src={small_prices_svg} alt='icon' />
            <h3>Petit prix</h3>
            <p>Nous vous proposont les prix les plus bas possible !</p>
          </div>

        </div>
    </div>
  );
}

export default Service;
