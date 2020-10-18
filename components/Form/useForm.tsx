import { useState } from 'react';


export const useForm = (initialValues) => {
  const [formState, setFormState] = useState({ ...initialValues })
  const handleOnChange = (e) => {
    const target = e.target
    const obj = { [target.name]: target.value }
    setFormState(Object.assign({}, formState, obj))
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
  }
  return {
    formState,
    handleOnChange, 
    handleOnSubmit
  }
}

