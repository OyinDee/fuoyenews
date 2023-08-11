import React from 'react'
import {useEffect, useState} from "react"
import axios from "axios"
import "../index.css"
import img1 from "../Wallpapers/w1.jpg"
import img2 from "../Wallpapers/w2.webp"
import img3 from "../Wallpapers/w3.jpg"
import img4 from "../Wallpapers/w4.jpg"
import img5 from "../Wallpapers/w5.jpg"
import img6 from "../Wallpapers/w6.jpg"
import img8 from "../Wallpapers/w8.jpg"
import img9 from "../Wallpapers/w9.jpg"
import img10 from "../Wallpapers/w10.webp"
import img11 from "../Wallpapers/w11.jpg"
import img12 from "../Wallpapers/w12.jpg"
import img13 from "../Wallpapers/w13.jpg"
import Container from "./Container"

var dataa
const desc="Diidee"
const ctempof="Loremsdushsfsnngrhbubvesbhi"
const nameof="gfudydhk"
const input="yieftgvkayg"

export default function Effect() {
    useEffect(() => {

        let slideIndex=0
        const showSlides=()=> {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 6000);
        }
        showSlides()

    }, [])
    
    return (
        <>
            <Container dynimage={img1} cctempof={ctempof} cdesc={desc} cnameof={nameof}  funcc={input}></Container>
            <Container dynimage={img2} cctempof={ctempof} cdesc={desc} cnameof={nameof}  funcc={input}></Container>
            <Container dynimage={img3} cctempof={ctempof} cdesc={desc} cnameof={nameof} funcc={input}></Container>
<Container dynimage={img4} cctempof={ctempof} cdesc={desc} cnameof={nameof} funcc={input}></Container>
<Container dynimage={img5} cctempof={ctempof} cdesc={desc} cnameof={nameof} funcc={input}></Container>
<Container dynimage={img6} cctempof={ctempof} cdesc={desc} cnameof={nameof} funcc={input}></Container>
<Container dynimage={img8} cctempof={ctempof} cdesc={desc} cnameof={nameof} funcc={input}></Container>
<Container dynimage={img9} cctempof={ctempof} cdesc={desc} cnameof={nameof} funcc={input}></Container>
<Container dynimage={img10} cctempof={ctempof} cdesc={desc} cnameof={nameof} funcc={input}></Container>
<Container dynimage={img11} cctempof={ctempof} cdesc={desc} cnameof={nameof} funcc={input}></Container>
<Container dynimage={img12} cctempof={ctempof} cdesc={desc} cnameof={nameof} funcc={input}></Container>
<Container dynimage={img13} cctempof={ctempof} cdesc={desc} cnameof={nameof} funcc={input}></Container>
       </>
)

}