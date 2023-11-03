import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from './images/hostel.png';


function RegisterPage() {
  const [errors, setErrors] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState('student'); // Initialize the user type

  const err_msg = 'Please supply all fields';

  const handleRegister = (e) => {
    e.preventDefault();
    // Add your registration logic here
  };

  const handleUserType = (userType) => {
    setSelectedUserType(userType);
  };

  const flexed = {
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
    padding: 15,
  };

  return (
    <div className="LoginRegisterForms">
      <form onSubmit={handleRegister}>
        <img src={icon} alt="Hostel Logo" />
        <h1>Register With Us</h1>
        <p className="center-text">Register Account to Login</p>
        {errors && <p style={{color:"red"}}>{err_msg}</p>}

        <div style={flexed}>
          <div>
            <button
              type="button"
              name="student"
              value="student"
              id="1"
              onClick={() => handleUserType('student')}
              className={selectedUserType === 'student' ? 'selected' : ''}
            >
              I'm a student
            </button>
            <button id="custodianbutton"
              type="button"
              name="custodian"
              value="custodian"
              
              onClick={() => handleUserType('custodian')}
              className={selectedUserType === 'custodian' ? 'selected' : ''}
            >
              I'm a custodian
            </button>
          </div>
        </div>

        {/* <div className="grouped">
          <input type="text" placeholder="firstname" name="fname" />
          <input type="text" placeholder="lastname" name="lname" />
        </div> */}
        {/* <input type="text" placeholder="Student Number" name="uname" /> */}
        <input type="text" placeholder="Student number" name="student_no" />
        <input type="email" placeholder="Email Address" name="email" />
        {/* <div className="grouped">
          <select name="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input type="text" placeholder="nationality" name="nationality" />
        </div> */}
        {/* <input type="text" placeholder="student number" name="student_no" /> */}
        {/* <input type="file" name="pp" accept="image/*" /> */}
        <div className="grouped">
          <input type="password" placeholder="Create password" name="pword1" />
          <input type="password" placeholder="Verify password" name="pword2" />
        </div>
        <button>Register</button>
        <div style={flexed} className="div-new">
          <p>Already have an account ?</p>
          <Link to="/login">Login Now</Link>
        </div>
        <hr />
        <div style={flexed} className="links">
          <Link>Terms & conditions</Link>
          <Link>Privacy Policy</Link>
          <Link>Security</Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
