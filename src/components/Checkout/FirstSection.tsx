import React from 'react'
import Input from '../Input'
import { ReactComponent as Email } from '../../assets/svgs/email.svg'
import Button from '../Button'
import { CheckoutSectionLayout } from './CheckoutSectionLayout'

interface Props {
    value: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>
}

const FirstSection = ({ value, setEmail }: Props) => {


    // const hadne = (e:React.FormEvent) => {
    //     const {name,value}: {name:string,value: string} = e.currentTarget
    // }
    return (
        <CheckoutSectionLayout number={1} title='Enter your Email'>
            <React.Fragment>

                <p className=' text-[10px] pl-2 -mt-1 text-primary-100'>Already have an accout? <span className='underline text-primary-800'>Login</span></p>

                <div className=' my-3 space-y-5 max-w-sm pl-2'>
                    <Input
                        value={value}
                        labelFor="Email"
                        placeholder='JohnDoe@gmail.com'
                        type='text'
                        label=''
                        handleChange={(e: React.FormEvent) => setEmail((e.target as HTMLInputElement).value)}
                    >
                        <Email />
                    </Input>
                    <Button>
                        Continue Shopping
                    </Button>
                </div>
            </React.Fragment>
        </CheckoutSectionLayout>

    )
}

export default FirstSection