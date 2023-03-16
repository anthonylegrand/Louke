import React from 'react';
import Modal from 'react-modal';

import pancakes from './../img/stickers/pancakes.svg'

import './../css/MenuArticle.css'

const customStyles = {
  content: {
    bottom: 'auto',
    height: '50vh',
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



  return (
    <article
        className={'flex f-col jc-space-between ai-center'+(props.active_article === props.id ? ' acctive' : '')}
        onMouseOver={()=>props.setActive(props.id)}>
        {console.log(props.pancakes.title)}
        {/* TO DO CHANGE IMG */}
        <img src={pancakes} alt='pancakes icon' />
        <h3>{props.pancakes.title}</h3>
        <p>{props.pancakes.weight}</p>

        <h3>{props.pancakes.price}</h3>
        <button onClick={openModal}>Information</button>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className='modal-content'>
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{props.pancakes.title}</h2>
            <img src={pancakes} alt='pancakes icon' />
            <hr className='separator'/>
            {/* <div className='hr-with-description'>
              <hr className='separator'/>
              <span>Description</span>
            </div> */}
            <div>
              <h3 className='modal-description'>{props.pancakes.description}</h3>
            </div>
            <button className='modal-close-button' onClick={closeModal}>Retour</button>
          </div>
        </Modal>
    </article>
  );
}

export default MenuArticle;
