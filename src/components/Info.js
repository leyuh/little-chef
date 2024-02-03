import "../styles/Info.css";

const Info = (props) => {
    const {
        setShowInfoDiv
    } = props;

    return <div id="info-div" className="border1 bg4 panel text0">
        <h1>Info</h1>
        <p>Welcome to Little Chef, the ultimate crafting game for chefs and newbies alike! Arrange your kitchen, discover new recipes, and become the greatest chef of them all.</p>

        <h5>Go cook it up, what are you waiting for?</h5>

        <button className="close-btn bg5 border1 text0" onClick={() => {
            setShowInfoDiv(false);
        }}>close</button>
    </div>
}

export default Info;