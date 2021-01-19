import React from "react"
import styled from "styled-components"

const OneDatasetEmpty = () => {

    return (
        <section className="section">
            <div className="d-flex align-items-center justify-content-center color-tosca font-weight-bold half-page">
                <div className="container">
                    <HeroH1 className="text-center">Maaf, belum ada dataset untuk kategori ini</HeroH1>
                </div>
            </div>
        </section>     
    )
}

export default OneDatasetEmpty

const HeroH1 = styled.div`
    font-size: clamp(1rem, 7vw, 3rem);
    padding: 0 1 rem;
    font-weight:600;
`