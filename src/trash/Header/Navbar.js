// import { useState, useEffect, useRef } from "react";
// import NavigationLeft from "./NavigationLeft";
// import NavigationRight from "./NavigationRight";
// import BurgerMenu from "./BurgerMenu";
// // import { ReactComponent as SignOut } from "../../assets/svg/SignOut.svg";

// const Navbar = () => {
//   const [currentLanguage, setCurrentLanguage] = useState("en");
//   // eslint-disable-next-line
//   const [isTooltipVisible, setIsTooltipVisible] = useState(false);

//   const tooltipRef = useRef(null);

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
//         setIsTooltipVisible(false);
//       }
//     };
//     window.addEventListener("click", handleOutsideClick);
//     return () => window.removeEventListener("click", handleOutsideClick);
//   }, []);

//   return (
//     <header>
//       <nav className="navbar">
//         <BurgerMenu className="BurgerMenu" />
//         <NavigationLeft />
//         <NavigationRight
//           currentLanguage={currentLanguage}
//           setCurrentLanguage={setCurrentLanguage}
//         />
//         {/* <SignOut className="SignOut" /> */}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
