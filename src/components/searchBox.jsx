import React from "react";

const SearchBox = ( {searcher} ) => {
    return(
        <div className=" pa2 ">
            <input 
                className="pa3 ma4 ph4 tc w-auto br-pill bw1 ba b--blue bg-light-green"
                type="search" 
                placeholder="Search Your new Friend"
                onChange={searcher}
            />
        </div>
    )}

export default SearchBox;