import React from "react";
import BrandLogo from "../../assets/NavLogo.png";
import CallIcon from "../../assets/call1.png";
import emailLogo from "../../assets/emailLogo.png";
import Button from "../Button/Button";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className='navHeader py-3 brand-border-bottom'>
        <div className='container'>
          <div className='d-flex flex-md-row flex-column align-items-start align-items-md-center'>
            <a class='navbar-brand pb-3 pb-md-0' href='#'>
              <img src={BrandLogo} alt='' />
            </a>
            {/* Nav Contact Info */}
            <div className='nav_contact_info d-flex flex-md-row flex-column align-items-start align-items-md-center ms-md-auto gap-4 gap-md-5'>
              <div className='d-flex align-items-center gap-4'>
                <div>
                  <img src={CallIcon} alt='' />
                </div>
                <p>0203 519 4420</p>
              </div>
              <div className='d-flex align-items-center gap-4'>
                <div>
                  <img src={emailLogo} alt='' />
                </div>
                <p>info@solarinnovatio.com</p>
              </div>
              <Button />
            </div>
          </div>
        </div>
      </div>
      <nav class='navbar navbar-expand-xl py-4'>
        <div class='container'>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>

          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav mb-2 mb-lg-0'>
              <li class='nav-item'>
                <a class='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Chi Siamo
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link'>S.I.R.E</a>
              </li>
              <li class='nav-item'>
                <a class='nav-link'>SIRE Features</a>
              </li>
              <li class='nav-item'>
                <a class='nav-link'>Why SIRE?</a>
              </li>
              <li class='nav-item'>
                <a class='nav-link'>SIRE Product</a>
              </li>
              <li class='nav-item last_item'>
                <a class='nav-link'>How it Works?</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
