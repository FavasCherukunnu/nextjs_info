import React from 'react'

export interface ButtonStdType {
    title:string,
    varient?:'primary'
}

export function ButtonStd({
    title,
    varient='primary'
}:ButtonStdType) {
  
    switch (varient) {
        case 'primary':
                return (
                    <button className=' px-5 py-1 bg-primaryy-500 shadow-sm hover:bg-primaryy-600 text-white font-semibold '>{title}</button>
                )
    
        default:
            break;
    }

}
