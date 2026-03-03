import React from "react";
import Divider from "./Divider";
import { Link } from "react-router-dom";
import GoogleAuthButton from "./GoogleAuthButton";
import Input from "../../../Components/UI/Input";
import Button from "../../../Components/UI/Button/Button";
import Checkbox from "../../../Components/Checkbox/Checkbox";
import Logo from "../../../Components/LogoDesigns/LogoBrand";

const Authform = ({
  type = "login" | "register",
  text,
  textthree,
  textfour,
  className,
  textfive,
  textsix,
  label,
  checked,
  onchange,
  name,
  nameOne,
  nameTwo,
  nameThree,
  nameFour,
  nameFive,
  nameSix,
  onChangeTwo,
  valueOne,
  valueTwo,
  valueThree,
  valueFour,
  valueFive,
  valueSix,
  onClickOne,
  onClickTwo,
  onSubmit,
}) => {
  return (
    <div
      className="
    min-[500px]:w-[450px]
    min-[800px]:w-[400px]
    min-[1200px]:w-[530px]
    flex
    "
    >
      <div>
        {/* ========================= */}

        <Logo />

        {/* =========================== */}
        <div
          className="
        mt-8 gap-6
        flex flex-col
        "
        >
          <p
            className="
        font-semibold
        text-[30px] dark:text-white
          "
          >
            {text}
          </p>
          <p
            className="
          text-[#737373]
          dark:text-white
          "
          >
            Lorem ipsum dolor sit amet consectetur. Leo eget quam dui in posuere
            nulla.
          </p>

          {type === "login" && (
            <div>
              <GoogleAuthButton text="Sign in with Google" />
            </div>
          )}

          {type === "register" && (
            <div>
              <GoogleAuthButton text="Sign up with Google" />
            </div>
          )}

          <div>
            <Divider />
          </div>

          {type === "login" && (
            <div className="flex flex-col gap-6">
              <div>
                <Input
                  label="Email"
                  placeholder="Email Address"
                  name={nameThree}
                  onChange={onChangeTwo}
                  value={valueThree}
                />
              </div>

              <div>
                <Input
                  label="Password"
                  placeholder="Input Password"
                  name={nameFive}
                  onChange={onChangeTwo}
                  value={valueFive}
                />
              </div>
            </div>
          )}

          {type === "register" && (
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <Input
                // label="First Name"
                placeholder="First Name"
                name={nameOne}
                onChange={onChangeTwo}
                value={valueOne}
              />

              <Input
                // label="Last Name"
                placeholder="Last Name"
                name={nameTwo}
                onChange={onChangeTwo}
                value={valueTwo}
              />

              <Input
                // label="Email"
                placeholder="Email"
                name={nameThree}
                onChange={onChangeTwo}
                value={valueThree}
              />

              <Input
                // label="Phone number"
                placeholder="Phone number"
                name={nameFour}
                onChange={onChangeTwo}
                value={valueFour}
              />

              <Input
                // label="Password"
                type="password"
                placeholder="Password"
                name={nameFive}
                onChange={onChangeTwo}
                value={valueFive}
              />

              <Input
                // label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                name={nameSix}
                onChange={onChangeTwo}
                value={valueSix}
              />

              {type === "register" && (
                <div onClick={onClickTwo}>
                  <Button text={textfour} className={className} />
                </div>
              )}
            </form>
          )}

          {type === "login" && (
            <div className="flex justify-between">
              {/* ========= Checkbox with label ========= */}
              <div>
                <Checkbox
                  label={label}
                  checked={checked}
                  onChange={onchange}
                  name={name}
                />
              </div>
              {/* ===================================== */}

              <div
                className="font-bold text-[#1A71F6] 
            cursor-pointer
            "
              >
                {textthree}
              </div>
            </div>
          )}

          {/* Sign in or sign up button */}

          {type === "login" && (
            <div onClick={onClickOne}>
              <Button text={textfour} className={className} />
            </div>
          )}

          {/* =================== */}

          <div className="flex align-center justify-center">
            <p className="text-[#323130] dark:text-[#F6F6F6]">
              {textfive}{" "}
              {type === "login" && (
                <span className="text-[#1A71F6]">
                  <Link to="/Register">{textsix}</Link>
                </span>
              )}
              {type === "register" && (
                <span className="text-[#1A71F6]">
                  <Link to="/">{textsix}</Link>
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authform;
