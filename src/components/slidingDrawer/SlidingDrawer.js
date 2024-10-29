import React, { useEffect, useState } from "react";
import "./SlidingDrawer.css";

const SlidingDrawer = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  useEffect(() => {
    // Automatically open drawer when the component loads
    setIsOpenDrawer(true);
  }, []);

  const handleClose = () => {
    setIsOpenDrawer(false);
  };

  return (
    <div>
      {isOpenDrawer && <div className="overlay" onClick={handleClose}></div>}
      <div className={`drawer ${isOpenDrawer ? "open" : ""}`}>
        <p>Drawer Content</p>
      </div>
    </div>
  );
};

export default SlidingDrawer;
