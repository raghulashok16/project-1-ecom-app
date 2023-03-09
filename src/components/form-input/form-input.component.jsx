import './form-input.styles.scss';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const FormInput = ({ label, ...OtherProps }) => {
    return (
        <div className="group">
            <FloatingLabel
                controlId="floatingInput"
                label={OtherProps.label}
                className="mb-3"
            >
                <Form.Control {...OtherProps} placeholder={OtherProps.label} />
            </FloatingLabel>
            {/* <input className="form-input" {...OtherProps} />
            {label && (
                <label className={`${OtherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
            )} */}

        </div>
    )
}
export default FormInput;