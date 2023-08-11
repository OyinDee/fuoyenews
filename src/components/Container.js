import React from 'react'
import {useEffect, useState} from "react"
import axios from "axios"
import "../index.css"
export default function Container({dynimage, funcc, cctempof,cdesc,cnameof}) {

    return (

        <>
        <div className="mySlides fade bg-dark">
        <img src={dynimage} className="all"/>
        <div className="pheri">
        <div className="white-bg">
        <span className="numbertext">{}</span>
        </div>
        <div className="white-bg">
        <span className="numbertext1">Description <br/>----<br/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur dolorum expedita voluptatem? Illum aliquam optio eum, ipsa veritatis quasi sunt commodi unde dolor ea et tenetur nihil magni placeat perspiciatis?</span>
        </div>
        <div className="white-bg">
        <span className="textt">Currently reading <br/>----<br/>Diidee</span>
        </div>
        <div className="white-bg">  
        <button className="btn">Click to read more...</button>
        </div>
        
                </div>
        </div>
        </>
    )
}
