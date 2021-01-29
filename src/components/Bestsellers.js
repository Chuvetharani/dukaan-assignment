import React from 'react'
import './Bestsellers.css'
import ice from '../images/ice-white.png'
import food from '../images/home.png'
import half from '../images/half.png'

export default function Bestsellers() {
    return (
        <>
        <div>
            <span className="Bestsellers"> Bestsellers </span>
        </div>
        <div className="box">
    	<img src={ice} width="124" height="124" style={{ marginLeft:14, marginRight: 14, marginBottom: 32, marginTop: 16 }} alt="Ice cream"/>
        <div className="text">
            <p>Ice Creams</p>
        </div>
        </div>
        <div class="box">
    	<img src={food} width="124" height="124" style={{ marginRight: 14, marginBottom: 32, marginTop: 16 }} alt="Ice cream"/>
        <div class="text">
            <p>Home Food</p>
        </div>
        </div>
        <div class="box">
    	<img src={half} width="68" height="124" style={{ marginBottom: 32, marginTop: 16 }} alt="Ice cream"/>
        <div class="text">
            <p>Fruit S</p>
        </div>
        </div>
        </>
    )
}