import React, { useState } from "react";
import "./Sidebar.css";
import { useNavigate } from 'react-router-dom';
import Logo from "../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true);
  const navigate = useNavigate();

  const sidebarVariants = {
    true: { left: '0' },
    false: { left: '-60%' },
  };

  const handleNavigation = (path, index) => {
    setSelected(index);
    navigate(path);
  };

  const handleLogOut = (e) => {
    
    navigate('/'); 
};


  return (
    <>
      <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpaned(!expanded)}>
        <UilBars />
      </div>
      <motion.div className='sidebar' variants={sidebarVariants} animate={window.innerWidth <= 768 ? `${expanded}` : ''}>
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            MO<span>NA</span>O
          </span>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => handleNavigation(item.path, index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          {/* Signout Icon */}
          <div className="menuItem" onClick={handleLogOut}>
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Sidebar;