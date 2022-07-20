import { SignInForm } from '../interfaces';


export const formValidation = (form: SignInForm) => {

  let errors: SignInForm = { email: '', pass: ''};  
  let emailExp = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    
  if (!emailExp.test(form.email.trim())) {    
    errors.email = 'Invalid email';
  } if (!form.email) {    
    errors.email = 'Email required';
  } else if (!form.pass) {    
    errors.pass = 'Pass required';
  } else if (form.pass.length < 6){
    errors.pass = 'Password should be at least 6 characters';    
  }else {
    errors.email = '';
    errors.pass = '';
  }
  
  return errors;
}



