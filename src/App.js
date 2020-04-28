import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state; //destructuring
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search Monsters"
          onChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
        />
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
