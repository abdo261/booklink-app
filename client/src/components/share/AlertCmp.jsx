import { GoAlert } from "react-icons/go";

const AlertCmp = ({
  message,
  variant = "danger",
  className = "",
  icon = <GoAlert />,
}) => {
  // Define Tailwind classes based on Bootstrap classes
  const alertClasses = {
    danger: "bg-red-100 border border-red-400 text-red-700",
    success: "bg-green-100 border border-green-400 text-green-700",
    warning: "bg-yellow-100 border border-yellow-400 text-yellow-700",
    info: "bg-blue-100 border border-blue-400 text-blue-700",
  };

  return (
    <div
      className={`px-4 py-3 rounded-md flex items-center gap-2 ${alertClasses[variant]} ${className}`}
      role="alert"
    >
      {icon && icon}
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

export default AlertCmp;
