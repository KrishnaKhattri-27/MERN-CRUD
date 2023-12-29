import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ passdata }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errorM, setErrorM] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSave = () => {
    setUserData({
      email: email,
      password: password,
    });
    setSubmit(true);
  };

  useEffect(() => {
    if (
      userData.name === "" ||
      userData.email === "" ||
      userData.password === "" ||
      userData.phone === "" ||
      userData.gender === "" ||
      userData.hearAbout === "" ||
      userData.state === "" ||
      userData.city === ""
    ) {
      setErrorM("Fill all entries..!!");
    } else passdata(userData, "login");
  }, [userData]);

  useEffect(() => {
    setTimeout(() => {
      setSubmit(false);
      setErrorM("");
    }, 3000);
  }, [submit]);

  return (
    <div className="h-screen flex items-center">
      <div className="md:w-[25%] w-[95%] px-8 mx-auto rounded-lg bg-slate-600 py-10">
        <form>
          <div className="mb-2 md:mb-2 text-center">
            <h1 className="text-3xl text-white font-bold">Log In</h1>
          </div>

          <div className="mb-4 ">
            <label className="text-white space-y-4 font-mabry">
              Email
              <span className="text-red-500 m-2 font-mabry">*</span>
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-4 py-2 my-2 font-mabry bg-gray-800 text-gray-100 border border-black rounded-lg"
              placeholder="john.doe@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="text-white space-y-4 font-mabry">
              Password
              <span className="text-red-500 m-2 font-mabry">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 my-2 font-mabry bg-gray-800 text-gray-100 border border-black rounded-lg"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4 text-center">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSave}
            >
              Log In
            </button>
          </div>
          {submit ? (
            <div className="text-center">
              <h5 className="text-red-400 font-mabry font-semibold">
                {errorM}
              </h5>
            </div>
          ) : null}
          <div className="text-center">
            <h4 className="text-white font-mabry font-semibold">
              Don't yet registered?{" "}
              <Link to="/register" className="text-blue-500">
                Register
              </Link>
            </h4>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
