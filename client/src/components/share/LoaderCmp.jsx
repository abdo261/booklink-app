
import { Spinner } from "react-bootstrap";

const LoadingCmp = ({ className, size, animation }) => {
  return (
    <Spinner
      size={size}
      animation={animation}
      {...props}
      className={className}
    />
  );
};

export default LoadingCmp;
