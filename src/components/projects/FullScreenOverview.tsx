import React from 'react'
import {RemoveScroll} from 'react-remove-scroll';
import { useStoreOverview } from '../../store/StoreOverview';
import TagElement from '../services/TagElement';
import BackgroundPlanets from '../home/BackgroundPlanets';



function FullScreenOverview (): React.ReactNode {
    const setStateFullScreenOverview = useStoreOverview((state) => state.setStateFullScreenOverview);
    const mainTitle = useStoreOverview((state) => state.mainTitle);
    const mainDescription = useStoreOverview((state) => state.mainDescription);
    const tags = useStoreOverview((state) => state.tags);
    const mainImage = useStoreOverview((state) => state.mainImage);
    const images = useStoreOverview((state) => state.images);
    const redirectLink = useStoreOverview((state) => state.redirectLink);

    return (
        <RemoveScroll className='fixed z-50 bg-black h-screen w-screen flex '>
            <button 
                onClick={() => {setStateFullScreenOverview(false);}}
                className='absolute mix-blend-difference top-0 right-0 p-5 text-white text-xl font-flexa z-50 mr-5'>
                <div>
                    CLOSE
                </div>
            </button>


            <div className='relative w-1/2 bg-black flex'>

                <div className='absolute bottom-0 w-full text-left inset-x-2 
                                translate-x-[10%] translate-y-[-40%]'>
                    <p className='text-6xl text-white font-archivoblack w-[60%]'> {mainTitle} </p>    
                    <p className='text-base text-gray-400 font-ibmmono w-[70%] mt-24 '> {mainDescription} </p>    
                    <div className='flex '>
                        {tags.map((tag, index) => (
                            <div key={index} className='text-gray-300' >
                                <TagElement  
                                    name={tag}/>
                            </div>
                        ) )}
                    </div>
                </div>
            
            </div>
            <div className='w-1/2 bg-black h-full overflow-y-scroll overflow-x-hidden'>
                {images.map((img, index) => (
                    <img  
                        className=' grayscale hover:grayscale-0  hover:z-[200] opacity-25 hover:opacity-100' 
                        key={index} src={img}/>
                ) )}
            </div>
            <div className='absolute mix-blend-difference z-50 translate-x-[-50%] w-full h-full opacity-25'>
                <BackgroundPlanets/>
            </div>
        </RemoveScroll>
    );
}

export default FullScreenOverview


