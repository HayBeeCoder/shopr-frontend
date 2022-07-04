
import {PASSWORD_MESSAGE, REGEX_EMAIL,REGEX_PASSWORD}from "../constants"


function fieldValidator(name: string,value: string){
    value = value.trim()
// console.log(value)
    const helper:{[key: string]: string} = {
      // first_name: value == '' &&  value.length == 0 ? 'Enter a valid name' :  '',
      username: value == '' &&  value.length == 0 ? 'Enter a valid user name' :  '',
      email: REGEX_EMAIL.test(value)? '' :  'Enter a valid email',
      password: REGEX_PASSWORD.test(value) ? '' :  PASSWORD_MESSAGE,
    }

    return helper[name]
}

export  {fieldValidator}