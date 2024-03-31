import { ButtonStd } from '@/app/components/buttons'
import { InputStd } from '@/app/components/inputs'
import React from 'react'

export function LoginForm() {
    
    

    return (
        <div className=' flex flex-col gap-2'>
            <InputStd title='Username' />
            <InputStd title='Password' />
            <div className=' flex justify-end'>
                <ButtonStd title='Login' />
            </div>
        </div>
    )
}
