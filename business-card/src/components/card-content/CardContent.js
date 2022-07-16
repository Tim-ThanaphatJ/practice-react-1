import React from "react"

import "./CardContent.css"

function CardContent(props) {
    let info = {
        "name": "Laura Smith",
        "position": "Frontend Developer",
        "website": "laurasmith.website",
        "about": "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.",
        "interest": "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
    }
    
    // Color style
    let colorStyle = {
        "color": "white",
        "backgroudColor": "black"
    }
    if(props.colorStyle === "dark"){
        colorStyle.backgroudColor = "#1A1B21"
        colorStyle.nameColor = "#FFFFFF"
        colorStyle.webColor = "#F5F5F5"
        colorStyle.topicColor = "#F5F5F5"
        colorStyle.textColor = "#DCDCDC"
    }else if(props.colorStyle === "white"){
        colorStyle.backgroudColor = "#F5F5F5"
        colorStyle.nameColor = "#2B283A"
        colorStyle.webColor = "#4A4E74"
        colorStyle.topicColor = "#2B283A"
        colorStyle.textColor = "#4A4E74"
    }

    // Button style
    let button;
    if(props.buttonStyle === "1"){
        button = <button className="emailButton-1">Email</button>
    }else if(props.buttonStyle === "2"){
        button = (
                    <div className="button-container">
                        <button className="emailButton-2">Email</button>
                        <button className="linkedinButton-2">LinkedIn</button>
                    </div>
                )
    }

    return (
        <main style={{'backgroundColor': colorStyle.backgroudColor }}>
            <h2 className="main--info_name" style={{ 'color': colorStyle.nameColor}}>{info.name}</h2>
            <h3 className="main--info_position">{info.position}</h3>
            <h5 className="main--info_website" style={{ 'color': colorStyle.webColor}}>{info.website}</h5>
            {button}
            <h4 className="main--info_header_about" style={{ 'color': colorStyle.topicColor}}>About</h4> 
            <span className="main--info_text_about" style={{ 'color': colorStyle.textColor}}>{info.about}</span>
            <h4 className="main--info_header_interest" style={{ 'color': colorStyle.topicColor}}>Interests</h4> 
            <span className="main--info_text_interest" style={{ 'color': colorStyle.textColor}}>{info.interest}</span>
        </main>
    )
}

export default CardContent;