import React from "react";

const SearchBox = ( {searcher} ) => {
    return(
        <div className=" pa2 ">
        <input 
            className="pa3 tc w-20 br-pill grow  bw1 ba b--blue bg-light-green"
            type="search" 
            placeholder="Search Your ROBO-Friends"
            onChange={searcher}
        />
        </div>
    )}

export default SearchBox;