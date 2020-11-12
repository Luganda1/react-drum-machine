import React from 'react'

export default function Button({name, handleClick, drumKey, src}) {
    return (
        <button 
        onClick={() => handleClick(name, drumKey)}
        className="drum-pad"
        >{drumKey}
        <audio src={src} className="clip" id={drumKey}/>
        </button>

    )
}
