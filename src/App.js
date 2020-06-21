import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Cardlist from "./components/card-list/card-list";
import SearchBox from './components/search-list/search'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/users").then((resolve) => {
      this.setState({ monsters: resolve.data });
      // return resolve.json();
    });
    // .then((res) => {
    //   this.setState({monsters : res})
    // });
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(ele => {
      return ele.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1>Monster list</h1>
          <SearchBox placeholder='search monster' handlechange={e => {
            this.setState({ searchField: e.target.value })
          }}/>
          <Cardlist monsters={filteredMonsters} />
        </header>
      </div>
    );
  }
}

export default App;
