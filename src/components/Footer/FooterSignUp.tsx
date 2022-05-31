import React, { useState } from 'react'
import Input from '../Input'
import Button from '../Button'

const FooterSignUp = () => {
  const [input, setInput] = useState("")
  const handleChange = (e: React.FormEvent) => {
    const { name, value } = e.target as HTMLInputElement

    setInput(value)

  }
  return (
    <div>
      <p className='text-xl mb-4 leading-none'>Sign up to get latest updates on available products</p>
      <form action="" onSubmit={() => { }} className="space-y-3">
        <Input
          label=''
          placeholder='JohnDoe@gmail.com'
          type='text'
          value={input}
          labelFor="email"
          handleChange={handleChange} />
        <Button>Sign Up</Button>
      </form>
    </div>
  )
}

export default FooterSignUp