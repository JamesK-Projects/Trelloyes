import React from 'react';
import './Card.css';

function Card(props){
    return (
        <div className='Card'>
            <button type='button'>Delete</button>
            <h3>
                
                {//Why do I not need to reference allCards in store.js for the title and content?
                }
                {props.title}
            </h3>
            <p>
                {props.content}
            </p>
        </div>
    )
}

export default Card
