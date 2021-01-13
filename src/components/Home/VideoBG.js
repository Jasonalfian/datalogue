import React from 'react'
import styled from "styled-components"
import videogif from "../../images/ending-min.gif"

const VideoBG = () => {
    return (
        <HeroContainer>
            {/* <LazyLoad> */}
            <div data-sal="fade" data-sal-duration="1000" data-sal-easing="ease" >
            <HeroBG>
                <img className = "videobg" src={videogif} alt=""/>
                {/* <video className="videobg" src={videos} type='video/mp4' loop muted autoPlay playsInline/> */}
            </HeroBG>
            </div>
            {/* </LazyLoad> */}
            <HeroContent>
                <HeroItems>
                    <HeroH1 data-sal="fade" data-sal-duration="1000" data-sal-easing="ease">
                        datalogue
                    </HeroH1>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    //     <div>
    //         <video src={video} type="video/mp4" loop muted autoPlay playsInLine></video>
    //     </div>
    )
}

export default VideoBG

const HeroContainer = styled.div`
    background: #fff;
    display:flex;
    justify-content: center;
    align-items: center;
    color: #000;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
`
const HeroBG = styled.div`
    position: absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    width:100%;
    height:100%;
    overflow: hidden;
`

const HeroContent = styled.div`
    z-index: 3;
    height: calc(100vh-80px);
    max-height: 100%100vh;
    padding: 0rem calc((100vw-1300px)/2);
`
const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;
    height:100vh;
    max-height:100%;
    padding:0;
    color:#000;
    line-height: 1.1;
    font-weight: bold;
`
const HeroH1 = styled.div`
    font-size: clamp(3rem, 8vw, 6rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    padding: 0 1 rem;
`