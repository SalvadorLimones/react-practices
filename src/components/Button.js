const buttonClick = (event) => document.querySelector(".App").insertAdjacentHTML('beforeend', `<div>One vote for ${event.target.innerHTML.split(" ").slice(-1)}</div>`);

const Button = (props) => {
   const name = props.userName;
  return <button onClick={buttonClick}>Click here to vote for {name}!</button>;
}  

export default Button