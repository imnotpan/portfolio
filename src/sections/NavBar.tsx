import React, { useEffect, useRef, useState } from 'react'
import NavBarButton from '../components/navBar/NavBarButton';

function NavBar (): React.ReactNode {
    const [currentSection, setCurrentSection] = useState<string>('home');
    const navLinkElsRef = useRef<NodeListOf<Element> | null>(null);
    const sectionElsRef = useRef<NodeListOf<Element> | null>(null);
  
    useEffect(() => {
        navLinkElsRef.current = document.querySelectorAll('.nav__link');
        sectionElsRef.current = document.querySelectorAll('.section__page');
        setCurrentSection('home')
    }, []);

    const handleMouseScroll = ():void => {
        sectionElsRef.current?.forEach((sectionEl) => {
            const element = sectionEl as HTMLElement;
            if (
                window.scrollY >= element.offsetTop &&
                window.scrollY !== 0 &&
                window.scrollY + window.innerHeight <= window.document.body.clientHeight - 100
            ) {
                setCurrentSection(sectionEl.id);
            } else if (window.scrollY === 0) {
                setCurrentSection('home');
            } else if ((window.scrollY + window.innerHeight) >= window.document.body.clientHeight - 100) {
                setCurrentSection('projects');
            }


        });

        navLinkElsRef.current?.forEach((navLinkEl) => {
            const href = (navLinkEl as HTMLElement ).id;
            if (href.includes(currentSection)) {
                document.querySelector('.active')?.classList.remove('active');
                navLinkEl.classList.add('active');
            }
        });
    }
    

    useEffect(() => {        
        window.addEventListener("scroll", handleMouseScroll);
        return () => {
            window.removeEventListener("scroll", handleMouseScroll);
        };
    }, [handleMouseScroll]);
    



    return (
        <header
            className='fixed z-50  hidden md:block lg:block top-[15%]'>
            <nav className=' bg-white flex flex-col '>
                <NavBarButton setCurrentSection={setCurrentSection} section='home'/>
                <NavBarButton setCurrentSection={setCurrentSection} section='about'/>
                <NavBarButton setCurrentSection={setCurrentSection} section='services'/>
                <NavBarButton setCurrentSection={setCurrentSection} section='projects'/>
            </nav>
        </header>
    );
}

export default NavBar

