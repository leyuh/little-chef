import "../styles/Checkerboard.css";

const Checkerboard = (props) => {
    const {
        width,
        height,
        colorA,
        colorB
    } = props;

    return <div className="checkerboard">
        {[...Array(height)].map((row, i) => {
            return <div className="row" key={i} style={{
                "height": `${100/height}vh`,
                "width": `calc(${100/height}vh * ${width})`
            }}>
                {[...Array(width)].map((col, j) => {
                    return <div className="tile" key={j} style={{
                        "width": `${100/height}vh`,
                        "backgroundColor": (i+j)%2 === 0 ? colorA : colorB
                    }}/>
                })}
            </div>
        })}
    </div>
}

export default Checkerboard;