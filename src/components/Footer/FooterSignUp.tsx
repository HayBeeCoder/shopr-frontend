import React, { useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import { REGEX_EMAIL } from '../../constants'

const FooterSignUp = ({}) => {
  const [input, setInput] = useState("")
  const [showError, setShowError] = useState(false)
  const [edit, setEdit] = useState(true)
  const handleChange = (e: React.FormEvent) => {
    const { value } = e.target as HTMLInputElement
    
    setInput(value)

  }

  const handleOnsubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (REGEX_EMAIL.test(input)) {
      setShowError(false)
      setEdit(false)
    } else {
      setShowError(true)
    }

  }


  return (
    <div>
      <p className='text-xl mb-4 leading-none'>Subscribe to our newsletter to get latest updates on available products</p>
      {
        edit ? 
      <form action="" onSubmit={handleOnsubmit} className="space-y-3">
        <div>

          <Input
            label=''
            placeholder='JohnDoe@gmail.com'
            type='text'
            value={input}
            labelFor="email"
            showRedBorder={showError}
            handleChange={handleChange} />
            
          {showError && <p className='text-red-400 text-xs mt-[4px]'>Invalid Email!</p>}
        </div>

        <Button>Subscribe</Button>
      </form> :
      <p className='text-xs font-semibold'> You have successfully subscribed :)</p>
      }
    </div>
  )
}

export default FooterSignUp