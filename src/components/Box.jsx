import React, {useState} from 'react'

const Box = (props) => {

    const {color, size, num} = props

    return (
        <>
            <div style={{backgroundColor: color, width: size+"px", height: size+"px"}}>Box {num}</div>
        </>
        
    )
}

export default Box