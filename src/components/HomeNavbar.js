import React, { useLayoutEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./HomeNavbar.css";
import LoginModal from "./LoginModal";

const HomeNavbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);

  const navRef = useRef();
  // set state of navigation scroll
  const [scrolled, setScrolled] = useState("unscrolled");

  const showNavbar = () => {
    navRef.current.classList.toggle("active");
  };

  if (openModal) {
    navRef.current.classList.remove("active");
  }
  
  // useLayoutEffect to mutate the DOM
  useLayoutEffect(() => {
    const handleScroll = () =>
      window.scrollY > 0 ? setScrolled("scrolled") : setScrolled("unscrolled");

    // when window is scrolled, set state of scrolled to true

    window.addEventListener("scroll", handleScroll);
    // event listener added for scroll

    return () => window.removeEventListener("scroll", handleScroll);
    // remove the event
  }, []);

  return (
    <>
      <div className={`page-header ${scrolled}`}>
        <div className="nav-container" ref={navRef}>
          <nav>
            <ul className="mob-nav">
              <li>
                <a href="#" id="link-logo1" className="link-logo1"></a>
              </li>
              <li>
                <div onClick={showNavbar} className="menu-icon1-container1">
                  <div className="menu-icon1">
                    <span className="line-1"></span>
                    <span className="line-2"></span>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="desk-nav">
              <div className="desk-nav__flex1">
                <li>
                  <a href="/" className="link-logo1"></a>
                </li>
              </div>
              <div className="desk-nav__flex2">
                <li>
                  <a href="/products">Products</a>
                </li>
                <li>
                  <a href="/experiences">Experiences</a>
                </li>
                <li>
                  <a href="/about-us">About</a>
                </li>
                {
                  currentUser ? (
                    <li>
                      <a href="/profile">{currentUser.firstName}</a>
                    </li>
                  ) : (
                    <li>
                      <a href="/sign-in">Log in</a>
                    </li>
                  )
                }
                {/* <li onClick={setOpenModal}>
                  {
                    currentUser ? (
                      <a href="/profile">Rex</a>
                    ) : (
                      <a>Log in</a>
                    )
                  }
                </li> */}
              </div>
            </ul>
          </nav>
        </div>
      </div>
      <LoginModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default HomeNavbar;
