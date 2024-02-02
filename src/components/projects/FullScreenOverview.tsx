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
    const images = useStoreOverview((state) => state.images);
    const redirectLink = useStoreOverview((state) => state.redirectLink);

    return (
        <RemoveScroll className='fixed z-50 bg-black h-screen w-screen flex flex-col md:flex-row overflow-y-auto'>
            <button 
                onClick={() => {setStateFullScreenOverview(false)}}
                className='absolute mix-blend-difference top-0 right-0 text-white text-xl font-alexa p-5'> 
                <div>
                    CLOSE
                </div>
            </button>

            <div className=' md:ml-24 ml-12 justify-center items-center mb-24 w-[70%] md:w-2/5'>
                <p className='text-white text-5xl font-archivoblack'> {mainTitle} </p>
                <p className='text-white font-ibmmono mt-4 mb-4'> {mainDescription} </p>
                <a 
                    className='text-white font-ibmmono text-2xl'
                    href={redirectLink} 
                    target='_blank' 
                    rel="noreferrer"> 
                    {'> REDIRECT LINK'} 
                </a>
                <div className='flex mt-5'>
                    {tags.map((tag, index) => (
                        <div key={index} className='text-gray-300' >
                            <TagElement  
                                name={tag}/>
                        </div>
                    ) )}
                </div>
            </div>
            <div className=' flex flex-col md:overflow-y-auto h-full  bg-black'>
                {images.map((img, index) => (
                    <img  
                        key={index}
                        className=' grayscale hover:grayscale-0  hover:z-[200] opacity-25 hover:opacity-100' 
                        style={{ maxWidth: '100%', height: 'auto'  }}
                        src={img}/>
                ) )}
            </div>
        </RemoveScroll>
    );
}

export default FullScreenOverview


