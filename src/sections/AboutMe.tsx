import React from 'react'

function NavBar (): React.ReactNode {
    return (
        <section id='about' className='w-full flex bg-black z-5'>

            <div className=' relative z-20 border border-2 border-black border-r-gray-800'>
                <p className='my-10 text-gray-300 text-xl font-ibmmono text-base ml-16 mr-4 text-right'>
                Started game development at 15 on platforms like Newgrounds. Enrolled at 
                Austral University in 2019, expanded to digital design in 2020, creating 
                visualizers for Lollapalooza, cover art, and animated music videos for 
                national/international artists.
                </p>
            </div>
            <div className='relative break-all	'>
                <p className='font-archivoblack text-white text-7xl md:text-base mt-10 mb-4 mr-16 '> ABOUT  </p>
            </div>

        </section>
    );
}

export default NavBar
