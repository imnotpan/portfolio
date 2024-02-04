import React from 'react'

interface props{
    image: string,
    name: string
}

function ImageCoverDesign (props: props): React.ReactNode {
    return (
        <div className='relative group/cover'>
            <div className='w-full h-full hidden group-hover/cover:block '>
                <p className=' left-0 p-5 bottom-0 absolute z-[120] font-archivoblack 
                                mix-blend-difference text-white text-7xl'> 
                    {props.name}
                </p>
            </div>
            <img
                className='w-[screen] group-hover/cover:zoom-img  grayscale group-hover/cover:grayscale-0  group-hover/cover:z-[100]' src={props.image} alt={props.name}/>
        </div>
    );
}

export default ImageCoverDesign
