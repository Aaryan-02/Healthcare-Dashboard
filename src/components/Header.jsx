import "./Header.css"
import user from "../assets/user.png"
import { FaSquarePlus } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left-section">
        <div className="search-container">
          <div className="search-icon"><FaSearch /></div>
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <div className="notification-icon"><FaBell color={"#3c35b2"}/></div>
      </div>
      <div className="header-right-section">
        <div className="user-profile">
          <img src={user} alt="User Avatar" className="user-avatar" />
        </div>
        <FaSquarePlus size={40} color={"#3c35b2"}/>
      </div>
    </header>
  )
}

export default Header
