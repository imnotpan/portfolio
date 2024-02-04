import React from 'react'

interface props{
    section: string;
    setCurrentSection: (section: string) => void;
}

function NavBarButton (props: props): React.ReactNode {


    return (
        <a 
            onClick={() => {props.setCurrentSection(props.section)}}
            className='nav__link' 
            id={'#' + props.section} 
            href={'#' + props.section} >
            <div className='mx-4 hover:underline text-left justify-left font-nunito text-xl'>
                {props.section}
            </div>
        </a>
    );
}

export default NavBarButton

