import React, { Children } from 'react'
import Input from '../Input'
import { ReactComponent as Email } from '../../assets/svgs/email.svg'
import Button from '../Button'
import { CheckoutSectionLayout } from './CheckoutSectionLayout'


interface Props {
    value: string,
    // setEmail: React.Dispatch<React.SetStateAction<string>>
    handleEdit: (e: React.FormEvent) => void
    edit: boolean
    isEmailCorrect: boolean
    handleButtonClick: () => void
    unEdit: () => void
    showError: boolean
    children: JSX.Element
}

const FirstSection = ({ value, edit, handleEdit, isEmailCorrect , unEdit, handleButtonClick, showError,children}: Props) => {
    


    // const hadne = (e:React.FormEvent) => {
    //     const {name,value}: {name:string,value: string} = e.currentTarget
    // }
    return (
        <CheckoutSectionLayout number={1} title='Your Email' done={edit==false && isEmailCorrect }>
            <React.Fragment>


                <div className=' my-3  pl-2'>
                    {
                        isEmailCorrect && edit == false ?
                        <div className='flex justify-between '>
                        <p className=' '>{value}</p>
                        <button className='underline text-sm' onClick={e => unEdit()}> Edit</button>
                        </div>
                        :
                        <>
                         {children}
                                <>

                                <Input
                                    value={value}
                                    labelFor="Email"
                                    placeholder='JohnDoe@gmail.com'
                                    type='text'
                                    label=''
                                    handleChange={(e: React.FormEvent) => handleEdit(e)}
                                    showRedBorder={showError && !isEmailCorrect}
                                >
                                    <Email />
                                </Input>
                                <p className='text-red-400 text-[10px] mt-1'>{showError && !isEmailCorrect && "Invalid Email!"}</p>
                                    </>
                                <Button classname='w-full mt-6' onClick={e => handleButtonClick()}>
                                    Continue to Shipping
                                </Button>
                            </>
                            
                    }
                </div>
            </React.Fragment>
        </CheckoutSectionLayout>

    )
}

export default FirstSection