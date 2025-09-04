import React, { useEffect, useState} from "react";
import CardList from "../components/cardList.jsx";
import SearchBox from "../components/searchBox.jsx";
import Scroll from "../components/scroll.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";

export default function App() {
    const [robots, setrobots] = useState([]);
    const [searchfield, setsearchfield] = useState("");

    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=> Response.json())
        .then(users => setrobots(users))
    },[])
    //dependdencies in useEffect is to tell run when  this dependencies changes and [] means that run only ones when app renders 
    // note do not forget dependencies or it will keep going in infinite loop

    const finder = (event) => {
        setsearchfield(event.target.value);
    }

    const filteredRobo = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !robots.length ?
    <h1 className="ma0 pa2">Loading Please Wait</h1>:
    (<>
        <div className="tc flex flex-wrap flex-column items-center justify-center">
            <div className="f1">
                <h1>Robo-Friends Here</h1>
            </div> 
            <SearchBox searcher={finder}/>
        </div>
        <Scroll>
            <div className="flex flex-wrap justify-center">
                <ErrorBoundary>
                    <CardList robotic={filteredRobo}/> 
                </ErrorBoundary>
            </div>
        </Scroll>
    </>)
}