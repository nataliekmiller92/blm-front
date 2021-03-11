import './Buttons.css';

export const SignupButton = () => {
    return (
        <div className="SignupButton">Signup</div>
    )
}

export const Button = ({text}) => {
    return (
        <div className="Button">{text}</div>
    )
}

export const SecondaryButton = ({text}) => {
    return (
        <div className="SecondaryButton">{text}</div>
    )
}