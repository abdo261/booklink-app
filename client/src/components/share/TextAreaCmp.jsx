import { Textarea } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const TextAreaCmp = ({
  placeholder,
  field,
  label,
  defaultValue,
  cols,
  rows,
  onchange,
  isDisabled,
  labelPlacement,
  isRequired = false,
  maxRows,
  minRows,
  variant = "flat",
  errorMessage,
  isInvalid = false,
  description,
  className
}) => {
  const [Value, setValue] = useState(defaultValue);

  const handelChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    console.log(Value);
    onchange(field, newValue);
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <Textarea
      className={className}
      placeholder={placeholder}
      id={field}
      cols={cols}
      rows={rows}
      maxRows={maxRows}
      minRows={minRows}
      label={label}
      defaultValue={Value}
      onChange={handelChange}
      isDisabled={isDisabled}
      labelPlacement={labelPlacement}
      isRequired={isRequired}
      variant={variant}
      errorMessage={errorMessage}
      isInvalid={isInvalid}
      description={description}
    />
  );
};

export default TextAreaCmp;
