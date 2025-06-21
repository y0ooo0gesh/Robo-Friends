import React from "react";
import CardList from "./cardList";
import { robots } from './robot.js';
import SearchBox from "./searchBox.jsx";

const App = () => {
    return(
        <div className="tc ">
            
            <h1>Robo-Friends Here</h1>
            <SearchBox/>
            <CardList robotic={robots}/> 
        </div>
    )
}

export default App;