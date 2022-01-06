const buttonClick = (event) => document.querySelector(".App").insertAdjacentHTML('beforeend', `<div>One vote for ${event.target.innerHTML.split(" ").slice(-1)}</div>`);

const Button = (props) => <button onClick={buttonClick}>Click here to vote for {props.userName}!</button>;  

export default Button