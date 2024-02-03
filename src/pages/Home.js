import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Logo from "../images/logo.png";

import Info from "../components/Info.js";

import "../styles/Home.css";

const Home = (props) => {
    const {
        playMusic,
        setPlayMusic
    } = props;

    const navigate = useNavigate();
    const [showInfoDiv, setShowInfoDiv] = useState(false);

    return <div id="home" className="page bg3">
        <h1 id="title" className="text5">Little Chef</h1>
        <img src={Logo} id="home-logo" />

        <div id="home-btns-div" className="bg2 panel border2">
            <button id="play-btn" className="text5" onClick={() => {
                setPlayMusic(true);
                navigate("/kitchen");
            }}>play</button>
            <button id="info-btn" className="text5" onClick={() => {
                setShowInfoDiv(true);
            }}>info</button>
        </div>
        

        {showInfoDiv && <Info
            setShowInfoDiv={setShowInfoDiv}
        />}
    </div>
}

export default Home;