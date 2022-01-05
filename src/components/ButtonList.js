import Button from "./Button";

let buttonText ="Click me!";
let tenButtons = [];

for (let i=0; i<10; i++) {
  tenButtons.push(<Button key={i} text={buttonText}/>);
};

const ButtonList = () => tenButtons;

export default ButtonList