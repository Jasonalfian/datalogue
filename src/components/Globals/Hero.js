import React from 'react'
import BackgroundImage from "gatsby-background-image"
import Menu from '../Home/Menu'

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
            <div class="container">
            <h1 className="text-white text-center font-weight-bold">
                {title}
            </h1>
            <Menu/>
            </div>
            {children}
        </BackgroundImage>
    )} if(content==="404"){   
        return (
            <BackgroundImage className={styleClass}
            fluid={img}>
                <div class="container">
                <h1 className="color-tosca text-center font-weight-bold">
                    {title}
                </h1>
                <Menu/>
                </div>
                {children}
            </BackgroundImage>
        )} else {
        return(
        <BackgroundImage className={styleClass}
        fluid={img}>
            <div class="container">
            <div className="row h-100 mb-3">
                <div className="columb mx-auto">
                <img src={gambar}>
            </img>   
                </div>
            </div>
        
            <h1 className="title text-white text-center font-weight-bold mb-4">
                {title}
            </h1>

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