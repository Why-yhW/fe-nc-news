function Login() {
  function capture() {
    window.myGlobalVariable = { user: document.getElementById("username") };
  }

  return (
    <>
      <h2>Login</h2>
      <form action="./Home">
        <label htmlFor="username">Choose a user:</label>
        <select name="username" id="username">
          <option value="">--(none)--</option>
          <option value="grumpy19">grumpy19</option>
        </select>
        <input type="submit" value="Submit" onClick={capture} />
      </form>
    </>
  );
}

export default Login;
