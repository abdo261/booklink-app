import "../auth.css";
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";
import { FaUsers } from "react-icons/fa";
import InputCmp from "../../../components/share/InputCmp";
import CheckBoxCmp from "../../../components/share/CheckBoxCmp";
import { Button } from "@nextui-org/react";
import {useDispatch, useSelector} from 'react-redux'
import { loginUser } from "../../../redux/apiCalls/auth";
import { desableAuthBtn, existKey } from "../../../utils/functions";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remumber: false,
  });
  const {loading,errors}= useSelector(state=>state.auth)
  const dispatch =useDispatch()
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handelChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log(formData)
    dispatch(loginUser(formData,()=>navigate('/')))
  };
  return (
    <div className="login flex items-center justify-center h-screen ">
      <div className="container-login p-4">
        <form
          className="flex flex-col items-center gap-3  w-fullborder shadow-lg	 p-4 rounded-lg"
          onSubmit={handelSubmit}
        >
          <div className="flex items-center gap-2">
            <img
              src="/images/wepik-blue-removebg-preview.png"
              alt="logo"
              className="login-logo"
            />
            <span>
              <span className="first"> Book</span>
              <span className="seconde">Link</span>{" "}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaUsers size={44} />{" "}
            <span className="font-bold text-3xl">Login</span>
          </div>
          <InputCmp
            autoFocus
            endContent={
              <MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            label="Email"
            placeholder="Enter your email"
            variant="faded"
            color="default"
            className="font-bold"
            type="email"
            radius="md"
            field="email"
            defaultValue={formData.email}
            onchange={handelChange}
            isInvalid={errors && existKey("email", errors)}
            errorMessage={errors && existKey("email", errors) && errors["email"]}
          />
          <InputCmp
            endContent={
              <span className="flex items-center gap-2">
                {formData.password.length > 0 &&
                  (isVisible ? (
                    <FaEyeSlash
                      onClick={toggleVisibility}
                      size={15}
                      className="focus:outline-none text-default-400 cursor-pointer"
                    />
                  ) : (
                    <FaEye
                      onClick={toggleVisibility}
                      size={15}
                      className="focus:outline-none text-default-400 cursor-pointer"
                    />
                  ))}

                <IoIosLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              </span>
            }
            label="Password"
            placeholder="Enter your password"
            variant="faded"
            color="default"
            className="font-bold"
            type={isVisible ? "text" : "password"}
            radius="md"
            field="password"
            defaultValue={formData.password}
            onchange={handelChange}
            isInvalid={errors && existKey("password", errors)}
            errorMessage={
              errors && existKey("password", errors) && errors["password"]
            }
          />
          <CheckBoxCmp
            label="Remember me"
            classNames={{
              label: "text-xs",
            }}
            className="mr-auto"
            defaultValue={formData.remumber}
            onchange={handelChange}
            field="remumber"
          />
          <div className="flex py-2 px-1 justify-between w-full">
            <Link
              className="text-black-600 font-bold hover:underline"
              to="/register"
              size="sm"
            >
              register
            </Link>
            <Link
              className="text-black-600 font-bold hover:underline"
              to="/"
              size="sm"
            >
              Forgot password?
            </Link>
          </div>
          <Button type="submit" isLoading={loading}  isDisabled={desableAuthBtn(formData)} onClick={handelSubmit} className="w-full" color="primary">
            Login
          </Button>
        </form>
      </div>
      <div className="dote-con">
        <span class="dot"></span>
      </div>
      <div className="dote-con">
        <span class="dot"></span>
      </div>
      <div className="dote-con">
        <span class="dot"></span>
      </div>
      <div className="dote-con">
        <span class="dot"></span>
      </div>
      <div className="dote-con">
        <span class="dot"></span>
      </div>
      <div className="dote-con">
        <span class="dot"></span>
      </div>
      <div className="dote-con">
        <span class="dot"></span>
      </div>
      <div className="dote-con">
        <span class="dot"></span>
      </div>
      <div className="dote-con">
        <span class="dot"></span>
      </div>
      <div className="dote-con">
        <span class="dot"></span>
      </div>
      <div className="dote-con">
        <span class="dot"></span>
      </div>
      <div className="dote-con">
        <span class="dot"></span>
      </div>
      <div className="dote-con">
        <span class="dot"></span>
      </div>
      <div className="dote-con">
        <span class="dot"></span>
      </div>
      <div className="dote-con">
        <span class="dot"></span>
      </div>
    </div>
  );
};

export default Login;
