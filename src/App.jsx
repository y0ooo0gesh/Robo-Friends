import React, { Component } from "react";
import CardList from "./cardList";
import SearchBox from "./searchBox.jsx";
import Scroll from "./scroll";

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
        const filterRobo = this.state.robotipo.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
    if (this.state.robotipo.length === 0){
        return <h1 className="ma0 pa2">Loading Please Wait</h1>;
    } else {
        return(
                <>
                    <div className="tc flex flex-wrap flex-column items-center justify-center">
                        <div className="f1">
                            <h1>Robo-Friends Here</h1>
                        </div> 
                        <SearchBox searcher={this.finder}/>
                    </div>
                    <Scroll>
                        <div className="flex flex-wrap justify-center">
                            <CardList robotic={filterRobo}/> 
                        </div>
                    </Scroll>
                </>
        )
        }
    }
}

export default App;