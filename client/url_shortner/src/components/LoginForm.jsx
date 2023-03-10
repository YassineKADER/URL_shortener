import "./css/LoginForm.css";
export default function LoginForm() {
  return (
    <div className="container">
      <form>
          <label>Username:</label>
          <input type={"text"}></input>
          <label>Password:</label>
          <input type={"password"}></input>
        <a href="something.com">Forgot your password ?</a>
      </form>
    </div>
  );
}
