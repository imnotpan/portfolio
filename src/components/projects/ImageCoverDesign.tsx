import React from 'react'
import { useStoreProjects } from '../../store/StoreProjects';

interface props{
    image: string,
    name: string,
    coverIndex: number
}

function ImageCoverDesign (props: props): React.ReactNode {
    const currentCover = useStoreProjects((state) => state.currentCover)

    const setCurrentCover = useStoreProjects((state) => state.setCurrentCover)

    return (
        <div
            onMouseEnter={() => {setCurrentCover(props.coverIndex)}}
            className='cover-art relative group/cover'>
            {currentCover === props.coverIndex &&  <div className='w-full h-full'>
                <p className=' left-0 p-5 bottom-0 absolute z-[120] font-archivoblack 
                                mix-blend-difference text-white text-7xl'> 
                    {props.name}
                </p>
            </div>}
            <img
                className='w-[screen] grayscale ' src={props.image} alt={props.name}/>
        </div>
    );
}

export default ImageCoverDesign