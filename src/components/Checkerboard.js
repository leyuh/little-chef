import "../styles/Checkerboard.css";

import { useRef, useEffect, useState } from "react";

import { TILE_SIZE } from "../modules/configs.js";
import { BORDER_WIDTH } from "../modules/configs.js";

import Ingredient from "./Ingredient.js";

const Checkerboard = (props) => {
    const {
        areaRef,
        selectedIngredient,
        setSelectedIngredient,
        workspaceIngredients,
        setWorkspaceIngredients
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
                        if (selectedIngredient !== null) {
                            setSelectedIngredient(null);
                        }
                    }}
                    onMouseEnter={(e) => {
                        if (selectedIngredient !== null) {
                            console.log("!");
                            setWorkspaceIngredients(prev => [...prev].map((ingredient, i) => {
                                if (ingredient.key === selectedIngredient) {
                                    return {
                                        name: ingredient.name,
                                        tile: `${x}-${y}`,
                                        key: selectedIngredient
                                    }
                                }
                                return ingredient;
                            }));
                        }
                    }}
                    
                >
                    {workspaceIngredients.filter((ingredient, i) => {
                        return ingredient.tile === `${x}-${y}`;
                    }).map((ingredient, i) => {
                        return <Ingredient 
                            ingredient={ingredient}
                            generator={false}
                            selectedIngredient={selectedIngredient}
                            setSelectedIngredient={setSelectedIngredient}
                            workspaceIngredients={workspaceIngredients}
                            setWorkspaceIngredients={setWorkspaceIngredients}
                            key={i}
                        />
                    })}
                </div>
            })
        })}
    </div>
}

export default Checkerboard;