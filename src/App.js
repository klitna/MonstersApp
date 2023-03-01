import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './card-list.styles.css';
class App extends Component {
  constructor(){
    super();
    this.state = { 
      monsters: [],
      searchField: ''
    };
    
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return {monsters: users}
      })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {return {searchField};}
          );
  }

  render(){
    console.log('render');
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters App</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder='search' className='search monsters'/>
        <CardList monsters={filteredMonsters} className='card-list'/>
      </div>
    );
  }
}

export default App;
