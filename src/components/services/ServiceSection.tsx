import React from 'react'
import TagElement from './TagElement';

interface props{
    topMainName: string,
    bottomMainName: string,
    name: string
    tags: string[]
}

function ServiceSection (props: props): React.ReactNode {
    return (
        <div className='flex sm:flex-row flex-col w-full mt-8'>
            <p className='font-bold text-xl mr-16 w-10 lg:w-32 ml-4'> 
                {props.topMainName} 
                <br/>
                {props.bottomMainName}
            </p>
            <div className='sm:mx-4'>
                <p className='font-ibmmono ml-4 sm:ml-0 text-sm truncate'>  {props.name} </p>
                <div className='flex'>
                    <p className='hidden sm:block mt-1 font-bold'> TOOLS </p>
                    {props.tags.map((tag, index) => (
                        <TagElement key = {index} name={tag} />
                    ))}
                </div>
             
            </div>
        </div>
    );
}

export default ServiceSection

