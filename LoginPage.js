import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import icon from "./images/hostel.png";

function LoginPage({ logIn }) {
  const navigate = useNavigate();
  const [uname, setUname] = useState("");
  const [pword, setPword] = useState("");
  const [errors, setErrors] = useState(false);
  const err_msg = "Please fill in both the Username and Password";

  const handleLogin = (e) => {
    e.preventDefault();
    if (uname.length === 0 || pword.length === 0) {
      setErrors(true);
      return;
    }
    setErrors(false);
    let formData = new FormData();
    formData.append("username", uname);
    formData.append("password", pword);
    const requestOptions = {
      method: "POST",
      cors: "cors",
      credentials: "omit",
      body: formData,
    };
    fetch(`http://127.0.0.1:8000/login`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
        logIn();
        navigate("/dashboard");
        //form.reset();
      })
      .catch((err) => console.log(err));
  };

  const flexed = {
    display: "flex",
    justifyContent: "center",
    gap: 10,
    padding: 15,
  };

  return (
    <div className="LoginRegisterForms">
      <form onSubmit={handleLogin}>
        <img src={icon} />
        <h1>Welcome back!</h1>
        {errors && <p style={{ color: "red" }}>{err_msg}</p>}
        <div>
          <label>Email Address</label>
          <input
            type="text"
            placeholder="Enter your Email Address"
            onChange={(e) => setUname(e.target.value)}
            name="uname"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPword(e.target.value)}
            name="pword"
          />
          <div className="FormInputs">
            <Link
              to="/forgot-password"
              style={{ color: "red", textAlign: "left" }}
            >
              Forgot your password ?
            </Link>
          </div>
          <button>Log in</button>
        </div>
        <div style={flexed} className="div-new">
          <p>Don't have an account:</p>{" "}
          <Link to={"/register1"}>Create an Account</Link>
        </div>
        <hr />
        <div style={flexed} className="links">
          <Link>Terms & conditons</Link>
          <Link>Privacy Policy</Link>
          <Link>Security</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
