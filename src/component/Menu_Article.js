import React, { useState } from 'react';

import pancakes from './../img/stickers/pancakes.svg'

function Menu_Article(props) {

  return (
    <article 
        className={'flex f-col jc-space-between ai-center'+(props.active_article === props.id ? ' acctive' : '')}
        onMouseOver={()=>props.setActive(props.id)}>

        <img src={pancakes} alt='pancakes icon' />
        <h3>Royale de Luxe</h3>
        <p>108g</p>

        <h3>8€50</h3>
        <button>Information</button>

    </article>
  );
}

export default Menu_Article;
