import React, { useState } from "react";
import Facebook from "../../assets/facebook.png";
import { Input } from "antd";

const SignUp = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  // Generate arrays for days, months, and years
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };
  return (
    <div className="login signup">
      <img src={Facebook} alt="facebook" className="facebook" />
      <div className="login-box">
        <span style={{ fontSize: 30, fontWeight: "bold" }}>
          Create a new account
        </span>
        <span
          style={{
            fontSize: 14,
            color: "#8F949A",
            marginTop: 10,
          }}
        >
          It's quick and easy.
        </span>
        <div
          style={{
            marginTop: 20,
            borderTop: "1px solid #F1F2F4",
            paddingTop: "10px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Input style={{ marginRight: 10 }} placeholder="First Name" />
            <Input style={{ marginLeft: 10 }} placeholder="Surname" />
          </div>
          <Input
            style={{ marginTop: 10 }}
            placeholder="Mobile number or email address"
          />
          <Input.Password
            placeholder="New password"
            style={{ marginTop: 10 }}
          />
        </div>
        <span
          style={{
            width: "100%",
            textAlign: "left",
            fontSize: 12,
            marginTop: 10,
          }}
        >
          Date of birth
        </span>
        <div className="date-of-birth-dropdown">
          <select
            style={{
              padding: 5,
              textAlign: "left",
              width: 100,
              border: ".5px solid #B2B2B2",
              borderRadius: 5,
            }}
            value={day}
            onChange={handleDayChange}
          >
            <option value="" disabled>
              Day
            </option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
          <select
            style={{
              padding: 5,
              textAlign: "left",
              width: 100,
              border: ".5px solid #B2B2B2",
              borderRadius: 5,
            }}
            value={month}
            onChange={handleMonthChange}
          >
            <option value="" disabled>
              Month
            </option>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select
            style={{
              padding: 5,
              textAlign: "left",
              width: 100,
              border: ".5px solid #B2B2B2",
              borderRadius: 5,
            }}
            value={year}
            onChange={handleYearChange}
          >
            <option value="" disabled>
              Year
            </option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <span
          style={{
            width: "100%",
            textAlign: "left",
            fontSize: 12,
            marginTop: 10,
          }}
        >
          Gender
        </span>
        <div className="date-of-birth-dropdown">
          <div
            style={{
              padding: 5,
              textAlign: "left",
              width: 90,
              border: ".5px solid #B2B2B2",
              borderRadius: 5,
            }}
          >
            <input type="radio" value="Female" /> 
            <label style={{ fontSize: 14 }}>Female</label>
          </div>
          <div
            style={{
              padding: 5,
              textAlign: "left",
              width: 90,
              border: ".5px solid #B2B2B2",
              borderRadius: 5,
            }}
          >
            <input type="radio" value="Male" /> 
            <label style={{ fontSize: 14 }}>Male</label>
          </div>
          <div
            style={{
              padding: 5,
              textAlign: "left",
              width: 90,
              border: ".5px solid #B2B2B2",
              borderRadius: 5,
            }}
          >
            <input type="radio" value="Custom" /> 
            <label style={{ fontSize: 14 }}>Custom</label>
          </div>
        </div>
        <p style={{ fontSize: 12 }}>
          People who use our service may have uploaded your contact information
          to Facebook
        </p>
        <p style={{ fontSize: 12 }}>
          By clicking Sign Up, you agree to our Terms, Privacy Policy and
          Cookies Policy. You may receive SMS notifications from us and can opt
          out at any time.
        </p>
        <span className="login-btn signupbtn">Sign Up</span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <span className="login-bottom-btn">Already have an account?</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// import React, { useState } from 'react';

// function DateOfBirthDropdown() {
//   const [day, setDay] = useState('');
//   const [month, setMonth] = useState('');
//   const [year, setYear] = useState('');

//   // Generate arrays for days, months, and years
//   const days = Array.from({ length: 31 }, (_, i) => i + 1);
//   const months = [
//     'January', 'February', 'March', 'April',
//     'May', 'June', 'July', 'August',
//     'September', 'October', 'November', 'December'
//   ];
//   const currentYear = new Date().getFullYear();
//   const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

//   const handleDayChange = (e) => {
//     setDay(e.target.value);
//   };

//   const handleMonthChange = (e) => {
//     setMonth(e.target.value);
//   };

//   const handleYearChange = (e) => {
//     setYear(e.target.value);
//   };

//   return (
//     <div className="date-of-birth-dropdown">
//       <select value={day} onChange={handleDayChange}>
//         <option value="" disabled>Day</option>
//         {days.map((day) => (
//           <option key={day} value={day}>{day}</option>
//         ))}
//       </select>
//       <select value={month} onChange={handleMonthChange}>
//         <option value="" disabled>Month</option>
//         {months.map((month, index) => (
//           <option key={index} value={month}>{month}</option>
//         ))}
//       </select>
//       <select value={year} onChange={handleYearChange}>
//         <option value="" disabled>Year</option>
//         {years.map((year) => (
//           <option key={year} value={year}>{year}</option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default DateOfBirthDropdown;
