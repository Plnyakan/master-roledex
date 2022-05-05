import React from 'react'
import Card from '../card/card';
import './card-list.css';

const cardlist = ({ monsters }) =>  (
    <div className="card-list">
        {monsters.map((monster) => { 
            return<Card monster={monster}/>
            })}
    </div>
  )
export default cardlist