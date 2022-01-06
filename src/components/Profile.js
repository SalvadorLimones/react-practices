const profile = () => {
  const users = ['Richard', 'Flóra', 'Áron', 'Betti', 'Johnny'];
  const [userA,,,userB] = users;
  return <div>
    <h2>{userA}</h2>
    <h2>{userB}</h2>
  </div>
}

export default profile;