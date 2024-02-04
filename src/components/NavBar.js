import { useNavigate, Link } from "react-router-dom";
import "../styles/NavBar.css";
import { useEffect } from "react";

const NavBar = (props) => {
    const navigate = useNavigate();


    return <div id="nav-bar">
        
        <Link to={"/kitchen"} className="nav-btn text5"> kitchen </Link>
        <Link to={"/recipes"} className="nav-btn text5"> recipes </Link>
    </div>
}

export default NavBar;