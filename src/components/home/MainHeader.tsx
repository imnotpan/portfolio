import React from 'react'
import LittleResume from './LittleResume';


function MainHeader (): React.ReactNode {



    return (
        <div className='absolute w-full h-full text-left md:text-center lg:text-center z-50 md:z-10'>
            <div className='leading-null break-words '>
                <div className='w-full bg-yellow-400'>
                    <p className='text-xl lg:mr-[700px] ml-[2%]'>
                        i&apos;m &lt;
                        <span className='font-bold'>Kevin Medina</span>
                        &gt;
                    </p>
                </div>
                <div className='text-6xl sm:text-7xl md:text-9xl lg:text-9xl  ml-2 md:ml-0'>
                    <p className='font-archivoblack text-wrap '>DEVELOPER</p>
                    <p className=' font-archivoblack md:text-8xl lg:text-9xl  webkit-text-blue-500 outline-text'>
                        & DESIGNER.
                    </p>
                </div>
                <div className='w-1/2  ml-2 md:ml-0 text-xl block md:hidden '>
                    <LittleResume/>
                </div>
            </div>
        </div>

    );
}

export default MainHeader
