import Truck_svg from './../img/truck.svg'

import './../css/Home.css'

const Home = () => {
  return (
    <div id="home" className="flex f-row jc-space-between ai-center">
      <div className="page-padding">
        <div className="tag">
          <label>The best meal ! 🔥</label>
        </div>

        <h2>
          Découvrir les meilleurs FoodTrucks de ta ville. 100% <b>Pancakes</b> !
        </h2>
        <h4 className="secondary-text">
          La carte gourmande qui réveille tes papilles : déguste les meilleurs pancakes de ta ville.{' '}
        </h4>

        <div className="flex f-row">
          <a className="button red" href="/#menu">
            Le Menu
          </a>
          <a className="button" href="/#service">
            Nos Services
          </a>
        </div>
      </div>
      <img src={Truck_svg} alt="Truck icon" />
    </div>
  )
}

export default Home
