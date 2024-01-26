import React from 'react'
import TagElement from '../services/TagElement';

interface props{
    img: string,
    headertitle: string,
    maintitle: string,
    description: string,
    tags: string[]
}

function ProjectCard (props: props): React.ReactNode {
    
    return (
        <div className='w-[54rem] border border-black border-l-0  bg-white hover:bg-black 
                        hover:text-white cursor-pointer '>
            <div className='w-full'>
                <div className='my-2'>
                    <p className='text-sm font-robotoslab font-semibold hover:font-nunito'>
                        {props.headertitle}
                    </p>
                </div>
                <div className='overflow-hidden md:h-[18vw] h-[160px] ]'> {/* Agrega la propiedad overflow:hidden */}
                    <img className='w-full border border-black zoom-img' src={props.img} 
                        style={{ maxWidth: '100%', height: 'auto' }} /> 
                </div>
                <div className='p-2'>
                    <p className='font-nunito text-2xl font-bold my-1'> 
                        {props.maintitle} - PROTOTYPE
                    </p>
                    <p className='font-ibmmono my-4'>
                        {props.description}
                    </p>
                </div>  
                <div className='flex'>
                    {props.tags.map((tag)=>
                        <>
                            <TagElement name={tag} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard

