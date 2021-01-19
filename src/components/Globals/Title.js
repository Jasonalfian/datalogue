import React from 'react'
import styled from 'styled-components'

export default function Title({title}) {
    return (
        <div className="row">
            <div className="col text-center mb-3">
                <HeroH1 className="font-weight-bold">{title}</HeroH1>
            </div>
        </div>
    )
}

const HeroH1 = styled.div`
    font-size: clamp(2.5rem, 7vw, 3rem);
    padding: 0 1 rem;
`