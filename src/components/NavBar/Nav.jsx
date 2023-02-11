import React, { useEffect, useState, useRef } from "react";
import {
  FaGreaterThan,
  FaLessThan,
  FaRegUserCircle,
  FaWpforms,
} from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { TbForms } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineUserPlus, HiOutlineUserGroup } from "react-icons/hi2";

import { NavLink } from "react-router-dom";
import { roles } from "../../constants/Roles";
import "./Nav.css";
const Nav = ({ role }) => {
  const [navOpen, setnavOpen] = useState(false);
  const navRef = useRef();
  const hamMenuIcon = useRef();
  const toggleNav = () => {
    setnavOpen(!navOpen);
    console.log("Toggle navigation");
  };
  useEffect(() => {
    let root = document.documentElement;
    let navDescs = document.querySelectorAll(".navDesc");
    let navHeaders = document.querySelectorAll(".navHeader");
    let navMenu = document.querySelector(".navItems");
    let navTop = document.querySelector(".navTop");
    let navFooter = document.querySelector(".navFooter");
    if (window.innerWidth > 600) {
      if (navOpen) {
        root.style.setProperty("--nav-width", "50px");
        navDescs.forEach((navDesc) => (navDesc.style.display = "none"));
        navHeaders.forEach((navDesc) => (navDesc.style.display = "none"));
        navMenu.style.marginLeft = "0";
        navTop.style.visibility = "hidden";
        navFooter.style.visibility = "hidden";
        navRef.current.classList.remove("open");
      } else {
        root.style.setProperty("--nav-width", "300px");
        navDescs.forEach((navDesc) => (navDesc.style.display = "inline-block"));
        navHeaders.forEach(
          (navDesc) => (navDesc.style.display = "inline-block")
        );
        navMenu.style.marginLeft = "40px";
        navTop.style.visibility = "visible";
        navFooter.style.visibility = "visible";
        navRef.current.classList.add("open");
      }
    } else if (window.innerWidth < 600) {
      if (navOpen) {
        root.style.setProperty("--nav-width", 300);

        navRef.current.style.left = 0;
      } else {
        root.style.setProperty("--nav-width", 100);

        navRef.current.style.left = "-100%";
      }
    }
  }, [navOpen, window.innerWidth]);

  return (
    <>
      <div className="hamburgerMenuIcon" ref={hamMenuIcon} onClick={toggleNav}>
        {navOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>
      <section className="navBarWrapper " ref={navRef}>
        <div className="togglerButton" onClick={() => toggleNav()}>
          {navOpen ? <FaGreaterThan /> : <FaLessThan />}
        </div>
        <div className="navTop">Dashboard</div>
        <div className="navDetailsWrapper flex-col content-between">
          <div className="navMenu">
            <div className="navHeader">Menu</div>
            <div className="navItems">
              <NavLink to="profile">
                <span className="navIcon">
                  <FaRegUserCircle />
                </span>
                <span className="navDesc"> &nbsp; Profile</span>
              </NavLink>
              {role === roles.SUPER_ADMIN && (
                <>
                  <NavLink to="create-admins">
                    <span className="navIcon">
                      <HiOutlineUserPlus />
                    </span>
                    <span className="navDesc"> &nbsp; Create Admins</span>
                  </NavLink>

                  <NavLink to="manage-admins">
                    <span className="navIcon">
                      <HiOutlineUserGroup />
                    </span>
                    <span className="navDesc"> &nbsp; Manage Admins</span>
                  </NavLink>
                </>
              )}
              {(role === roles.ADMIN || role === roles.SUPER_ADMIN) && (
                <>
                  <NavLink to="manage-form">
                    <span className="navIcon">
                      <FaWpforms />
                    </span>
                    <span className="navDesc"> &nbsp; Manage Forms</span>
                  </NavLink>
                </>
              )}
              {role === roles.ADMIN && (
                <>
                  <NavLink to="create-form">
                    <span className="navIcon">
                      <TbForms />
                    </span>
                    <span className="navDesc"> &nbsp; Create Form</span>
                  </NavLink>
                </>
              )}
              {role === roles.SURVEYOR && (
                <>
                  <NavLink to="request-form">
                    <span className="navIcon">
                      <FaRegUserCircle />
                    </span>
                    <span className="navDesc"> &nbsp; Request Form</span>
                  </NavLink>
                </>
              )}
            </div>
          </div>
          <div className="navFooter">
            <div className="navHeader">Profile</div>
            <div className="navProfile flex items-center content-start">
              <div className="profileImageWrapper">
                <img
                  src="https://api.dicebear.com/5.x/lorelei-neutral/svg?seed=Aneka"
                  className="profileImage"
                />
              </div>
              <div className="profileDetails">
                <div className="profileName">Gourav G.</div>
                <div className="profileRole">{role}</div>
              </div>
            </div>

            <div className="logOutBtn flex items-center content-center">
              <button className="flex items-center content-center">
                <IoMdExit />
                <span className="navDesc"> Log Out</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nav;
