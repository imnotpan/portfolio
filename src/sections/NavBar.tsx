import React, { useEffect } from 'react'
import NavBarButton from '../components/navBar/NavBarButton';

function NavBar (): React.ReactNode {
    useEffect(() => {
        const handleScroll = (): void => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('header nav a');

            sections.forEach(sec => {
                const top = window.scrollY;
                const offset = sec.offsetTop;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector('header nav a[href*=' + id + ']')?.classList.add('active');
                    });
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header className='fixed z-50  hidden md:block lg:block top-[15%]'>
            <nav className=' bg-white flex flex-col '>
                <NavBarButton section='home'/>
                <NavBarButton section='about'/>
                <NavBarButton section='services'/>
                <NavBarButton section='projects'/>
            </nav>
        </header>
    );
}

export default NavBar

