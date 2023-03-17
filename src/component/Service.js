import './../css/Service.css'

import home_made_svg from './../img/stickers/home-made.svg'
import local_products_svg from './../img/stickers/local-products.svg'
import small_prices_svg from './../img/stickers/small-prices.svg'

function Service() {
  return (
    <div id="Service" className="flex f-col ai-center jc-space-between">
      <div className="flex f-col ai-center">
        <p className="title">Nos services</p>
        <h3>Un large choix de fait maison</h3>
      </div>

      <div className="flex f-row jc-space-between page-padding">
        <div>
          <img src={home_made_svg} alt="icon" />
          <h3>Fait maison</h3>
          <p>Produits préparés et cuisinés sur place</p>
        </div>

        <div>
          <img src={local_products_svg} alt="icon" />
          <h3>Produits locaux</h3>
          <p>Produits en provenance de fournisseurs locaux et de la région</p>
        </div>

        <div>
          <img src={small_prices_svg} alt="icon" />
          <h3>Petit prix</h3>
          <p>Nous vous proposons des prix au plus bas possible !</p>
        </div>
      </div>
    </div>
  )
}

export default Service
