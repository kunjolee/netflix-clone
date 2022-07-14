import { MouseEvent, useState } from 'react';
import { auth, createUserWithEmailAndPassword } from '../../firebase/';

import { useForm } from '../../hooks';
import { formValidation } from '../../utils';
import { SignInForm } from '../../interfaces/';

import "./SignUpScreen.css"

export const INITIAL_FORM = {
  email: "",
  pass: ""
}

const SignUpScreen = () => {
  const { form, handleChange } = useForm<SignInForm>(INITIAL_FORM);
  const [errors, setErrors] = useState<SignInForm | null>(null);
  
  const handleErrors = () =>{
    setErrors(formValidation(form));        
    if (formValidation(form).email || formValidation(form).pass) return true;    

    setErrors(null);
  }

  const register = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();      

    if (handleErrors()) return;

    console.log('pasas???')
    
    // createUserWithEmailAndPassword(auth, form.email, form.pass);    
  }  
  
  const signIn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (handleErrors()) return;

    console.log('aca tambien pasas?')

  }
      
  
  return (
    <div className="signUpScreen">
      <form className="signUpScreen__form">
        <h1>Sign In</h1>
        <input  
          type="email"    
          placeholder="Email" 
          value={form.email}           
          name='email'
          onChange={handleChange}          
          required
        />
        {errors?.email && <p className='signUpScreen__validations signUpScreen__validations--email'>{errors.email}</p>}
        <input  
          type="password" 
          placeholder="password" 
          autoComplete="on" 
          value={form.pass}
          name='pass'
          onChange={handleChange}
          required
          />
        {errors?.pass && <p className='signUpScreen__validations'>{errors.pass}</p>}
        <button         
          type="submit"   
          onClick={signIn}
        >
          Sign In
        </button>        
        <h4>
          <span className="signUpScreen__gray">New to Netflix? </span>
          <span className="signUpScreen__link" onClick={register}>Sign Up now</span>          
        </h4>
      </form>
    </div>
  )
}
export default SignUpScreen