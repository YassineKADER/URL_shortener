import "./css/LoginForm.css";
import logo from "./../assets/test-logo.png";
export default function LoginForm() {
  return (
    <div className="container">
      <form>
      <img src={logo}></img>
          <label>Username:</label>
          <input type={"text"}></input>
          <label>Password:</label>
          <input type={"password"}></input>
        <a href="something.com">Forgot your password ?</a>
        <input type={"submit"} value={"Login"}></input>
      </form>
    </div>
  );
}
