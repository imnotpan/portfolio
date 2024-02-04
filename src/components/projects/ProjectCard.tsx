import React, {  useRef } from 'react'
import TagElement from '../services/TagElement';
import { motion } from 'framer-motion';
import { useStoreOverview } from '../../store/StoreOverview';
import { useStoreProjects } from '../../store/StoreProjects';


interface props {
    headerTitle: string,
    mainTitle: string,
    description: string,
    mainImage: string,
    images: string[],
    tags: string[],
    redirectLink: string,

}



function ProjectCard (props: props): React.ReactNode {
    const ref = useRef(null);
    const setStateFullScreenOverview = useStoreOverview((state) => state.setStateFullScreenOverview);
    const dragged = useStoreProjects((state) => state.dragged);

    const setMainTitle = useStoreOverview((state) => state.setMainTitle);
    const setDescription = useStoreOverview((state) => state.setDescription);
    const setMainImage = useStoreOverview((state) => state.setMainImage);
    const setTags = useStoreOverview((state) => state.setTags);
    const setImages = useStoreOverview((state) => state.setImages);
    const redirectLink = useStoreOverview((state) => state.setRedirectLink);


    const onClick = ():void => {
        setStateFullScreenOverview(true)
        setMainTitle(props.mainTitle)
        setDescription(props.description)
        setMainImage(props.mainImage)
        setTags(props.tags)
        setImages(props.images)
        redirectLink(props.redirectLink)

    }   

    return (
        <section 
            ref={ref}
            onClick={() => {!dragged && onClick()}}
            
            id='items-card'
            className=' relative items-card border-1 border border-black border-l-0 max-h-[30rem]
                bg-white hover:bg-black hover:text-white group cursor-pointer z-10 overflow-x-hidden'>
            <motion.div 
              
                className='overflow-x-hidden w-full '>
                <div className='w-full my-3'>
                    <p className='text-sm  font-robotoslab font-semibold group-hover:font-nunito group-hover:font-bold group-hover:scrolling-text '>
                        {props.headerTitle}
                    </p>
                </div>
                <div className='overflow-hidden h-[10rem] max-h-[12rem] sm:h-[300px] md:h-[270px] '>
                    <img
                        onDragStart={(e) => {e.preventDefault()}} 
                        className='w-full border border-black group-hover:zoom-img ' src={props.mainImage} 
                        style={{ maxWidth: '100%', height: 'auto' }} /> 
                </div>
                <div className='p-2 flex flex-col'>
                    <p className='truncate font-nunito text-2xl font-bold my-1'> 
                        {props.mainTitle}
                    </p>
                    <p className='line-clamp-3 font-ibmmono my-4 white-space '>
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

