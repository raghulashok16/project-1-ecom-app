import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const FormInput = ({ label, ...OtherProps }) => {
    return (
        <>

            <FloatingLabel label={label} className="my-4">
                <Form.Control {...OtherProps} />
            </FloatingLabel>
        </>
    )
}
export default FormInput;