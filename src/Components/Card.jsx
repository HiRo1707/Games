import { useState } from "react";

//Component for single Card

const Card = (props) => {
    const onClickHandler = () => {
        if(props.turnedCards[1] === 0){
            if(props.turnedCards[0] === 0){
                props.setTurnedCards([props.cardNumber,props.turnedCards[1]]);
            }else{
                props.setTurnedCards([props.turnedCards[0],props.cardNumber]);
            }
        }
    }

    const isTurned = props.turnedCards[0] === props.cardNumber || props.turnedCards[1] === props.cardNumber;

    const actualImage = require(`./Images/${props.imageName}`).default;
    const questionmarkImage = require(`./Images/Question_Mark.png`).default;

    return (
        <>
            {props.hideImage ?
            <button className="hiddenGameCard" onClick={onClickHandler}>
                <img src={questionmarkImage} alt="Nope" style={{width: '64px', height: '64px'}} ></img>
            </button>:
            <button className="GameCard" onClick={onClickHandler}>
                {isTurned && !props.hideImage ?
                    <img src={actualImage} alt="Nope" style={{width: '64px', height: '64px'}}></img>:
                    <img src={questionmarkImage} alt="Nope" style={{width: '64px', height: '64px'}} ></img>
                }
            </button>
            }     
        </>
    )

}

export default Card