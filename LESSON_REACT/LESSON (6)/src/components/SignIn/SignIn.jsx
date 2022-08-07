import React from "react";
import { signInWithGoogle } from "../../service/firebase";

function SignIn() {
  return (
    <div className="item-center">
      <button className="btn btn-dark" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default SignIn;
