import React, { Component } from "react";
import CardList from "../components/cardList.jsx";
import SearchBox from "../components/searchBox.jsx";
import Scroll from "../components/scroll.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";

class App extends Component {
    constructor(){
        super()
        this.state = {
            robotipo: [],
            searchfield: ""
        }
    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=> Response.json())
        .then(users => this.setState({ robotipo: users }))
}    

    finder = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render(){
        const { robotipo, searchfield }= this.state;
        const filterRobo = robotipo.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robotipo.length ?
        <h1 className="ma0 pa2">Loading Please Wait</h1>:
        (<>
            <div className="tc flex flex-wrap flex-column items-center justify-center">
                <div className="f1">
                    <h1>Robo-Friends Here</h1>
                </div> 
                <SearchBox searcher={this.finder}/>
            </div>
            <Scroll>
                <div className="flex flex-wrap justify-center">
                    <ErrorBoundary>
                        <CardList robotic={filterRobo}/> 
                    </ErrorBoundary>
                </div>
            </Scroll>
        </>)
    }
}

export default App;