
import React, { useEffect, useState } from "react";
import {Input} from "@nextui-org/react";
const InputCmp = ({
  label,
  defaultValue="",
  field,
  onchange,
  className,
  type,
  placeholder,
  isDisabled=false,
  size='md',
  color="default",
  variant="flat",
  radius='none',
  labelPlacement="inside",
  description,
  isClearable=false,
  isInvalid=false,
  errorMessage=null

}) => {
  const [Value, setValue] = useState( defaultValue);
  const handelChange = (e) => {
   
    if(type==="number"){
      const newValue = +e.target.value;
      if(newValue<0) return;
      setValue(newValue);
    // console.log(defaultValue);
    
    onchange(field, newValue);
    console.log(Value)
    }
    else{
      const newValue = e.target.value;
    setValue(newValue);
    // console.log(defaultValue);
    onchange(field, newValue);
    ;}
  };
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  return (

      <Input
        placeholder={placeholder}
        defaultValue={Value}
        id={field}
        className={className}
        type={type}
        onchange={handelChange}
        label={label}
        isDisabled={isDisabled}
        size={size}
        color={color}
        variant={variant}
        radius={radius}
        description={description}
        labelPlacement={labelPlacement}
        isClearable={isClearable}
        isInvalid={isInvalid}
        errorMessage={errorMessage}
      />
   
  );
};

export default InputCmp;
