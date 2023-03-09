import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils'
import { async } from '@firebase/util';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import BstButton from '../../components/button/button.component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Authentication = () => {
    // useEffect(() => {
    //     async function red() {
    //         const response = await getRedirectResult(auth);
    //         // console.log(response);
    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     red();
    // }, []);
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    // const logGoogleRedirectUser = async () => {
    //     const { user } = await signInWithGoogleRedirect();
    //     console.log({ user });
    // }
    return (
        <div>
            <Container className='mt-5'>
                <Row>
                    <Col sm={6}><h1> Sign-In page</h1>
                        <BstButton onClick={logGoogleUser}>Sign in with google popup</BstButton>
                        {/* <button onClick={signInWithGoogleRedirect}>Sign in with google redirect</button> */}
                    </Col>
                    <Col sm={6}><SignUpForm /></Col>
                </Row>
            </Container>


        </div>
    )
}
export default Authentication;