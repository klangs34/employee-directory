import React, { Component } from 'react';
import Jumbotron from './Components/Jumbotron/jumbotron';
import Search from './Components/Search/search';
import DirectoryHeader from './Components/DirectoryHeader/directoryHeader';
import Employees from './Components/Employees/employees';

class App extends Component {
  state = {
    sortBy: 'A-Z'
  }

  handleSortBy = (event) => {
    event.preventDefault();
    if (this.state.sortBy === 'A-Z') {
      this.setState({ sortBy: 'Z-A' })
    } else {
      this.setState({ sortBy: 'A-Z' });
    }
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <Search />
        <DirectoryHeader sort={this.handleSortBy} />
        <Employees sortBy={this.state.sortBy} />
      </div>
    );
  }
}

export default App;
