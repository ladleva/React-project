import "./styles.css";
import React from "react";

function SignUp() {
  const [newEmail, changeNewEmail] = React.useState("");
  const [newPassword, changeNewPassword] = React.useState("");

  const tapSignUp = () => {
    console.log({ newEmail, newPassword });
  };

  return (
    <div className="SignUp">
      <h1>Sign Up</h1>
      <div>
        <p>Email</p>
        <input
          value={newEmail}
          onChange={(e) => changeNewEmail(e.target.value)}
        />
      </div>
      <div>
        <p>Password</p>
        <input
          value={newPassword}
          onChange={(e) => changeNewPassword(e.target.value)}
        />
      </div>
      <br />
      <button onClick={tapSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;