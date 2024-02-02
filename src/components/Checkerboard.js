import "../styles/Checkerboard.css";

import { useRef, useEffect, useState } from "react";

import { TILE_SIZE } from "../modules/configs.js";
import { BORDER_WIDTH } from "../modules/configs.js";

import Ingredient from "./Ingredient.js";
import Appliance from "./Appliance.js";

const Checkerboard = (props) => {
    const {
        areaRef,
        selectedItem,
        setSelectedItem,
        workspaceIngredients,
        setWorkspaceIngredients,
        workspaceAppliances,
        setWorkspaceAppliances,
        onItemClick
    } = props;


    const [tileCountX, setTileCountX] = useState(0);
    const [tileCountY, setTileCountY] = useState(0);


    useEffect(() => {

        let boardWidth = areaRef.current?.offsetWidth;
        let boardHeight = areaRef.current?.offsetHeight;

        setTileCountX(Math.floor((boardWidth - BORDER_WIDTH*2)/TILE_SIZE));
        setTileCountY(Math.floor((boardHeight - BORDER_WIDTH*2)/TILE_SIZE));

    }, [])


    return <div className="checkerboard border2" style={{
        width: `${tileCountX*TILE_SIZE}px`,
        height: `${tileCountY*TILE_SIZE}px`,
        borderWidth: `${BORDER_WIDTH}px`,
        left: `calc(50% - ${tileCountX*TILE_SIZE/2}px - ${BORDER_WIDTH}px)`,
        top: `calc(50% - ${tileCountY*TILE_SIZE/2}px - ${BORDER_WIDTH}px)`,
        gridTemplateColumns: `repeat(${tileCountX}, ${TILE_SIZE}px)`,
        gridTemplateRows: `repeat(${tileCountY}, ${TILE_SIZE}px)`
    }}>
        {[...Array(tileCountY)].map((val, x) => {
            return [...Array(tileCountX)].map((val, y) => {
                return <div 
                    className={`
                        tile 
                        ${(x+y)%2 === 0 ? `bg2` : `bg3`}
                    `} 
                    id={`${x}-${y}`} 
                    key={`${x}-${y}`} 
                    style={{
                        height: `${TILE_SIZE}px`,
                        width: `${TILE_SIZE}px`
                    }}
                    onClick={(e) => {
                        if (selectedItem !== null) {
                            setSelectedItem(null);
                        }
                    }}
                    onMouseEnter={(e) => {
                        if (selectedItem !== null) {
                            console.log("!");
                            if (selectedItem.type === "ingredient") {
                                console.log(selectedItem, workspaceIngredients);
                                setWorkspaceIngredients(prev => [...prev].map((ing, i) => {
                                    if (ing.key === selectedItem.key) {
                                        return {
                                            name: ing.name,
                                            tile: `${x}-${y}`,
                                            key: selectedItem.key
                                        }
                                    }
                                    return ing;
                                }));
                            } else if (selectedItem.type === "appliance") {
                                setWorkspaceAppliances(prev => [...prev].map((app, i) => {
                                    if (app.key === selectedItem.key) {
                                        return {
                                            name: app.name,
                                            tile: `${x}-${y}`,
                                            key: selectedItem.key
                                        }
                                    }
                                    return app;
                                }));
                            }
                            
                        }
                    }}
                    
                >
                    {workspaceIngredients.filter((ing, i) => {
                        return ing.tile === `${x}-${y}`;
                    }).map((ing, i) => {
                        return <Ingredient 
                            ingredient={ing}
                            isGenerator={false}
                            selectedItem={selectedItem}
                            setSelectedItem={setSelectedItem}
                            workspaceIngredients={workspaceIngredients}
                            setWorkspaceIngredients={setWorkspaceIngredients}
                            onItemClick={onItemClick}
                            key={i}
                        />
                    })}

                    {workspaceAppliances.filter((app, i) => {
                        return app.tile === `${x}-${y}`;
                    }).map((app, i) => {
                        return <Appliance 
                            appliance={app}
                            onItemClick={onItemClick}
                            key={i}
                        />
                    })}
                </div>
            })
        })}
    </div>
}

export default Checkerboard;