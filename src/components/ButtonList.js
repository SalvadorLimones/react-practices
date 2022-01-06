import Button from "./Button";


//For ciklusos array push megoldás:
/* 
const ButtonList = () => {
  let tenButtons = [];
  
  for (let i=0; i<10; i++) {
    tenButtons.push(<Button key={i} text={buttonText}/>);
  };
  
  return tenButtons;
}  */  



//Map megoldás:
/* let buttonText ="Me!";
const ButtonList = () => <>{ [...Array(10)].map( (i) => <Button key={i} userName={buttonText}/> ) }</> */


//Map megoldás megadott listával:

const ButtonList = () => {
  const users = ['Richard', 'Flóra', 'Áron', 'Betti', 'Johnny'];
  
  return <div>{ users.map( (userName,i) => <Button key={i} userName={userName}/> ) }</div>
}

export default ButtonList