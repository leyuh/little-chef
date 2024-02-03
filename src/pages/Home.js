import { useNavigate } from "react-router-dom";

import "../styles/Home.css";

const Home = (props) => {
    const {
        playMusic,
        setPlayMusic
    } = props;

    const navigate = useNavigate();

    return <div id="home" className="page bg3">
        <button id="play-btn" className="bg5 border1 text0" onClick={() => {
            setPlayMusic(true);
            navigate("/kitchen");
        }}>Play</button>
    </div>
}

export default Home;