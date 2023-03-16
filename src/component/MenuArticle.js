import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

// Images pancakes
import pancake1 from '../img/pancakes/1.png'
import pancake2 from '../img/pancakes/2.png'
import pancake3 from '../img/pancakes/3.png'
import pancake4 from '../img/pancakes/4.png'
import pancake5 from '../img/pancakes/5.png'
import pancake6 from '../img/pancakes/6.png'
import pancake7 from '../img/pancakes/7.png'
import pancake8 from '../img/pancakes/8.png'
import pancake9 from '../img/pancakes/9.png'
import pancake10 from '../img/pancakes/10.png'

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
    justifyContent: "center",
    borderRadius: "20px",
  },
};

Modal.setAppElement('#root');

function MenuArticle(props) {
  let subtitle;

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [isDisplay, setIsDisplay] = useState(true)

  useEffect(() => {
    // Set isDisplay state if pancakes filter include filter targeted
    if (props.pancakes.filter.includes(props.filter)) {
      setIsDisplay(true)
    }

    return () => { // Clear isDisplay state after every render
      setIsDisplay(false)
    };
  }, [props.filter, props.pancakes.filter]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  const getImg = (id) => {
    let img = "";

    switch (id) {
      case 1:
        img = pancake1;
        break;

      case 2:
        img = pancake2;
        break;
      case 3:
        img = pancake3;
        break;

      case 4:
        img = pancake4;
        break;

      case 5:
        img = pancake5;
        break;

      case 6:
        img = pancake6;
        break;

      case 7:
        img = pancake7;
        break;

      case 8:
        img = pancake8;
        break;

      case 9:
        img = pancake9;
        break;

      case 10:
        img = pancake10;
        break;

      default:
        break;
    }

    return img
  }


  return (
    <article
      className={'pancake-box flex f-col jc-space-between ai-center'+(props.active_article === props.id ? ' acctive' : '')}
      onMouseOver={()=>props.setActive(props.id)}
      style={{ display: isDisplay ? 'block' : 'none', textAlign: "center"}}
    >
      <img src={getImg(props.pancakes.id)} alt='pancakes icon' />
      <h3 className='pancake-title'>{props.pancakes.title}</h3>
      <p>{props.pancakes.weight}</p>
      <h3>{props.pancakes.price}</h3>
      <button onClick={openModal}>Informations</button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='modal-content'>
          <h2 className='modal-title' ref={(_subtitle) => (subtitle = _subtitle)}>{props.pancakes.title}</h2>
          <img src={getImg(props.pancakes.id)} alt='pancakes icon' />
          <hr className='separator'/>
          <div>
            <ul className='list-ingredients'>
              {props.pancakes.recipe.map((ingredient) => (
                ingredient
                  ? <li>{ingredient}</li>
                  : ""
              ))}
            </ul>
          </div>
          <button className='modal-close-button' onClick={closeModal}>Retour</button>
        </div>
      </Modal>
  </article>
  );
}

export default MenuArticle;
