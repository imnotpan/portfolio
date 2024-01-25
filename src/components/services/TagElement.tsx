import React from 'react'

interface props{
    name: string
}

function TagElement (props: props): React.ReactNode {
    return (
        <div className='bg-black rounded my-1 mx-1'>
            <div className='mx-3 '>
                <span className='font-nunito font-thin text-md  text-gray-200'>
                    {props.name} 
                </span>
            </div>
        </div>
    );
}

export default TagElement

