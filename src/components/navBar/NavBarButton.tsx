import React from 'react'

interface props{
    section: string
}

function NavBarButton (props: props): React.ReactNode {
    return (
        <a href={'#' + props.section} >
            <div className='mx-4 text-left justify-left font-nunito text-xl'>
                {props.section}
            </div>
        </a>
    );
}

export default NavBarButton

