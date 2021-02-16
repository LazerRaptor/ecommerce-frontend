import { useState } from "react";

export const useForm = (initialValues) => {
  const initState = {
    ...initialValues,
    formIsValid: false,
    passwordShown: false,
  };
  const [formState, setFormState] = useState({ ...initState });
  const handleOnChange = (e) =>
    setFormState({ ...formState, [e.target.name]: e.target.value });
  const handleOnSubmit = (e) => {
    e.preventDefault();
    e.target.checkValidity();
    console.log(formState);
  };
  const toggleVisibility = () =>
    setFormState({ ...formState, passwordShown: !formState.passwordShown });
  return {
    ...formState,
    handleOnChange,
    handleOnSubmit,
    toggleVisibility,
  };
};
