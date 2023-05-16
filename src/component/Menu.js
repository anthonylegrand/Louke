import Article from './MenuArticle'
import React, { useState } from 'react'
import { filters } from '../mocks/filters'
import { pancakes } from '../mocks/pancakes'

import './../css/Menu.css'

const Menu = () => {
  const [section, setSection] = useState('')
  const [menuFilter, setMenuFilter] = useState('Toutes nos recettes') // Hack to display all Pancakes on first render

  const handleClick = (currentfilter) => {
    setSection(currentfilter)
    setMenuFilter(currentfilter)
  }

  const createSectionComponent = (title, icon) => {
    return (
      <div key={title} className={section === title ? 'active' : ''} onClick={() => handleClick(title)}>
        {icon}
        <span>{title}</span>
      </div>
    )
  }

  return (
    <div id="menu" className="flex f-col ai-center jc-space-between page-padding">
      <div className="flex f-col ai-center">
        <p className="title">Le menu</p>
        <h3>On a tous ce que vous aimez !</h3>
      </div>

      <div className="flex f-row jc-space-between">
        {filters.map((el, i) => createSectionComponent(el.title, el.icon))}
      </div>

      <div className="flex f-row">
        {pancakes.map((pancake) => (
          <Article key={pancake.id} pancake={pancake} menuFilter={menuFilter} />
        ))}
      </div>
    </div>
  )
}

export default Menu
