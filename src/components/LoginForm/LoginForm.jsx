import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';

const initialValues = {
    login: '',
    password: '',
};

const Input = styled(Field)`
color: #2a2a2a;
 
`;

export const LoginForm = () => {
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const {login, password} = e.target.elements;
    //     console.log(login.value, password.value);
    //     // console.log(e.target.elements.login.value);
        
    // }
    const handleSubmit = (values, {resetForm}) => {
        console.log(values);
        // console.log(resetForm);
        resetForm();
    }
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form autoComplete="off" >
        
        <label htmlFor="login">
          Login
          <Input type="text" name='login' />
          </label>
          <label htmlFor="password">
          password
          <Input type="password" name='password' />
          </label>
          

            <button type="submit">Submit</button>
        </Form>
        </Formik>
    );
};