import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
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
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
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
        <div className=' text-center px-4'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <Form onSubmit={handleSubmit}>

                <FormInput
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    placeholder="Display Name"
                    value={displayName}
                />

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                    placeholder="Email"
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                    placeholder="Password"
                />

                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                    placeholder="Confirm Password"
                />
                <BstButton type="submit" buttonType="darkInverted" className='w-50'>Sign Up</BstButton>
            </Form>
        </div>
    )
}
export default SignUpForm;