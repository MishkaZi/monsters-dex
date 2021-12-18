import React, { Component } from 'react';
import './App.css';
import CardListComponent from './components/CardList/CardListComponent';
import SearchBoxComponent from './components/SearchBox/SearchBoxComponent';
import MonsterModel from './models/MonsterModel';

class App extends Component<{}, { monsters: MonsterModel[]; search: string }> {
  constructor(props: never) {
    super(props);
    this.state = {
      monsters: [],
      search: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((monsters) => this.setState({ monsters: monsters }))
      .catch((error) => console.log(error));
  }

  render(): React.ReactNode {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    return (
      <div className='App'>
        <h1>Monsters Dex</h1>
        <SearchBoxComponent
          placeHolder={'Search'}
          handleChange={(e) => this.setState({ search: e.target.value })}
        />
        <CardListComponent monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
