const buttonClick = () => document.querySelector(".App").insertAdjacentHTML('beforeend', '<div>Click!</div>');

const Button = (props) => <button onClick={buttonClick}>{props.text}</button>;

export default Button