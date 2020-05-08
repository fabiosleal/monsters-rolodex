import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: "",
        };

        // Common way to bind the context of this
        // this.handleChange = this.handleChange.bind(this);
    }

    // arrow functions automatically bind this by lexical scope, bind the context to the place this where defined at the first place.
    handleChange = (e) => {
        this.setState({ searchField: e.target.value });
    };

    componentDidMount() {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => this.setState({ monsters: users }));
    }

    render() {
        const { monsters, searchField } = this.state; //destructuring
        const filteredMonsters = monsters.filter(
            (monster) => monster.name.toLowerCase().includes(searchField.toLowerCase())
            // includes method, verifies if the string passed inside includes is the same call on.
        );

        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox placeholder="Search Monsters" handleChange={this.handleChange} />
                {/* <CardList monsters={this.state.monsters} /> */}
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;

// import React, { Component } from "react";
// import "./App.css";

// class App extends Component {
//     constructor() {
//         super();

//         this.state = {
//             mosnters: [
//                 {
//                     id: "jskl",
//                     name: "Frankenstein"
//                 },
//                 {
//                     id: "hasd",
//                     name: "Wolfman"
//                 },
//                 {
//                     id: "sadl",
//                     name: "Mummy"
//                 },
//                 {
//                     id: "adsh",
//                     name: "Dracula"
//                 }
//             ]
//         }
//     }

//     render() {
//         return (
//             <div className='App'>
//                 {this.state.mosnters.map(monster => (
//                     <h1 key={monster.id}>{monster.name}</h1>
//                 ))}
//             </div>
//         );
//     }
// }

// export default App;
