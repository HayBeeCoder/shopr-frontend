import React, { useEffect, useRef, useState } from 'react'
import DropdownInput from '../DropdownInput'

import Input from '../Input'
import { CheckoutSectionLayout } from './CheckoutSectionLayout'
import { useGetCountries } from '../../hooks/useGetCountries'
import Button from '../Button'
import { setDefaultResultOrder } from 'dns/promises'
import validateForm from '../../features/auth/formValidator'
// import { } from '../../helpers/capitaliz'



interface IInput {
    country: string
    address: string
    state: string
    first_name: string
    last_name: string
    city: string
    // postalCode: string;
    // address: string;
}
const initState = {
    country: "",
    state: "",
    first_name: "",
    last_name: "",
    city: "",
    address: ""

};

interface IError {
    country: boolean
    address: boolean
    state: boolean
    first_name: boolean
    last_name: boolean
    city: boolean
}

const InitialErrorState = {
    country: true,
    address: true,
    state: true,
    first_name: true,
    last_name: true,
    city: true,
}

interface IProps {
    edit: boolean
    isEmailCorrect: boolean
    isSecondDone: boolean
    setIsSecondDone: React.Dispatch<React.SetStateAction<boolean>>
}




const SecondSection = ({ edit, isEmailCorrect, isSecondDone, setIsSecondDone }: IProps) => {
    const { loaded, countries } = useGetCountries();
    // index of the selected country , starts with 1 to select first country by default
    const [index, setIndex] = useState<number | undefined>(0);
    const selectRef = useRef<HTMLSelectElement>(null);
    const [showError, setShowError] = useState(false)
    const [input, setInput] = useState<IInput>(initState);
    const [err, setErr] = useState<IError>(InitialErrorState)

    const handleInput = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        if (value == "") setErr({ ...err, [name]: true })
        else setErr({ ...err, [name]: false })
        setInput({ ...input, [name]: value });
        //  (e.target as HTMLInputElement).focus()
    };

    const handleSubmit = () => {
        // if()
        const valid = validateForm<IError, IInput>(err, input)
        if (valid) {
            // proceed()
            // alert("And now you are done dear!")
            setShowError(false)
            setIsSecondDone(true)
        } else {
            //do not proceed()
            setShowError(true)
        }

    }

    useEffect(() => {
        const selectedCountryIndex = selectRef.current?.selectedIndex
        // subtracting 1 cos index of first option tag with country value is 1 buh array starts from 0
        setIndex(selectedCountryIndex && selectedCountryIndex - 1);
    }, [input.country]);



    const EditVersion = () => {
        return
    }


    const DoneVersion = () => {

        return <>
            <div className='flex justify-between gap-10'>
                <div className="space-y-2">

                    <p className='text-sm'>
                        <span className='font-semibold pr-4'>
                            First Name:
                        </span>
                        {" "}
                        {input.first_name}
                    </p>
                    <p className="text-sm">


                        <span className='font-semibold pr-4'>
                            Last Name:
                        </span>
                        {" "}
                        {input.last_name}
                    </p>
                    <p className='text-sm'>
                        <span className='font-semibold pr-4'>
                                Country:
                        </span>
                         {input.country}
                    </p>
                    <p className="text-sm">
                        <span className='font-semibold pr-4'>

                            State/Province/Region:

                        </span>{' '}
                        {input.state}
                    </p>
                    <p className='text-sm'>

                        <span className='font-semibold pr-4'>

                            City:
                        </span>
                        {" "}
                        {input.city}
                    </p>
                    <p className='text-sm'> 
                        <span className='font-semibold pr-4'>
                            Address:
                        </span>
                        {input.address}
                    </p>
                </div>
                <button className='flex-shrink-0 underline text-sm' onClick={e => setIsSecondDone(false)}> Edit</button>
            </div>
        </>
    }












    return (
        <div id="shipping">

            <CheckoutSectionLayout number={2} title="Shipping Details" done={isSecondDone}>
                <div className='mt-7 pl-2 space-y-7'>
                    {
                        isEmailCorrect && edit == false &&
                        <>
                            {
                                isSecondDone ?
                                    (
                                        <DoneVersion />
                                    ) :
                                    <>
                                        <div className='flex gap-8 my-3'>
                                            <div className='flex-grow'>

                                                <Input
                                                    value={input.first_name}
                                                    handleChange={handleInput}
                                                    label="First Name"
                                                    labelFor='first_name'
                                                    placeholder='John'
                                                    type='text'
                                                    showRedBorder={showError && err.first_name}


                                                    

                                                />
                                                {showError && err.first_name && (<p className='text-red-400 text-[10px] mt-1'> No Input!</p>)}

                                            </div>
                                            <div className='flex-grow'>

                                                <Input
                                                    value={input.last_name}

                                                    handleChange={handleInput}
                                                    label="Last Name"
                                                    labelFor='last_name'
                                                    placeholder='Doe'
                                                    type='text'
                                                    showRedBorder={showError && err.last_name}


                                                />
                                                {showError && err.last_name && (<p className='text-red-400 text-[10px] mt-1'> No Input!</p>)}
                                            </div>
                                        </div>
                                        <div>

                                            <DropdownInput
                                                handleChange={(e) => handleInput(e)}

                                                labelFor='country'
                                                label='Country'
                                                value={input.country}
                                                placeholder='Select your country'
                                                selectref={selectRef} >
                                                <option value="">Select your country</option>
                                                {countries.map((item, index) => {
                                                    const { name } = item;
                                                    return <option value={name} key={index} className="w-full">{name}</option>;
                                                })}
                                            </DropdownInput>
                                            {showError && err.country && (<p className='text-red-400 text-[10px] mt-1'> Select a country please!</p>)}
                                        </div>
                                        <div>
                                            <DropdownInput
                                                handleChange={(e) => handleInput(e)}
                                                labelFor='state'
                                                value={input.state}
                                                label='State/Province/Region'
                                                placeholder='Select your state'
                                            >
                                                <option value="">Select your state</option>
                                                {
                                                    input.country && !loaded && index != undefined && countries[index].states.map((state, index) => {
                                                        const { name } = state;
                                                        return <option key={index} value={name}>{name}</option>;
                                                    })
                                                }
                                            </DropdownInput>
                                            {showError && err.state && (<p className='text-red-400 text-[10px] mt-1'> Select a state please!</p>)}
                                        </div>
                                        <div className='flex gap-8'>
                                            <div className='flex-grow'>

                                                <Input
                                                    label='City'
                                                    labelFor="city"
                                                    handleChange={handleInput}
                                                    placeholder=""
                                                    type='text'
                                                    showRedBorder={showError && err.city}
                                                    value={input.city}

                                                />

                                                {showError && err.city && (<p className='text-red-400 text-[10px] mt-1'> No Input!</p>)}

                                            </div>
                                            <div className="flex-grow">
                                                <Input
                                                    label='Address'
                                                    labelFor="address"

                                                    handleChange={handleInput}
                                                    placeholder=""
                                                    type='text'
                                                    showRedBorder={showError && err.address}
                                                    value={input.address}

                                                />
                                                {showError && err.address && (<p className='text-red-400 text-[10px] mt-1'> No Input!</p>)}
                                            </div>
                                        </div>
                                        <Button classname='w-full ' onClick={handleSubmit}>
                                            Continue to Payment
                                        </Button>
                                    </>


                            }
                        </>
                    }

                </div>

            </CheckoutSectionLayout >
        </div >
    )
}

export default SecondSection