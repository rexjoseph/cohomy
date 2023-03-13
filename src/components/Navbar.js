import React, { useLayoutEffect, useRef, useState } from 'react'
import { useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const navRef = useRef();
  // set state of navigation scroll
  const [scrolled, setScrolled] = useState("unscrolled");

  const showNavbar = () => {
    navRef.current.classList.toggle("active");
  };
  
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
    <div className={`page-header ${scrolled}`}>
        <div className="nav-container" ref={navRef}>
          <nav>
            <ul className="mobile-nav">
              <li>
                <a href="/" id="link-logo" className="link-logo"></a>
              </li>
              <li>
                <div onClick={showNavbar} className="menu-icon-container">
                  <div className="menu-icon">
                    <span className="line-1"></span>
                    <span className="line-2"></span>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="desktop-nav">
              <div className="desktop-nav__flex1">
                <li>
                  <a href="/" className="link-logo"></a>
                </li>
              </div>
              <div className="desktop-nav__flex2">
                <li>
                  <a href='/product'>Product</a>
                </li>
                <li>
                  <a href='/experiences'>Experiences</a>
                </li>
                <li>
                  <a href='/about-us'>About</a>
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
              </div>
            </ul>
          </nav>
        </div>
      </div>
  )
}

export default Navbar