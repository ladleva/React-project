import "./styles.css";
import React from "react";

function LogIn() {
  const [yourEmail, changeYourEmail] = React.useState("");
  const [yourPassword, changeYourPassword] = React.useState("");
  const [isRemember, changeIsRemember] = React.useState(false);

  const tapLogIn = () => {
    console.log({ yourEmail, yourPassword, isRemember });
  };

  return (
    <div className="LogIn">
      <h1>Log In</h1>
      <div>
        <p>Email</p>
        <input
          value={yourEmail}
          onChange={(e) => changeYourEmail(e.target.value)}
        />
      </div>
      <div>
        <p>Password</p>
        <input
          value={yourPassword}
          onChange={(e) => changeYourPassword(e.target.value)}
        />
      </div>
      <br />
      <div className="remember">
        <input
          type="checkbox"
          id="scales"
          value={isRemember}
          onChange={(e) => changeIsRemember(e.target.checked)}
          required
        />
        <label htmlFor="scales">Remember me</label>
      </div>
      <br />
      <button onClick={tapLogIn}>Log In</button>
    </div>
  );
}

export default LogIn;