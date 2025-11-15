import { useState } from "react";

function Toggle({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return children(isOpen, toggle);
}

export default Toggle;
