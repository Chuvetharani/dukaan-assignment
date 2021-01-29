import { green } from '@material-ui/core/colors'
import React from 'react'
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import VibrationIcon from '@material-ui/icons/Vibration';
import SignalWifi4BarIcon from '@material-ui/icons/SignalWifi4Bar';
import SignalCellular4BarIcon from '@material-ui/icons/SignalCellular4Bar';
import BatteryFullIcon from '@material-ui/icons/BatteryFull';
import Filter1Icon from '@material-ui/icons/Filter1';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import tick from '../images/tick.png'
import logo from '../images/logo.png'
import store from '../images/store.png'
import './Head.css'

export default function Head() {
    return (
        <>
        <div className="Rectangle-head">
        <div className="Rectangle-18"> 3:19
            <BluetoothIcon fontSize="small" style={{ marginLeft: 160 }}/>
            <VibrationIcon fontSize="small" style={{ marginRight: 10, marginLeft: 5 }}></VibrationIcon>
            <SignalWifi4BarIcon fontSize="small"/>
            <SignalCellular4BarIcon fontSize="small"/>
            <BatteryFullIcon fontSize="small"/> 59%
        </div>
        <div className="bg-head">
            <div className="mask">
            <i style={{ color: green[800], marginRight: 3 }} className="fa fa-lock"></i>
            <span style={{ color: green[800] }}>https</span>://www.mydukaan.io/mano 
            </div>
            <Filter1Icon/>
            <MoreVertIcon/>  
        </div>
        <div className="store-blue">            
            <span className="Store-made-with"> Store made with </span><img className="log" src={logo} alt="icon"/>
            <span className="DOWNLOAD-APP">DOWNLOAD APP</span>
        </div>
        <div>
            <img src={store} className="float-left store-pic" width="56" height="56" />
            <span style={{ fontSize:18}}>Mano Super Market</span>
            <div> <img style={{ width:14, height:14 }} src={ tick }/><span className="TRUSTED-SELLER">TRUSTED SELLER </span></div>
        </div>
        <div className="Rectangle-Copy-2">
            <span className="Search-for-products"> Search for products...</span>
        </div>
        </div>
        </>
    )
}