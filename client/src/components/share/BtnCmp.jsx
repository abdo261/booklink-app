
import { Button } from "@nextui-org/react";
import React from "react";

const BtnCmp = ({
  text=null,
  className,
  oncklick,
  id,
  icon=null,
  color="default",
  startContent,
  isDisabled = false,
  size = "md",
  radius = "md",
  variant = "solid",
  isLoading = false,
  endContent,
  isIconOnly = false,
  ariaLabel,
  type
}) => {
  const handelCklick = (e) => {
    e.preventDefault();
    oncklick();
  };
  return (
    <Button
      color={color}
      variant={variant}
      radius={radius}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isIconOnly={isIconOnly}
      endContent={endContent}
      size={size}
      aria-label={ariaLabel}
      className={className}
      startContent={startContent}
      id={id}
      onClick={handelCklick}
      type={type}
    >
      {icon && icon}
      {text}
    </Button>
  );
};

export default BtnCmp;
