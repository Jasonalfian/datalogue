import React from 'react'
import BackgroundImage from "gatsby-background-image"
import Menu from '../Home/Menu'
import styled from "styled-components"

export default function BackgroundSection({
    img,
    styleClass,
    title,
    content,
    gambar,
    children}) {

    if(content==="yes"){   
    return (
        <BackgroundImage className={styleClass}
        fluid={img}>
            <div className="container">
            <HeroH1 className="text-white text-center">
                {title}
            </HeroH1>
            <Menu/>
            </div>
            {children}
        </BackgroundImage>
    )} if(content==="404"){   
        return (
            <BackgroundImage className={styleClass}
            fluid={img}>
                <div className="container">
                <h1 className="color-tosca text-center font-weight-bold">
                    {title}
                </h1>
                </div>
                {children}
            </BackgroundImage>
        )} else {
        return(
        <BackgroundImage className={styleClass}
        fluid={img}>
            <div className="container">
            <div className="row h-100 mb-3">
                <div className="columb mx-auto">
                <img src={gambar} alt="">
            </img>   
                </div>
            </div>
        
            <HeroH2 className="title text-white text-center font-weight-bold mb-4">
                {title}
            </HeroH2>

            <div className="row h-100">
                <div className="column mx-auto">
                {children}
                </div>
            </div>
            </div>
        </BackgroundImage>
        )
    }
}

BackgroundSection.defaultProps = {
    title:"default title",
    styleClass:"default-background"
}

const HeroH1 = styled.div`
    font-size: clamp(2.5rem, 7vw, 3rem);
    padding: 0 1 rem;
    font-weight:900;
`

const HeroH2 = styled.div`
    font-size: clamp(2rem, 7vw, 3rem);
    padding: 0 1 rem;
    font-weight:900;
`
