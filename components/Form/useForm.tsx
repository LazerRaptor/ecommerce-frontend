import { useState } from 'react';


export const useForm = (initialValues) => {
  const initState = {
    ...initialValues,
    formIsValid: false,
    passwordShown: false
  }
  const [formState, setFormState] = useState({ ...initState })
  const handleOnChange = (e) => {
    const target = e.target
    const obj = { [target.name]: target.value }
    setFormState(Object.assign({}, formState, obj))
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
  }
  const toggleVisibility = () => setFormState(!formState.passwordShown)
  return {
    formState,
    handleOnChange, 
    handleOnSubmit,
    toggleVisibility
  }
}

