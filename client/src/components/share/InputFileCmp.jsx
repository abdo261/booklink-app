
const InputFileCmp = ({
  field,
  accept,
  className,
  type = "file",
  placeholder,
  onchange,
  style,
  id
}) => {
  
  const handelChange = (e) => {
    const newFile = e.target.files[0];
    onchange(field, newFile);
  };

  return (
    <input
      accept={accept}
      placeholder={placeholder}
      id={field}
      name={field}
      className={className}
      type={type}
      onChange={handelChange}
      style={style}
    />
  );
};

export default InputFileCmp;
