import React from 'react'

interface props{
    image: string,
    name: string
}

function ImageCoverDesign (props: props): React.ReactNode {
    return (
        <img
            onDragStart={(e) => {e.preventDefault()}}  
            className='max-w-[32rem] grayscale hover:grayscale-0 zoom-img hover:z-50' src={props.image} alt={props.name}/>
    );
}

export default ImageCoverDesign
