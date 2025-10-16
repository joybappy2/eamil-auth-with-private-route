import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Signup = () => {
  const { createUser } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="flex flex-col justify-center min-h-screen items-center">
        <h2 className="text-4xl font-bold mb-5">SignUp Now!</h2>
        <div className="card bg-base-300 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />

                {/* password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">SignUp</button>
              </fieldset>
            </form>
            <p>
              Already have an account?{" "}
              <Link className="text-blue-500" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
