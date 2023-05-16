import Modal from 'react-modal'
import React, { useEffect, useState } from 'react'

import './../css/MenuArticle.css'

const customStyles = {
  content: {
    bottom: 'auto',
    height: '60vh',
    left: '50%',
    marginRight: '-50%',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    backgroundColor: 'var(--secondary-color)',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '20px'
  }
}

Modal.setAppElement('#root')

const MenuArticle = ({ pancake, menuFilter }) => {
  const { id, image, title, weight, price, recipe, filter } = pancake

  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [isDisplay, setIsDisplay] = useState(true)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    // Set isDisplay state if pancake filter include filter targeted
    if (filter.includes(menuFilter)) {
      setIsDisplay(true)
    }

    return () => {
      // Clear isDisplay state after every render
      setIsDisplay(false)
    }
  }, [filter, menuFilter])

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <article
      className={'pancake-box flex f-col jc-space-between ai-center' + (isActive ? ' active' : '')}
      onMouseOver={() => setIsActive(true)}
      onMouseOut={() => setIsActive(false)}
      style={{ display: isDisplay ? 'block' : 'none', textAlign: 'center' }}
    >
      <img src={image} alt="pancakes icon" />
      <h3 className="pancake-title">{title}</h3>
      <p>{weight}</p>
      <h3>{price}</h3>
      <button onClick={openModal}>Informations</button>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <div className="modal-content">
          <h2 className="modal-title">{title}</h2>
          <img src={image} alt="pancakes icon" />
          <hr className="separator" />
          <div>
            <ul className="list-ingredients">
              {recipe.map((ingredient) => (ingredient ? <li key={id}>{ingredient}</li> : ''))}
            </ul>
          </div>
          <button className="modal-close-button" onClick={closeModal}>
            Retour
          </button>
        </div>
      </Modal>
    </article>
  )
}

export default MenuArticle
