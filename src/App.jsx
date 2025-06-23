import React, { Component } from "react";
import CardList from "./cardList";
import { robots } from './robot.js';
import SearchBox from "./searchBox.jsx";

class App extends Component {
    constructor(){
        super()
        this.state = {
            robotipo: robots,
            searchfield: ""
        }
    }

    finder = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render(){
        const filterRobo = this.state.robotipo.filter(robot =>{
            return robot.realname.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
                <div class="header ">
                    <div className="tc flex flex-wrap flex-column items-center justify-center">
                        <div className="f1">
                            <h1>Robo-Friends Here</h1>
                        </div> 
                        <SearchBox searcher={this.finder}/>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <CardList robotic={filterRobo}/> 
                    </div>
                </div>
        )
    }
}

export default App;