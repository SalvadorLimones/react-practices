/* function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`
  } 
} */


class User {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName; 
  }
  fullName () {
    return `${this.firstName} ${this.lastName}`
  }
}



const profile4 = () => {
  const newUser1 = new User('Andor', 'Korcsog');
  const newUser2 = new User('Zsolt', 'Farkas');
  
  return <div>
{/*     <h2>{newUser1.firstName}</h2>
    <h3>{newUser1.lastName}</h3>
    <h2>{newUser2.firstName}</h2>
    <h3>{newUser2.lastName}</h3> */}
    <h2>{newUser1.fullName()}</h2>
    <h2>{newUser2.fullName()}</h2>
  </div>
}

export default profile4;