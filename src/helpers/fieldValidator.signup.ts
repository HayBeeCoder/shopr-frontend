
import {REGEX_EMAIL,REGEX_PASSWORD}from "../constants"


function fieldValidator(name: string,value: string){
    value = value.trim()

    const helper:{[key: string]: string} = {
      first_name: value == '' &&  value.length == 0 ? 'Enter a valid name' :  '',
      last_name: value == '' &&  value.length == 0 ? 'Enter a valid name' :  '',
      email: REGEX_EMAIL.test(value)? '' :  'Enter a valid name',
      password: REGEX_PASSWORD.test(value) ? '' :  'Enter at least eight character with a mix of alphabets,numbers and special characters',
    }

    return helper[name]
}

export  {fieldValidator}