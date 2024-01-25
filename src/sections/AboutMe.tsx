import React from 'react'

function NavBar (): React.ReactNode {
    return (
        <div id='about' className='bg-black relative'>
            <div className='my-4  mx-24 lg:mx-64 '>
                <span className='text-white font-archivoblack text-4xl'> 
                    HEY! 
                </span>
                <p className='text-gray-300 text-xl'>
                    I began my journey into video game development at the age of 15, creating games 
                    for platforms like Newgrounds as a hobby. In 2019, I enrolled at the Austral University 
                    of Chile with a focus on software development.
                </p>
                <p className='text-gray-400 text-xl mt-2'> 
                    In 2020, I expanded my skills to the realm of digital design and illustration. 
                    I started working on visualizers for Lollapalooza Chile, creating cover art, 
                    and producing animated music videos for both national and international artists.
                </p>
            </div>
        </div>
    );
}

export default NavBar
