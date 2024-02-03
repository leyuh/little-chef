import { useEffect, useState } from "react";

import "../styles/Bar.css";

const SearchBar = (props) => {
    const {
        items,
        filteredItems,
        setFilteredItems
    } = props;

    const [input, setInput] = useState(null);

    useEffect(() => {
        !input ? 
            setFilteredItems(items) 
        :
            setFilteredItems(items.filter(item => item.toLowerCase().indexOf(input.toLowerCase()) !== -1));
    }, [input, items])

    return <div className="search-bar bar bg5 text0">
        <input type="text" placeholder="search" onChange={(e) => setInput(e.target.value)}/>
    </div>
}

export default SearchBar;