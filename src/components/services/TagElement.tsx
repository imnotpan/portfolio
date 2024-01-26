import React from 'react'

interface props{
    name: string
}

function TagElement (props: props): React.ReactNode {
    return (
        <div className='border rounded-xl my-1 mx-1 hover:bg-black hover:border-white hover:text-white cursor-pointer'>
            <div className='mx-3'>
                <span className='font-ibmmono text-md '>
                    {props.name} 
                </span>
            </div>
        </div>
    );
}

export default TagElement

