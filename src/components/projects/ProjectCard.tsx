import React from 'react'
import TagElement from '../services/TagElement';
import { motion } from 'framer-motion';

interface props{
    img: string,
    headertitle: string,
    maintitle: string,
    description: string,
    tags: string[]
}

function ProjectCard (props: props): React.ReactNode {
    
    return (
        <section className='min-w-[35rem]  max-w-[35rem] border border-black border-l-0  bg-white hover:bg-black 
                        hover:text-white group cursor-grab '>
            <motion.div className='overflow-x-hidden w-full h-full'>
                <div className='w-full my-3'>
                    <p className='text-sm font-robotoslab font-semibold group-hover:font-nunito group-hover:font-bold group-hover:scrolling-text '>
                        {props.headertitle}
                    </p>
                </div>
                <div className='overflow-hidden md:h-[15vw]  ]'> {/* Agrega la propiedad overflow:hidden */}
                    <img
                        onDragStart={(e) => {e.preventDefault()}} 
                        className='w-full border border-black zoom-img ' src={props.img} 
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
            </motion.div>
        </section>
    );
}

export default ProjectCard

