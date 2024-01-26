import React from 'react'
import {Link} from 'react-scroll'

function NavBar (): React.ReactNode {
    return (
        <div className='fixed z-50  hidden md:block lg:block top-[15%]'>
            <ul className=' bg-white flex flex-col text-left justify-left font-nunito text-xl'>
                <Link to='home'>
                    <li className='hover:bg-yellow-400 hover:cursor-pointer hover:text-white'>
                        <div className='mx-4'>
                            home
                        </div>
                    </li>
                </Link>
                <Link to='about'>
                    <li className='hover:bg-yellow-400 hover:cursor-pointer hover:text-white'>
                        <div className='mx-4'>
                            about
                        </div>
                    </li>
                </Link>
                <Link to='services'>
                    <li className='hover:bg-yellow-400 hover:cursor-pointer hover:text-white'>
                        <div className='mx-4'>
                            services
                        </div>
                    </li>
                </Link>
                <Link to='projects'>
                    <li className='hover:bg-yellow-400 hover:cursor-pointer hover:text-white'>
                        <div className='mx-4'>
                        projects
                        </div>
                    </li>
                </Link>
                <Link to='works'>
                    <li className='hover:bg-yellow-400 hover:cursor-pointer hover:text-white'>
                        <div className='mx-4'>
                        works
                        </div>
                    </li>
                </Link>
            </ul>
     
        </div>
    );
}

export default NavBar

