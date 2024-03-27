import React, { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
const InputCmp = ({
  label,
  defaultValue = "",
  field,
  onchange,
  className,
  type = "text",
  placeholder,
  isDisabled = false,
  size = "md",
  color = "default",
  variant = "flat",
  radius = "none",
  labelPlacement = "inside",
  description,
  isClearable = false,
  isInvalid = false,
  errorMessage = null,
  endContent,
  autoFocus,
}) => {
  const [Value, setValue] = useState(defaultValue);
  const handelChange = (e) => {
    const newValue = e.target.value;
    console.log(field);
    if (type === "number") {
      if (newValue < 0) return;
      setValue(+newValue);
      onchange(field, newValue);
    } else {
      setValue(newValue);
      onchange(field, newValue);
    }
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
      onChange={handelChange}
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
      endContent={endContent}
      autoFocus={autoFocus}
    />
  );
};

export default InputCmp;
