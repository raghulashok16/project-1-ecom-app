import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.css'
const Authentication = () => {

    return (
        <div className='delter d-flex align-items-stretch'>
            <Container className='mt-4'>
                <Row className='justify-content-evenly'>
                    <Col md={5} className='text-center mb-5 shadow-lg p-3 rounded bg-light'>
                        <SignInForm />
                    </Col>
                    <Col md={5} className='text-center shadow-lg p-3 rounded bg-light'>
                        <SignUpForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Authentication;