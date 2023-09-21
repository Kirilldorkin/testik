import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import BurgerMenu from "../components/BurgerMenu";
import SignIn from "../components/popups/SignIn";
import LogIn from "../components/popups/LogIn";

import Logo from "../assets/svg/small-logo.svg";
import FlagZh from "../assets/images/Languages/flag-zh.png";
import FlagEn from "../assets/images/Languages/flag-en.png";
import FlagKg from "../assets/images/Languages/flag-kg.png";
import FlagRu from "../assets/images/Languages/flag-ru.png";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { GrClose } from "react-icons/gr";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

import user from "../assets/images/user.png";
import CustomCheckbox from "../components/CustomCheckbox";
import Mobile from "../components/popups/Mobile";

const Header = () => {
  const [showLinksTooltip, setShowLinksTooltip] = useState(false);
  const [showLanguageTooltip, setShowLanguageTooltip] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const languages = [
    { code: "zh", name: "中國人", img: FlagZh },
    { code: "en", name: "English", img: FlagEn },
    { code: "kg", name: "Кыргызча", img: FlagKg },
    { code: "ru", name: "Русский", img: FlagRu },
  ];

  const initialValues = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone Number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    acceptTerms: Yup.boolean().oneOf(
      [true],
      "Accept terms and conditions is required"
    ),
  });

  const handleLanguageSelect = (languageCode) => {
    setSelectedLanguage(languageCode);
  };

  const handleLinksTooltipClick = () => {
    setShowLinksTooltip(!showLinksTooltip);
  };

  const handleLanguageTooltipClick = () => {
    setShowLanguageTooltip(!showLanguageTooltip);
  };

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  const [isPopupMobile, setPopupMobile] = useState(false);
  const [isPopupSignIn, setPopupSignIn] = useState(false);
  const [isPopupLogIn, setPopupLogIn] = useState(false);

  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggleSection = () => {
    setIsSignUp(!isSignUp);
  };

  const handleOpenSignIn = () => {
    setPopupSignIn(true);
  };

  const handleCloseSignIn = () => {
    setPopupSignIn(false);
  };

  const handleOpenLogIn = () => {
    setPopupLogIn(true);
  };

  const handleCloseLogIn = () => {
    setPopupLogIn(false);
  };

  const handleOpenMobile = () => {
    setPopupMobile(true);
  };

  const handleCloseMobile = () => {
    setPopupMobile(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <nav className="navbar">
      <BurgerMenu className="BurgerMenu" />
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <img
        className="access"
        src={user}
        alt="user"
        onClick={handleOpenMobile}
      />

      <Mobile isOpen={isPopupMobile} onClose={handleCloseMobile}>
        {isSignUp ? (
          <section className="mobile-login-form">
            <div className="h5">
              <h5 onClick={() => setIsSignUp(false)}>Sign Up</h5>
              <h5 className="active">Log In</h5>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="login-form-container">
                <div className="login-form-heading">
                  <h2>Log In</h2>
                  <GrClose className="icon" onClick={handleCloseMobile} />
                </div>
                <div className="input-group email">
                  <label htmlFor="email">Email address</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email address"
                  />
                  <ErrorMessage
                    name="email"
                    component="h6"
                    className="login-form-error"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <div className="password-container">
                    <label className="input-label">
                      <FaLock className="lock-icon" />
                      <input
                        type={showPassword ? "text" : "password"}
                        className="password-input"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span
                        className="toggle-password"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                      </span>
                    </label>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="h6"
                    className="login-form-error"
                  />
                </div>
              </Form>
            </Formik>
            <button onClick={handleButtonClick} className="mobile-login-btn">
              LOG IN
            </button>
          </section>
        ) : (
          <section className="mobile-signin-form">
            <div className="h5">
              <h5 className="active">Sign Up</h5>
              <h5 onClick={() => setIsSignUp(true)}>Log In</h5>
            </div>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="signin-form-container">
                <div className="signin-form-heading">
                  <h2>Create an Account</h2>
                  <GrClose className="icon" onClick={handleCloseMobile} />
                </div>
                <div className="signin-form-inputs">
                  <div className="signin-form-group user-details">
                    <div className="input-group">
                      <label htmlFor="username">Username</label>
                      <Field
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                      />
                      <ErrorMessage
                        name="username"
                        component="h6"
                        className="signin-form-error"
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="firstName">First Name</label>
                      <Field
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="h6"
                        className="signin-form-error"
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="lastName">Last Name</label>
                      <Field
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="h6"
                        className="signin-form-error"
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="email">Email address</label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email address"
                      />
                      <ErrorMessage
                        name="email"
                        component="h6"
                        className="signin-form-error"
                      />
                    </div>
                  </div>
                  <div className="number">
                    <label htmlFor="phone" className="phone">
                      Phone Number
                    </label>
                    <div className="signin-form-number-inputs">
                      <div className="signin-form-country-code">
                        <PhoneInput
                          international
                          defaultCountry="BD"
                          value={phoneNumber}
                          onChange={setPhoneNumber}
                        />
                        <svg
                          className="arrow-down-2"
                          width="12"
                          height="7"
                          viewBox="0 0 15 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.3512 0.993164L7.61944 7.72491L0.887695 0.993164"
                            stroke="#130F26"
                            strokeWidth="2.16377"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <Field
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="8023456789"
                        className="signin-form-phone-number"
                      />
                    </div>
                    <ErrorMessage
                      name="phone"
                      component="h6"
                      className="signin-form-error"
                    />
                  </div>
                  <div className="signin-form-group">
                    <div className="signin-form-group pass">
                      <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <div className="password-container">
                          <label className="input-label">
                            <FaLock className="lock-icon" />
                            <input
                              type={showPassword ? "text" : "password"}
                              className="password-input"
                              placeholder="Placehoder"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                              className="toggle-password"
                              onClick={togglePasswordVisibility}
                            >
                              {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                          </label>
                        </div>
                        <ErrorMessage
                          name="password"
                          component="h6"
                          className="signin-form-error"
                        />
                      </div>
                    </div>
                    <div className="signin-form-group confirm_pass">
                      <div className="input-group">
                        <label htmlFor="password">Confirm password</label>
                        <div className="password-container">
                          <label className="input-label">
                            <FaLock className="lock-icon" />
                            <input
                              type={showPassword ? "text" : "password"}
                              className="password-input"
                              placeholder="Placehoder"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                              className="toggle-password"
                              onClick={togglePasswordVisibility}
                            >
                              {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                          </label>
                        </div>
                        <ErrorMessage
                          name="password"
                          component="h6"
                          className="signin-form-error"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="signin-form-accept-terms">
                  <label htmlFor="acceptTerms" className="acceptTerms">
                    <CustomCheckbox />I accept «Client Agreement» and confirm
                    that I am 18 years old.
                  </label>
                  <ErrorMessage
                    name="acceptTerms"
                    component="h6"
                    className="signin-form-error"
                  />
                </div>

                <button onClick={handleButtonClick} className="mobile-sign-btn">
                  SIGN UP
                </button>
              </Form>
            </Formik>
          </section>
        )}
      </Mobile>

      <div className="navbar-links">
        <Link className="capital-text" to="/">
          Trade now
        </Link>
        <div className="links-tooltip">
          <div className="text" onClick={handleLinksTooltipClick}>
            <span className="capital-text">For traders</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
            >
              <path
                d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7V8H9V7H7Z"
                fill="white"
              />
            </svg>
          </div>

          {showLinksTooltip && (
            <div className="tooltip">
              <Link to={"/replenishment"}>Replenishment</Link>
              <Link to={"/how-to-trade"}>How to play</Link>
              <Link to={"/faq"}>FAQ</Link>
            </div>
          )}
        </div>
      </div>

      <div className="language-buttons-container">
        <div className="navbar-buttons">
          <Button
            onClick={handleOpenLogIn}
            children={"Log in"}
            type={"primary"}
            clicked={false}
          />
          <Button
            onClick={handleOpenSignIn}
            children={"Sing up"}
            type={"primary"}
            clicked={false}
          />

          <LogIn isOpen={isPopupLogIn} onClose={handleCloseLogIn}>
            <div className="overlay"></div>
            <section className="login-form">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="login-form-container">
                  <div className="login-form-heading">
                    <h2>Log In</h2>
                    <GrClose className="icon" onClick={handleCloseLogIn} />
                  </div>
                  <div className="input-group email">
                    <label htmlFor="email">Email address</label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email address"
                    />
                    <ErrorMessage
                      name="email"
                      component="h6"
                      className="login-form-error"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <div className="password-container">
                      <label className="input-label">
                        <FaLock className="lock-icon" />
                        <input
                          type={showPassword ? "text" : "password"}
                          className="password-input"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                          className="toggle-password"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                      </label>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="h6"
                      className="login-form-error"
                    />
                  </div>
                </Form>
              </Formik>
              <button onClick={handleButtonClick} className="login-btn">
                LOG IN
              </button>
            </section>
          </LogIn>

          <SignIn isOpen={isPopupSignIn} onClose={handleCloseSignIn}>
            <div className="overlay"></div>
            <section className="signin-form">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="signin-form-container">
                  <div className="signin-form-heading">
                    <h2>Create an Account</h2>
                    <GrClose className="icon" onClick={handleCloseSignIn} />
                  </div>
                  <div className="signin-form-inputs">
                    <div className="signin-form-group user-details">
                      <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <Field
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Username"
                        />
                        <ErrorMessage
                          name="username"
                          component="h6"
                          className="signin-form-error"
                        />
                      </div>
                      <div className="input-group">
                        <label htmlFor="firstName">First Name</label>
                        <Field
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                        />
                        <ErrorMessage
                          name="firstName"
                          component="h6"
                          className="signin-form-error"
                        />
                      </div>
                      <div className="input-group">
                        <label htmlFor="lastName">Last Name</label>
                        <Field
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder="Last Name"
                        />
                        <ErrorMessage
                          name="lastName"
                          component="h6"
                          className="signin-form-error"
                        />
                      </div>
                      <div className="input-group">
                        <label htmlFor="email">Email address</label>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email address"
                        />
                        <ErrorMessage
                          name="email"
                          component="h6"
                          className="signin-form-error"
                        />
                      </div>
                    </div>
                    <div className="number">
                      <label htmlFor="phone" className="phone">
                        Phone Number
                      </label>
                      <div className="signin-form-number-inputs">
                        <div className="signin-form-country-code">
                          <PhoneInput
                            international
                            defaultCountry="BD"
                            value={phoneNumber}
                            onChange={setPhoneNumber}
                          />
                          <svg
                            className="arrow-down-2"
                            width="12"
                            height="7"
                            viewBox="0 0 15 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.3512 0.993164L7.61944 7.72491L0.887695 0.993164"
                              stroke="#130F26"
                              strokeWidth="2.16377"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <Field
                          type="text"
                          id="phone"
                          name="phone"
                          placeholder="8023456789"
                          className="signin-form-phone-number"
                        />
                      </div>
                      <ErrorMessage
                        name="phone"
                        component="h6"
                        className="signin-form-error"
                      />
                    </div>
                    <div className="signin-form-group">
                      <div className="signin-form-group pass">
                        <div className="input-group">
                          <label htmlFor="password">Password</label>
                          <div className="password-container">
                            <label className="input-label">
                              <FaLock className="lock-icon" />
                              <input
                                type={showPassword ? "text" : "password"}
                                className="password-input"
                                placeholder="Placehoder"
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <span
                                className="toggle-password"
                                onClick={togglePasswordVisibility}
                              >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                              </span>
                            </label>
                          </div>
                          <ErrorMessage
                            name="password"
                            component="h6"
                            className="signin-form-error"
                          />
                        </div>
                      </div>
                      <div className="signin-form-group confirm_pass">
                        <div className="input-group">
                          <label htmlFor="password">Confirm password</label>
                          <div className="password-container">
                            <label className="input-label">
                              <FaLock className="lock-icon" />
                              <input
                                type={showPassword ? "text" : "password"}
                                className="password-input"
                                placeholder="Placehoder"
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <span
                                className="toggle-password"
                                onClick={togglePasswordVisibility}
                              >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                              </span>
                            </label>
                          </div>
                          <ErrorMessage
                            name="password"
                            component="h6"
                            className="signin-form-error"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="signin-form-accept-terms">
                    <label htmlFor="acceptTerms" className="acceptTerms">
                      <CustomCheckbox />I accept <text>«Client Agreement»</text>{" "}
                      and confirm that I am 18 years old.
                    </label>
                    <ErrorMessage
                      name="acceptTerms"
                      component="h6"
                      className="signin-form-error"
                    />
                  </div>
                </Form>
              </Formik>
              <button onClick={handleButtonClick} className="sign-btn">
                SIGN UP
              </button>
            </section>
          </SignIn>
        </div>

        <div className="language-selector">
          <div className="text" onClick={handleLanguageTooltipClick}>
            <img
              src={languages.find((lang) => lang.code === selectedLanguage).img}
              alt="Flag"
            />
            <span className="capital-text">
              {languages.find((lang) => lang.code === selectedLanguage).name}
            </span>
          </div>
          {showLanguageTooltip && (
            <div className="tooltip">
              {languages
                .filter((lang) => lang.code !== selectedLanguage)
                .map((language) => (
                  <div
                    key={language.code}
                    className="text"
                    onClick={handleLanguageTooltipClick}
                  >
                    <img src={language.img} alt="Flag" />
                    <span onClick={() => handleLanguageSelect(language.code)}>
                      {language.name}
                    </span>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
