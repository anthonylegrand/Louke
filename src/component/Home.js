import './../css/Home.css'
import Truck_svg from './../img/truck.svg'

function Home() {
  return (
    <div id="Home" className="flex f-row jc-space-between ai-center">
      <div className="page-padding">
        <div className="tag">
          <label>The best eat ! 🔥</label>
        </div>

        <h2>
          Découvrir les meilleurs FoodTrucks de ta ville. 100% <b>Pancakes</b>
        </h2>
        <h4 className="secondary-text">
          La carte gourmande qui réveille tes papilles : déguste les meilleurs pancakes de ta ville.{' '}
        </h4>

        <div className="flex f-row">
          <a className="button red" href="/#Menu">
            Le Menu
          </a>
          <a className="button" href="/#Service">
            Nos Services
          </a>
        </div>
      </div>
      <img src={Truck_svg} alt="Truck icon" />
    </div>
  )
}

export default Home
