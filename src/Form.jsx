import React from "react";
import Google from "./GoogleButton";
export default function Form() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  

  const [theme,setTheme] = React.useState(0)
  
  const themeChange = () => {
    setTheme(e => Math.floor(Math.random()*styles.length))
  }


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((e) => {
      return {
        ...e,
        [name]: value,
      };
    });
  };

  // Form Styles
  const passwordIndex = formData.email.indexOf('@')
  const passwordValidation = formData.email.slice(0,passwordIndex)
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((formData.password === passwordValidation)&&(formData.password === formData.passwordConfirm)) {
      console.log("Successfully signed up");
    } else {
      console.log("Passwords do not match");
      return;
    }
  };


  const styles = [
    {
      bodyColor: "#778da9",
      form: "#415a77",
      text: "#e0e1dd",
      button: {
        bgcolor: "#0d1b2a",
        color: "#e0e1dd"
      },
      formSection: "#8d99ae",
      label: "#0d1b2a"
    },
    {
      bodyColor: "#84a98c",
      form: "#52796f",
      text: "#cad2c5",
      button: {
        bgcolor: "#2f3e46",
        color: "#cad2c5"
      },
      formSection: "#354f52",
      label: "#2f3e46"
    },
    {
      bodyColor: "#e0b1cb",
      form: "#be95c4",
      text: "#231942",
      button: {
        bgcolor: "#5e548e",
        color: "#231942"
      },
      formSection: "#5e548e",
      label: "#231942"
    },
    {
      bodyColor: "#ffd60a",
      form: "#ffc300",
      text: "#231942",
      button: {
        bgcolor: "#003566",
        color: "#001d3d"
      },
      formSection: "#00509d",
      label: "#001d3d"
    },
    {
      bodyColor: "#f4dbd8",
      form: "#c09891",
      text: "#2a0800",
      button: {
        bgcolor: "#775144",
        color: "#2a0800"
      },
      formSection: "#775144",
      label: "#2a0800"
    }
  ]
  // function getRandomNumber(){
  //   return Math.floor(Math.random()*styles.length)
  // }
  // const randomNumber = getRandomNumber()
  // let i = randomNumber
  
 
  
  document.body.style.backgroundColor = styles[theme].bodyColor
  const formColor = {
    backgroundColor: styles[theme].form
  }
  let textColor = {
    color: styles[theme].text
  }
  let buttonColor = {
    backgroundColor: styles[theme].button.bgcolor,
    color: styles[theme].button.color
  }
  let formSectionColor = {
    backgroundColor: styles[theme].formSection
  }
  let labelColor = {
    backgroundColor: styles[theme].label
  }
  
  return (
    <>
      <form style={formColor} onSubmit={handleSubmit}>
        <Google 
          style={textColor} 
          styleOne={buttonColor}
          />
        {/* Name input */}
        <div style={formSectionColor} className="form--section">
          <label style={labelColor} htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="name"
            value={formData.name}
            required
          ></input>
        </div>
        {/* Email input */}
        <div style={formSectionColor}  className="form--section">
          <label style={labelColor} htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter you mail"
            onChange={handleChange}
            name="email"
            value={formData.email}
            required
          ></input>
        </div>
        {/* Password Input */}
        <div style={formSectionColor} className="form--section">
          <label style={labelColor} htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Type Your Password"
            onChange={handleChange}
            name="password"
            value={formData.password}
            required
          ></input>
        </div>
        {/* Confirm Password Input */}
        <div style={formSectionColor} className="form--section">
          <label style={labelColor} htmlFor="passwordConfirm">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            name="passwordConfirm"
            value={formData.passwordConfirm}
            required
          />
        </div>
        <button style={buttonColor}>Sign Up</button>
      </form>
      <button onClick={themeChange} className="theme">Theme Change</button>
    </>
  );
}
