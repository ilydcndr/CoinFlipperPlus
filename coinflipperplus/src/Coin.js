import React from 'react';
import tura from './1-lira-tura.png';
import yazi from './1-lira-yazi.png';
import './coin.css';

function Coin(props){
    return(
         <div className={"Coin-container"} style={{marginTop:"10px"}}>
             <div className={`Coin ${props.turn ? 'Coin-rotate': ''}`}>
                 <img src={tura} className={`${props.option==="yazi" ? "Coin-back":"Coin-front"}`}></img>
                 <img src={yazi} className={`${props.option==="yazi" ? "Coin-front":"Coin-back"}`}></img>

             </div>
         </div>
    )
}

export default Coin; 