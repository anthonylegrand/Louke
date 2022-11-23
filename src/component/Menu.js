import React, { useState } from 'react';
import { FaListAlt, FaHamburger, FaCloudMoon, FaCoins, FaCrown, FaDice, FaFish } from 'react-icons/fa';

import './../css/Menu.css'

import Article from './Menu_Article'

// Pas beau mais que pour utiliser une map pour faire plaisir à Kevin ;)
const LIST = [
    {
        title: '',
        icon: <FaListAlt/>
    },
    {
        title: 'Menu',
        icon: <FaFish/>
    },
    {
        title: 'Pankakes',
        icon: <FaHamburger/>
    },
    {
        title: 'Accompagnement',
        icon: <FaCloudMoon/>
    },
    {
        title: 'Boissons',
        icon: <FaCoins/>
    },
    {
        title: 'Desserts',
        icon: <FaCrown/>
    },
    {
        title: 'Promotions',
        icon: <FaDice/>
    }
]

function Menu() {
    const [ section, setSection ] = useState("")
    const [ active_article, setActive ] = useState(null)

  return (
    <div id='Menu' className='flex f-col ai-center jc-space-between page-padding'>

        <div className='flex f-col ai-center'>
          <lore className='title'>Le menu</lore>
          <h3>On a tous ce que vous aimez !</h3>
        </div>

        <div className='flex f-row jc-space-between'>

            {
                LIST.map((el, i) => createSectionComponent(el.title, el.icon, i))
            }

        </div>

        <div className='flex f-row'>

            {
                [0,1,2,3,4,5].map((i) => (
                    <Article active_article={active_article} setActive={setActive} id={i} />
                ))
            }

        </div>

        <div></div>

    </div>
  );

  function createSectionComponent(title, icon, i){
    return (
        <div key={i} className={section === title ? "acctive" : ""} onClick={()=>setSection(title)} >
            {icon}<lore>{title}</lore>
        </div>
    )
  }
}

export default Menu;
