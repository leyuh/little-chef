import { useEffect, useState } from "react";

import "../styles/Bar.css";

const SearchBar = (props) => {
    const {
        items,
        filteredItems,
        setFilteredItems,
        condition = () => true
    } = props;

    const [input, setInput] = useState(null);

    useEffect(() => {
        !input ? 
            setFilteredItems(items)
        :
            setFilteredItems(items.filter(item => item.toLowerCase().indexOf(input.toLowerCase()) !== -1).filter(condition));
    }, [input, items])

    return <div className="search-bar bar bg5 text0">
        <input 
            type="text"
            placeholder="search"
            onChange={(e) => setInput(e.target.value)}
            onFocus={(e) => {e.target.value = ""; setInput(null)}}
        />
            
    </div>
}

export default SearchBar;