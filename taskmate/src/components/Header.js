import { useState } from "react"
import Logo from "../assests/logo.png"

export const Header = () => {

  const [theme,setTheme]= useState("dark");

  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="Taskmate Logo" />
            <span>Taskmate</span>
        </div>
        <div className="themeSelector">
            <span className="light"></span>
            <span className="medium"></span>
            <span className="dark activeTheme"></span>
            <span className="gOne"></span>
            <span className="gTwo"></span>
            <span className="gThree"></span>
        </div>
    </header>
  )
}