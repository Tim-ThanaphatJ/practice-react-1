import React from 'react'

import CardContent from '../card-content/CardContent';
import profileImg from '../../images/profile-image.png'

import "./BusinessCard.css"
import { FaFacebookSquare } from 'react-icons/fa';

function BusinessCard(props){
    let colorStyle = {
        "color": "#918E9B",
        "backgroudColor": "black"
    }

    if(props.colorStyle === "dark"){
        colorStyle.backgroudColor = "#161619"
    }else if(props.colorStyle === "white"){
        colorStyle.backgroudColor = "#D5D4D8"
    }

    return(
        <div className='bussinessCard'>
            <img src={profileImg} className="profile_img"/>
            <CardContent buttonStyle={props.buttonStyle} colorStyle={props.colorStyle}/>
            <div className='contacts' style={{"backgroundColor": colorStyle.backgroudColor}}>
                <FaFacebookSquare />
                <FaFacebookSquare />
                <FaFacebookSquare />
                <FaFacebookSquare />
                <FaFacebookSquare />
            </div>
        </div>
    )
}

export default BusinessCard;