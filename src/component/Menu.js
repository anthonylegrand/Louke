import React, { useState } from 'react';
import { FaListAlt, FaHamburger, FaCloudMoon, FaCoins, FaCrown, FaDice, FaFish } from 'react-icons/fa';

import './../css/Menu.css'

import Article from './MenuArticle'

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

const pancakes = [
  {
    id: 1,
    image: "",
    title: "Mon pancake 1",
    weight: "110g",
    price: "10 €",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 2,
    image: "",
    title: "Mon pancake 2",
    weight: "110g",
    price: "10 €",
    description: "Voici la description de mon pancakes"
  },
  {
    id: 3,
    image: "",
    title: "Mon pancake 3",
    weight: "110g",
    price: "10 €",
    description: "Voici la description de mon pancakes"
  },
  {
    id: 4,
    image: "",
    title: "Mon pancake 4",
    weight: "110g",
    price: "10 €",
    description: "Voici la description de mon pancakes"
  },
  {
    id: 5,
    image: "",
    title: "Mon pancake 5",
    weight: "110g",
    price: "10 €",
    description: "Voici la description de mon pancakes"
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
                pancakes.map((pancake) => (
                  <Article key={pancake.id} pancakes={pancake} active_article={active_article} setActive={setActive} id={pancake.id} />
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
