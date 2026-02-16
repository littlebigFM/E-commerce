import React, { useState } from "react";
import Authform from "./Authform";
import AuthDesign from "./AuthDesign";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  console.log(formData);

  return (
    <div
      className="
    px-4
    h-screen
    flex align-center justify-center
    gap-
  
    
    "
    >
      <div
        className="
      w-full
      flex items-center justify-center

      "
      >
        <Authform
          type="login"
          text="Sign In"
          texttwo="Remember me"
          textthree="Forget Password?"
          textfour="Sign in"
          className="bg-[#1A71F6] text-[white] align-center justify-center"
          textfive="Do not have account?"
          textsix="Sign Up"
          label="Remember me"
          checked={rememberMe}
          onchange={(event) => setRememberMe(event.target.checked)}
          onChangeTwo={handleChange}
          name="rememberMe"
          nameThree="email"
          nameFive="password"
          valueThree={formData.email}
          valueFive={formData.password}
          // onClickOne={}
        />
      </div>

      <div
        className="
        w-full 
        dark:bg-[blue]
        flex items-center justify-center
        hidden
        min-[800px]:flex flex-col mt-[rem] gap-[2rem]
        relative min-h-screen dark:z-1
      "
      >
        <AuthDesign />
      </div>
    </div>
  );
};

export default Login;
