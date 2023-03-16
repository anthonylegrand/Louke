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
        title: 'Pancakes',
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
    title: "Original Pancake Salé",
    weight: "75g",
    price: "7€",
    recipe: [
      "50g de farine",
      "2 oeufs",
      "60ml de lait",
      "1 petite cuillère à soupe d'huile d'olive",
      "1/2 sachet de levure chimique",
      "1 pincée de sel",
      "20g de fromage râpé",
      "Morceaux de poivron rouge coupé en petits dés",
      "Morceaux de lardons",
      "30g de maïs doux ",
    ],
    filter: ["Pancake"]
  },
  {
    id: 2,
    image: "",
    title: "Original Pancake Sucré",
    weight: "60g",
    price: "5€",
    recipe: [
      "2 œufs",
      "1 banane",
      "100g de flocon d’avoine",
      "50ml d’arôme de vanille",
      "Pincée de cannelle",
      "20g de pépites de chocolat noir"

    ],
    filter: ["Dessert", "Accompagnement"]
  },
  {
    id: 3,
    image: "",
    title: "Original Pancake Salé Veggie",
    weight: "65g",
    price: "6€50",
    recipe: [
      "50g de farine",
      "1/2 cuillères à soupe de levure chimique",
      "1/2 cuillère à café de sel",
      "1 cuillères à soupe d'huile végétale",
      "75ml de lait de soja",
      "Morceaux de courgette râpée",
      "1 petit oignon rouge râpé",
      "1 petite carotte râpée",
      "1/2 cuillère à café de cumin en poudre",
    ],
    filter: ["Pancake"]
  },
  {
    id: 4,
    image: "",
    title: "Pancake aux 4 épices",
    weight: "60g",
    price: "4€",
    recipe: [
      "50g de farine",
      "1/2 cuillères à soupe de levure chimique",
      "1/4 cuillère à café de sel",
      "1/2 cuillères à soupe de sucre de canne",
      "75ml de lait d’amande",
      "1 cuillère à café d’arôme de vanille",
      "Pincée de cannelle",
      "1/2 cuillère à café de muscade en poudre",
      "1/2 cuillère à café de gingembre en poudre",
      "1 pincée de clou de girofle en poudre",

    ],
    filter: ["Promotion"]
  },
  {
    id: 5,
    image: "",
    title: "Pancake Duo Fromages",
    weight: "65g",
    price: "6€50",
    recipe: [
      "50g de farine",
      "1/2 cuillères à soupe de levure chimique",
      "1/2 cuillère à café de sel",
      "75ml de lait",
      "20g de bacon",
      "2 oeuf",
      "Morceaux de gruyère",
      "1/2 tasse de ricotta",
      "2 cuillères à soupe de ciboulette fraîche hachée",
      "1 pincée de poivre noir"

    ],
    filter: ["Pancake", "Accompagnement"]
  },
  {
    id: 6,
    image: "",
    title: "Pancake Chèvre Miel",
    weight: "75g",
    price: "5€50",
    recipe: [
      "50g de farine",
      "1/2 cuillères à soupe de levure chimique",
      "1/2 cuillère à café de sel",
      "75ml de lait",
      "1/2 cuillères à soupe d'huile végétale",
      "2 oeuf",
      "25g de fromage de chèvre frais",
      "1 cuillère à soupe de miel liquide",
      "1 pincée de poivre noir"
    ],
    filter: ["Promotion"]
  },
  {
    id: 7,
    image: "",
    title: "Pancake Pistaches Framboises",
    weight: "60g",
    price: "5€",
    recipe: [
      "50g de farine",
      "1/2 cuillères à soupe de levure chimique",
      "1/2 cuillère à café de sel",
      "75ml de lait d’amande",
      "2 oeuf",
      "1/4 de tasse de poudre de pistache",
      "1/2 tasse de framboises fraîches ou surgelées",
      "1 cuillère à soupe de sucre"
    ],
    filter: ["Dessert"]
  },
  {
    id: 8,
    image: "",
    title: "Pancake Moment Café",
    weight: "65g",
    price: "4€",
    recipe: [
      "50g de farine",
      "2 oeufs",
      "60ml de lait",
      "1 petite cuillère à soupe d'huile d'olive",
      "1/2 sachet de levure chimique",
      "1 pincée de sel",
      "20g de fromage râpé",
      "Morceaux de poivron rouge coupé en petits dés",
      "Morceaux de lardons",
      "30g de maïs doux ",
    ],
    filter: ["Dessert", "Accompagnement"]
  },
  // {
  //   id: 9,
  //   image: "",
  //   title: "Pancake Pause Speculoos",
  //   weight: "60g",
  //   price: "4€50",
  //   recipe: [
  //     "25g de farine",
  //     "1/8 de sachet de levure chimique",
  //     "1 pincée de sel",
  //     "1/2 cuillère à soupe de sucre",
  //     "1/2 oeuf",
  //     "40ml de lait d’avoine",
  //     "1/2 cuillère à soupe d'huile végétale",
  //     "1 cuillère à soupe de pâte de speculoos",
  //   ],
  //   filter: ["Promotion"]
  // },
  // {
  //   id: 10,
  //   image: "",
  //   title: "Pancake Atlantique",
  //   weight: "75g",
  //   price: "7€",
  //   recipe: [
  //     "25g de farine",
  //     "1/2 cuillère à café de levure chimique",
  //     "1 pincée de sel",
  //     "1/2 oeuf",
  //     "40ml de lait",
  //     "1/2 cuillère à soupe d'huile végétale",
  //     "30g de saumon fumé",
  //     "1 cuillère à soupe de ciboulette ciselée",
  //     "Poivre noir"
  //   ],
  //   filter: ["Pancake"]
  // },
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
