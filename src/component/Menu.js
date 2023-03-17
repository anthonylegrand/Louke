import React, { useState } from 'react'

// Mocks
import { filters } from '../mocks/filters'
import { pancakes } from '../mocks/pancakes'

// CSS
import './../css/Menu.css'

// Components
import Article from './MenuArticle'

function Menu() {
  const [section, setSection] = useState('')
  const [menuFilter, setMenuFilter] = useState('Toutes nos recettes') // Hack to display all Pancakes on first render

  const handleClick = (e) => {
    const currentfilter = e.target.innerText

    setSection(currentfilter)
    setMenuFilter(currentfilter)
  }

  return (
    <div id="Menu" className="flex f-col ai-center jc-space-between page-padding">
      <div className="flex f-col ai-center">
        <p className="title">Le menu</p>
        <h3>On a tous ce que vous aimez !</h3>
      </div>

      <div className="flex f-row jc-space-between">
        {filters.map((el, i) => createSectionComponent(el.title, el.icon, i))}
      </div>

      <div className="flex f-row">
        {pancakes.map((pancake) => (
          <Article key={pancake.id} pancake={pancake} menuFilter={menuFilter} />
        ))}
      </div>
    </div>
  )

  function createSectionComponent(title, icon, i) {
    return (
      <div key={i} className={section === title ? 'active' : ''} onClick={handleClick}>
        {icon}
        <span>{title}</span>
      </div>
    )
  }
}

export default Menu
