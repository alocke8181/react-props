import React from 'react';
import './Pokecard.css';

const Pokecard = ({id, name, type, base_xp}) => {
    let imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div id={id} className='Pokecard'>
            <h4>{name}</h4>
            <img src={imgURL} alt={name} />
            <p>Type: {type}</p>
            <p>EXP: {base_xp}</p>
        </div>
    )
}

export default Pokecard;