/* Helper functions used exlusively by 
the files in this directory */
interface Error {
    // first_name: string,
  username: string,
  email: string,
  password: string
  }
  
  interface Account {
    username: string,
  // last_name: string,
  email: string,
  password: string
  }
  
  function validateForm<T,U>(error: T,account: U): boolean  {
    let valid = true;
    // if any of error object properties value is true, valid will be set to false
    // Hence the form in invalid
    console.log(error,account)
    Object.values(error).forEach(
      (err) => {
        if(err.length > 0) valid = false
        if(typeof err == "boolean" && err) valid = false
      }
      // err && (valid = false)
    );
    Object.values(account).forEach(item => {
      if( item.length <= 0) valid = false
    })
    return valid;
  };
  
  export default  validateForm;
  