/*
default
inverted
google sign-in

*/
import Button from 'react-bootstrap/Button';
const ButtonTypeClasses = {
    google: 'google-sign-in',
    inverted: 'inverted',

}

const BstButton = ({ children, buttonType, ...otherProps }) => {
    return (
        <Button
            // className={`button-container ${ButtonTypeClasses[buttonType]} `}
            variant="primary"
            {...otherProps}>
            {children}
        </Button>
    )
}

export default BstButton;