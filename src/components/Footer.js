import React from 'react'
import delivery from '../images/delivery.png'
import group from '../images/group.png'
import whatsapp from '../images/whatsapp.png'
import homenav from '../images/homenav.png'
import bag from '../images/bag.png'
import call from '../images/call.png'
import protection from '../images/protection.png'
import nav from '../images/nav.png'
import './Footer.css'
import { blue, green } from '@material-ui/core/colors'

export default function Footer() {
    return (
        <>
        <div className="blk">
            <div className="row">
                <div className=" return col-3">
                <img src={delivery} style={{ marginRight: 12, marginLeft: 16 }} className="float-left" width="48" height="48" />
                </div>
                <div className=" iconpro col-3">
                <img src={protection} style={{ marginRight: 12, marginLeft: 16 }} className="float-left" width="48" height="48" />
                </div>
                <div className="iconssupport col-3">
                <img src={call} style={{ marginRight: 12, marginLeft: 16 }} className="float-left" width="48" height="48" />
                </div>
            </div>
            <div className="row">
                <div className=" blk-txt col-3">
                    <span> Free Delivery </span>
                    <span className="above cost"> (above ₹500) </span>
                </div>
                <div className="blk-txt col-3">
                <span> Buyer Protection</span>
                </div>
                <div className="blk-txt col-3">
                <span> Customer Support</span>
               </div>
            </div>
            <div className="breaker"></div>
            <div className="STORE-DETAILS">
                STORE DETAILS
            </div>
            <div className="Mano-Super-Market">
            Mano Super Market 
            </div>
            <div className="Krishvi-Terazzo-80">
            Krishvi Terazzo, 80 Feet Road Indiranagar, Bengaluru, Karnataka
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className=" col-5">
                <img src={whatsapp} className="Group-18"/>
                </div>
                <div className="circle">
                <img src={group} width="20" height="20" />
                </div>
            </div>
            </div>
            <div className="row f-bg">
            <div className="col-4 Home-txt">
                <img src={homenav} width="24" height="24" />
            <span>Home</span> 
            </div>
                
                <div className="col-3 navicon-bg">
                <img className="navicon" src={bag} width="24" height="24" />
                <span className="Bag-txt">Bag</span>
                </div>
                <div className="col-4 navicon-bg">
                <img className="navicon" src={nav} width="24" height="24" />
                <span className="Bag-txt">Orders</span>
                </div>
            </div>
            <div className="Rectangle-17"></div>
        </>
    )
}