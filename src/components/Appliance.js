import "../styles/Appliance.css";

const Appliance = (props) => {
    const {
        appliance,
        onItemClick
    } = props;

    return <div 
        id={appliance.name.split(" ").join("-")} 
        className={`grid-item appliance border0 text0`} 
        onClick={() => onItemClick(appliance, "appliance")}
    >
        <h1 className="text0">{appliance.name}</h1>
    </div>
}

export default Appliance;