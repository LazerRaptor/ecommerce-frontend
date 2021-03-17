import React, { useEffect, useState } from "react";
import { withFormik } from "formik";
import * as yup from 'yup';
import styled from "styled-components";
import Cookies from "js-cookie";
import { getUserProfile, saveUserProfile } from "lib/api/service";
import Button from "components/ui/Button";
import { variants, colors } from "styles/variables";
import { IProfile } from "lib/utils/interfaces";
import { AxiosResponse } from "axios";

const inputSize = "380px";

const Form = styled.form`
  display: grid;
  grid-template-columns: ${inputSize} ${inputSize};
  grid-gap: 0 2rem;
  @media(max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25rem;
  margin: 1rem 0;
`;

const Label = styled.label`
  color: ${colors.grey};
  margin-bottom: .2em;
`;

const Input = styled.input`
  border: 1px solid ${(props) => props.isInvalid ? variants.danger : colors.grey};
  color: "#5a5a5a";
  width: ${inputSize};
  outline: 0;
  box-shadow: none;
  padding: .8em;
  line-height: 1.2;
  &::placeholder {
    color: #8d8d8d;
    opacity: 1;
  }
`;

const Footer = styled.div`
  margin-top: 1rem; 
`;

const BaseForm = (props) => {
  const {
    values,
    touched,
    errors,
    status,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    isValid
  } = props;
  return (
    <Form onSubmit={handleSubmit}>
      {status}
      <Field>
        <Label htmlFor="firstName">First Name</Label>
        <Input 
          id="firstName" 
          name="firstName" 
          type="text" 
          placeholder="Sherlock"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
          isInvalid={errors.firstName && touched.firstName}
        />
      </Field>
      <Field>
        <Label htmlFor="lastName">Last Name</Label>
        <Input 
          id="lastName" 
          name="lastName" 
          type="text"
          placeholder="Holmes"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
          isInvalid={errors.lastName && touched.lastName}
        />
      </Field>
      <Field>
        <Label htmlFor="phone">Phone Number</Label>
        <Input 
          id="phone" 
          name="phone" 
          type="tel"
          placeholder="+911204377777" 
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phone}
          isInvalid={errors.phone && touched.phone}
        />
      </Field>
      <Field>
        <Label htmlFor="address">Address</Label>
        <Input 
          id="address" 
          name="address" 
          type="text"
          placeholder="London, 221b Baker street" 
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.address}
          isInvalid={errors.address && touched.address}
        />
      </Field>
      <Footer>
        <Button 
          type="submit" 
          isRound 
          disabled={!isValid || isSubmitting}
        >Next</Button>
      </Footer>
    </Form>
  )
}

const schema = yup.object().shape({
  firstName: yup.string().required("This field is required."),
  lastName: yup.string().required("This field is required."),
  phone: yup.string()
    .min(8, "Please enter a valid phone number.")
    .max(12, "Please enter a valid phone number.")
    .required("This field is required."),
  address: yup.string()
    .required("This field is required.")
})

export default function PersonalForm () {
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    firstName: "", 
    lastName: "",
    address: "",
    phone: "",
  })
  
  // try to get profile_id from cookies, perform get request and 
  // use response data to fill form values
  useEffect(() => {
    setLoading(true);
    (async () => {
      const id = Cookies.get('profile_id');
      const response: AxiosResponse<IProfile> = await getUserProfile(id);
      if (response.status === 200) {
        const { first_name, last_name, phone, address } = response.data;
        setInitialValues({
          firstName: first_name,
          lastName: last_name,
          phone,
          address,
        })
      }
      setLoading(false);
    })();
  }, []);

  const MyFormWithFormik = withFormik({
    mapPropsToValues: () => ({
      ...initialValues
    }),
    enableReinitialize: true,
    validationSchema: schema,
    handleSubmit: async (values, { setStatus }) => {
      try {
        saveUserProfile({
          first_name: values.firstName,
          last_name: values.lastName,
          phone: values.phone, 
          address: values.address
        });
      } catch(error) {
        setStatus(...error.response.data.non_field_errors);
      };
    },
    displayName: 'PersonalDataForm',
  })(BaseForm);
  return <MyFormWithFormik />
};
