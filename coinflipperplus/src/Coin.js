import React from 'react';
import tura from './1-lira-tura.png';
import yazi from './1-lira-yazi.png';
import './coin.css';

function Coin(props){
    return(
         <div className={"Coin-container"}>
             <div className={`Coin ${props.turn ? 'Coin-rotate': ''}`}>
                 <img src={tura}></img>
                 <img src={yazi}></img>

             </div>
         </div>
    )
}

export default Coin; 