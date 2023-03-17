/*
default
inverted
google sign-in

*/
import Button from 'react-bootstrap/Button';
const ButtonTypeClasses = {
    google: 'primary',
    inverted: 'inverted',
    darkInverted: 'outline-dark',
    secondary: 'outline-secondary',

}

const BstButton = ({ children, buttonType, ...otherProps }) => {
    return (
        <Button
            // className={`button-container ${ButtonTypeClasses[buttonType]} `}
            variant={`${ButtonTypeClasses[buttonType]}`}
            {...otherProps}>
            {children}
        </Button>
    )
}

export default BstButton;