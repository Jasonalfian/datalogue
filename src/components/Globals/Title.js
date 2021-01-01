import React from 'react'

export default function Title({title}) {
    return (
        <div className="row">
            <div class="col text-center mb-3">
                <h1 className="font-weight-bold">{title}</h1>
            </div>
        </div>
    )
}
