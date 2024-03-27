import { Checkbox } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const CheckBoxCmp = ({
  className,
  classNames,
  field,
  defaultValue=false,
  label,
  onchange,
}) => {
  const [value, setValue] = useState(defaultValue);
  const handelChange = (e) => {
    const newValue = e.target.checked;
    setValue(prev=>newValue)
    onchange(field,newValue)
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  return (
    <Checkbox
      classNames={classNames}
      className={className}
      value={value}
      onChange={handelChange}
    >
      {label}
    </Checkbox>
  );
};

export default CheckBoxCmp;
