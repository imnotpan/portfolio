import React from 'react'

function NavBar (): React.ReactNode {
    return (
        <footer className='relative flex bg-black text-white'>
            <div className='w-1/2'>
                <p>© 2023 Imnotapan All Rights Reserved</p>
            </div>
            <div className='w-1/2 text-right'>
                <p>Designed and developed by me 😴</p>
            </div>
        </footer>
    );
}

export default NavBar
