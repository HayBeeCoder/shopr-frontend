
import React, { useState } from 'react'
import Input from '../Input'
import { CheckoutSectionLayout } from './CheckoutSectionLayout'
import { ReactComponent as Card } from "../../assets/svgs/card.svg"
import Button from '../Button'

interface input {
  card_number: string,
  cvv: string,
  expiry_date: string
}

const initState = {
  card_number: '',
  cvv: "",
  expiry_date: ""

}

const ThirdSection = () => {
  const [input, setInput] = useState(initState)

  const handleInput = (e: React.FormEvent) => {
    let { name, value } = e.currentTarget as HTMLInputElement
    if (name == "card_number") {
      if (value.replaceAll(" ", '').length == 17) {
        value = value.trim()
      } else if (value.replaceAll(" ", "").length % 4 == 0) {
        value = new String(value + " ").toString()
      }
    }
    if(name == "cvv"){
      if(value.length > 3){
        value = input.cvv
      }
    }
    setInput({ ...input, [name]: value })
  }

  return (
    <CheckoutSectionLayout number={3} title='Payment Details' >
      < div className='space-y-7 mt-7'>
        <div>
          <Input
            value={input.card_number}
            label="Card Number"
            labelFor='card_number'
            handleChange={handleInput}
            placeholder="0000 0000 0000 0000"
            type='text'
          >
            <Card />
          </Input>
        </div>
        <div className='flex gap-8'>
          <Input
            label='Expiry Date'
            labelFor='expiry_date'
            handleChange={handleInput}
            placeholder="00/00"
            type='text'
            value={input.expiry_date}
          />
          <Input
            label='CVV'
            labelFor='cvv'
            handleChange={handleInput}
            placeholder="000"
            type='text'
            value={input.cvv}
          />
        </div>
        <Button classname='max-w-md mx-auto' >
          Review Order
        </Button>
      </div>
    </CheckoutSectionLayout>
  )
}

export default ThirdSection