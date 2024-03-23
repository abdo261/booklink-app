
import { Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";

const SelectCmp = ({
  field,
  defaultValue = "",
  options = [],
  titleOptions,
  className,
  onchange,
  label,
  placeholder,
  selectionMode,
  isDisabled = false,
  size = "md",
  color = "default",
  variant = "flat",
  radius = "none",
  labelPlacement = "inside",
  startContent,
  itemStartContent = null,
  selectorIcon,
  description,
  errorMessage = null,
  onClose,
  isInvalid = false,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onchange(field, newValue);
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  return (
    <Select
      onChange={handleChange}
      name={field}
      id={field}
      value={value}
      className={className}
      label={label}
      placeholder={placeholder}
      selectionMode={selectionMode}
      isDisabled={isDisabled}
      size={size}
      color={color}
      variant={variant}
      radius={radius}
      labelPlacement={labelPlacement}
      startContent={startContent}
      selectorIcon={selectorIcon}
      description={description}
      errorMessage={errorMessage}
      onClose={onClose}
      isInvalid={isInvalid}
    >
      <SelectItem value="">{titleOptions}</SelectItem>
      {options.map((o) => (
        <SelectItem startContent={itemStartContent} value={o.id} key={o.id}>
          {o.text}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SelectCmp;
