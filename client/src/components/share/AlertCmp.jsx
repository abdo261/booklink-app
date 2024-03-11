
import { Alert } from "react-bootstrap";

const AlertCmp = ({ message, variant = "danger" , className }) => {
  return (
    <Alert variant={variant} dismissible className={className}>
      {message && message}
    </Alert>
  );
};

export default AlertCmp;
