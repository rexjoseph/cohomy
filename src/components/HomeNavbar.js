import React, { useLayoutEffect, useRef, useState } from "react";
import "./HomeNavbar.css"

const HomeNavbar = () => {
  const navRef = useRef()
  // set state of navigation scroll
  const [scrolled, setScrolled] = useState("unscrolled")

  const showNavbar = () => {
    navRef.current.classList.toggle('active');
  }

  // useLayoutEffect to mutate the DOM
  useLayoutEffect(() => {
    const handleScroll = () => 
    window.scrollY > 0 ? setScrolled('scrolled') : setScrolled("unscrolled");

    // when window is scrolled, set state of scrolled to true

    window.addEventListener('scroll', handleScroll);
    // event listener added for scroll

    return () => window.removeEventListener('scroll', handleScroll);
    // remove the event
  }, [])

  return (
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
                <a>Products</a>
              </li>
              <li>
                <a>Properties</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Sign In</a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HomeNavbar;
