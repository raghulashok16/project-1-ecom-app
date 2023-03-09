import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss';
import BstButton from '../button/button.component';
import Form from 'react-bootstrap/Form';

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formFields;
    // console.log(formFields);
    const resetFormFields = () => {
        setFormFields(defaultFormField);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }
        try {
            const response = await createAuthUserWithEmailAndPassword(email, password);
            // console.log(response);
            const user = response.user;
            // console.log(displayName);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already registred');
            }
            else {
                console.log(err);
            }
        }
    }

    const handleChange = (myEvent) => {
        const { name, value } = myEvent.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <Form onSubmit={handleSubmit}>

                <FormInput
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <BstButton type="submit">Sign Up</BstButton>

            </Form>
        </div>
    )
}
export default SignUpForm;