import React from 'react'
import Card from '../Card/Card'
import { Container, Row } from 'react-bootstrap';
import './Cards_Styled.css'

function Cards() {
    const info = [
        {
           pack: "Free",
           price: "$0",
           des: "For individuals or teams looking to organise anything.",
           usage: "Free for your whole team",
           button:  "Get started",
           buttonColor: "#edbbff",
        }, 
        {
            pack: "Standard",
            price: "$6",
            des: "For teams that need to manage more work.",
            usage: "Per user per month",
            button:  "Upgrade Now",
            buttonColor: "#aef1f5",
        }, 
         {
            pack: "Premium",
            price: "$12",
            des: "Best for teams that track multiple projects.",
            usage: "per user per month",
            button:  "Try for free",
            buttonColor: "#ffddb6",
        }, 
    ]



    return (
        <div className="cards--container">
            {info.map(item => <Card pack={item.pack} price={item.price} des={item.des} usage={item.usage} button={item.button} buttonColor={item.buttonColor}/>)}
        </div>
    )
}

export default Cards
