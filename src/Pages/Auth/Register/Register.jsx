import React, { useState } from "react";
import Authform from "../Login/Authform";
import AuthDesign from "../Login/AuthDesign";
import { supabase } from "@/Library/supabase";

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      console.error("Auth error:", error.message);
    }

    // console.log("Signup data:", data);
    if (error?.message.includes("already")) {
      alert("This email is already registered. Try logging in.");
    }
  };

  // console.log(formData);
  // console.log("Supabase", supabase);

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
          type="register"
          text="Sign Up"
          texttwo="Remember me"
          textthree="Forget Password?"
          textfour="Sign up"
          className="bg-[#1A71F6] text-[white] align-center justify-center"
          textfive="Have an Account?"
          textsix="Sign in"
          onChangeTwo={handleChange}
          nameOne="firstName"
          nameTwo="lastName"
          nameThree="email"
          nameFour="phoneNumber"
          nameFive="password"
          nameSix="confirmPassword"
          valueOne={formData.firstName}
          valueTwo={formData.lastName}
          valueThree={formData.email}
          valueFour={formData.phoneNumber}
          valueFive={formData.password}
          valueSix={formData.confirmPassword}
          onClickTwo={handleRegister}
          onSubmit={handleRegister}
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
