import React, { useEffect, useRef, useState } from 'react'
import DropdownInput from '../DropdownInput'

import Input from '../Input'
import { CheckoutSectionLayout } from './CheckoutSectionLayout'
import { useGetCountries } from '../../hooks/useGetCountries'
import Button from '../Button'


interface Input {
    country: string
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
    city: ""

};


const SecondSection = () => {
    const { loaded, countries } = useGetCountries();
    // index of the selected country , starts with 1 to select first country by default
    const [index, setIndex] = useState<number | undefined>(0);
    const selectRef = useRef<HTMLSelectElement>(null);
    const [input, setInput] = useState<Input>(initState);

    const handleInput = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setInput({ ...input, [name]: value });
    };


    useEffect(() => {
        const selectedCountryIndex = selectRef.current?.selectedIndex
        // subtracting 1 cos index of first option tag with country value is 1 buh array starts from 0
        setIndex(selectedCountryIndex && selectedCountryIndex - 1);
    }, [input.country]);




    return (
        <CheckoutSectionLayout number={2} title="Shipping Details">
            <div className='mt-7 pl-2 space-y-7'>
                <div className='flex gap-8 my-3'>

                    <Input
                        value={input.first_name}
                        handleChange={handleInput}
                        label="First Name"
                        labelFor='first_name'
                        placeholder='John'
                        type='text'

                    />
                    <Input
                        value={input.last_name}
                        handleChange={handleInput}
                        label="Last Name"
                        labelFor='last_name'
                        placeholder='Doe'
                        type='text'

                    />
                </div>
                <DropdownInput
                    handleChange={(e) => handleInput(e)}
                    labelFor='country'
                    label='country'
                    placeholder='Select your country'
                    selectref={selectRef} >
                    <option>Select your country</option>
                    {countries.map((item, index) => {
                        const { name } = item;
                        return <option value={name.toLowerCase()} key={index} className="w-full">{name}</option>;
                    })}
                </DropdownInput>
                <DropdownInput
                    handleChange={(e) => handleInput(e)}
                    labelFor='state'
                    label='State/Province/Region'
                    placeholder='Select your state'
                >
                    <option>Select your state</option>
                    {
                        input.country && !loaded && index != undefined && countries[index].states.map(state => {
                            const { name } = state;
                            return <option value={name.toLowerCase()}>{name}</option>;
                        })
                    }
                </DropdownInput>
                <div className='flex gap-8'>
                    <Input
                        label='City'
                        labelFor="city"
                        handleChange={handleInput}
                        placeholder=""
                        type='text'
                        value={input.city}
                    />
                    <Input
                        label='City'
                        labelFor="city"
                        handleChange={handleInput}
                        placeholder=""
                        type='text'
                        value={input.city}
                    />
                </div>
                <Button classname='max-w-md mx-auto'>
                    Continue to Payment
                </Button>
            </div>

        </CheckoutSectionLayout >
    )
}

export default SecondSection