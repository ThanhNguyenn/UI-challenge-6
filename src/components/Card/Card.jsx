import React from 'react'
import './Card_Styled.css'
import { Button } from 'react-bootstrap';



function Card({pack, price, des, usage, button, buttonColor}) {
    return (
        <>
        <div className="m-5 card--container">
            <p className="card--font-merri">{pack}</p>
            <p className="card--font-bold card--margin-0">{price}</p>
            <p className="card--font-small">{usage}</p>
            <p>{des}</p>
            <Button style={{backgroundColor: `${buttonColor}`, color: 'black', border: 'none', padding: '15px'}}>{button}</Button>
        </div>
        </>
    )
}

export default Card
