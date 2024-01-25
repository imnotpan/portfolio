import React from 'react'
import {Link} from 'react-scroll'

function NavBar (): React.ReactNode {
    return (
        <div className='fixed flex w-full z-50'>
            <nav className='mx-auto w-full'>
                <ul className=' bg-white flex space-x-5 justify-center items-center font-nunito text-xl mb-1'>
                    <li className='hover:bg-yellow-400 hover:text-white'>
                        <Link to='home'>
                            <div className='mt-4 mb-1 mx-2'>
                                home
                            </div>
                        </Link>
                    </li>
                    <li className='hover:bg-yellow-400 hover:text-white'>
                        <Link to='about'>
                            <div className='mt-4 mb-1 mx-2'>
                                about
                            </div>
                        </Link>
                    </li>
                    <li className='hover:bg-yellow-400 hover:text-white'>
                        <Link to='home'>
                            <div className='mt-4 mb-1 mx-2'>
                                    projects
                            </div>
                        </Link>
                    </li>
                    <li className='hover:bg-yellow-400 hover:text-white'>
                        <Link to='works'>
                            <div className='mt-4 mb-1 mx-2'>
                                works
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
     
        </div>
    );
}

export default NavBar

