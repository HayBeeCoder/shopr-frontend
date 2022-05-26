/* Helper functions used exlusively by 
the files in this directory */
interface Error {
    first_name: string,
  last_name: string,
  email: string,
  password: string
  }
  
  interface Account {
    first_name: string,
  last_name: string,
  email: string,
  password: string
  }
  
  const validateForm = (error: Error,account: Account) => {
    let valid = true;
    // if any of error object properties value is true, valid will be set to false
    // Hence the form in invalid
    Object.values(error).forEach(
      (err) => {
        if(err.length > 0) valid = false
      }
      // err && (valid = false)
    );
    Object.values(account).forEach(item => {
      if( item.length <= 0) valid = false
    })
    return valid;
  };
  
  export default  validateForm;
  