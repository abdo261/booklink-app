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
import { RegisterUser } from "../../../redux/apiCalls/auth";
import {useDispatch, useSelector} from 'react-redux'
import { desableAuthBtn, existKey } from "../../../utils/functions";

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {errors,loading}=useSelector(state=>state.auth)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    remumber:false
  });
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
 
  const handelChange = (field, value) =>
    setFormData({ ...formData, [field]: value });
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(RegisterUser(formData,()=>navigate('/login')))
  };

  return (
    <div className="register flex items-center justify-center h-screen ">
      <div className="container-login p-4">
        <form className="flex flex-col items-center gap-3  w-full	 border shadow-lg	 p-4 rounded-lg" onSubmit={handelSubmit}>
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
            <span className="font-bold text-3xl">Register</span>
          </div>
          <InputCmp
            autoFocus
            endContent={
              <MdEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            label="Email"
            type="email"
            placeholder="Enter your email"
            variant="faded"
            color="default"
            className="font-bold"
            radius="md"
            onchange={handelChange}
            field='email'
            defaultValue={formData.email}
            isInvalid={errors && existKey("email", errors)}
            errorMessage={errors && existKey("email", errors) && errors["email"]}
          />
          <InputCmp
            endContent={
              <span className="flex items-center gap-2">
                {formData.password.length>0 && (isVisible ? (
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
            onchange={handelChange}
            field='password'
            defaultValue={formData.password}
            isInvalid={errors && existKey("password", errors)}
            errorMessage={
              errors && existKey("password", errors) && errors["password"]
            }
          />
          <InputCmp
            endContent={
              <span className="flex items-center gap-2">
                {formData.password_confirmation.length>0 && ( isVisible ? (
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
            label="Confurme password"
            placeholder="Enter your password again"
            variant="faded"
            color="default"
            className="font-bold"
            type={isVisible ? "text" : "password"}
            radius="md"
            onchange={handelChange}
            field='password_confirmation'
            defaultValue={formData.password_confirmation}
            isInvalid={errors && existKey("password_confirmation", errors)}
            errorMessage={
              errors &&
              existKey("password_confirmation", errors) &&
              errors["password_confirmation"]
            }
          />
         
          <div className="py-1 px-1 w-full">
            <Link className="text-black-600 font-bold hover:underline" to="/login" size="sm">
             already have an acout login ?
            </Link>
          </div> 
          <Button type="submit" size="lg"  onClick={handelSubmit} className="w-full font-bold" color="primary" isLoading={loading} isDisabled={desableAuthBtn(formData)}>
            Register
          </Button>
        </form>
      </div>
      <div className="dote-con"><span class="dot"></span></div>
      <div className="dote-con"><span class="dot"></span></div>
      <div className="dote-con"><span class="dot"></span></div>
      <div className="dote-con"><span class="dot"></span></div>
      <div className="dote-con"><span class="dot"></span></div>
      <div className="dote-con"><span class="dot"></span></div>
      <div className="dote-con"><span class="dot"></span></div>
      <div className="dote-con"><span class="dot"></span></div>
      <div className="dote-con"><span class="dot"></span></div>
      <div className="dote-con"><span class="dot"></span></div>
      <div className="dote-con"><span class="dot"></span></div>
      <div className="dote-con"><span class="dot"></span></div>
      <div className="dote-con"><span class="dot"></span></div>
      <div className="dote-con"><span class="dot"></span></div>
      <div className="dote-con"><span class="dot"></span></div>
    </div>
  );
};

export default Register;
