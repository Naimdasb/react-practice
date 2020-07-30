import React from 'react'

const Validation = (props) => {
    
    return (
        <div>
            <p>{props.length < 5 ? 'text is too short' : 'text long enough'}</p>
        </div>
    )
}

export default Validation