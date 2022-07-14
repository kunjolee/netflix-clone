import { useState, ChangeEvent } from 'react';

export const useForm = <T> (initState: T) => {  
  const [form, setForm] = useState<T>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    })
  }
  

  return {    
    form, 
    handleChange,    
  };
}