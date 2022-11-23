import './../css/Home.css'
import Truck_svg from './../img/truck.svg'

function Home() {

  return (
    <div id='Home' className='flex f-row jc-space-between ai-center'>
        <div className='page-padding'>

            <div className='tag'>
                <label>The best eat ! 🔥</label>
            </div>

            <h2>Découvrire les meilleurs FoodTruck de ta ville. 100% <b>Pankackes</b></h2>
            <h4 className='secondary-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h4>

            <div className='flex f-row'>
                <a className='button red' href='/#Menu'>Le Menu</a>
                <a className='button' href='/#Service'>Nos Services</a>
            </div>
        </div>
        
        <img src={Truck_svg} alt='Truck icon' />
    </div>
  );
}

export default Home;
