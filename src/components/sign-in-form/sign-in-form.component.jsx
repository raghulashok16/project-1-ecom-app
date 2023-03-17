import { useState } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import BstButton from '../button/button.component';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';

const defaultFormField = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { email, password } = formFields;
    const resetFormFields = () => {
        setFormFields(defaultFormField);
    }
    const logGoogleUser = async () => {
        await signInWithGooglePopup();

    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            console.log(error);
            if (error.code === "auth/wrong-password") {
                alert('Incorrect Password');
            } else if (error.code === "auth/user-not-found") {
                alert('Email id not found');
            }
        }
    }

    const handleChange = (myEvent) => {
        const { name, value } = myEvent.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className=' text-center px-4'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <Form onSubmit={handleSubmit}>



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

                <Row>
                    <Col xl={6}>
                        <BstButton type="submit" buttonType="darkInverted" className='w-75 mb-2' >Sign In</BstButton>
                    </Col>
                    <Col xl={6}>
                        <BstButton type="button" buttonType="google" onClick={logGoogleUser} className='w-75'>Google Sign In</BstButton>
                    </Col>
                </Row>
            </Form>

        </div>
    )
}
export default SignInForm;