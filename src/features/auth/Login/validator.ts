
import {REGEX_EMAIL,REGEX_PASSWORD}from "../../../constants"


function fieldValidator(name: string,value: string){
    value = value.trim()
    const helper:{[key: string]: string} = {
      username: value == '' &&  value.length == 0 ? 'Enter a valid user name' :  '',
     
      password: REGEX_PASSWORD.test(value) ? '' :  'Enter at least eight character with a mix of alphabets,numbers and special characters',
    }

    return helper[name]
}

export  {fieldValidator}