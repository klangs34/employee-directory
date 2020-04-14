import React, { Component } from 'react';
import Jumbotron from './Components/Jumbotron/jumbotron';
import Search from './Components/Search/search';
import DirectoryHeader from './Components/DirectoryHeader/directoryHeader';
import Employees from './Components/Employees/employees';
import axios from 'axios';

class App extends Component {
  state = {
    sortBy: "",
    results: [],
    search: "",
    filteredResults: []
  }

  handleSortBy = (event) => {
    event.preventDefault();
    if (this.state.sortBy === 'A-Z' || this.state.sortBy === "") {
      this.setState({ sortBy: 'Z-A' })
    } else {
      this.setState({ sortBy: 'A-Z' });
    }
  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/users')
      .then(res => {
        this.setState({ results: res.data, filteredResults: res.data })
      })
  }

  handleFilter = searchingData => {
    const newResults = this.state.results.filter(val => {
      let filterName = val.name.toUpperCase();
      let searchName = searchingData.toUpperCase();

      return filterName.includes(searchName);

    });
    if (newResults.length > 0) {
      this.setState({ filteredResults: newResults })
    } else {
      //show all
      this.setState({ filteredResults: this.state.results })
    }

  }

  handleSearch = event => {
    event.preventDefault();
    this.setState({ search: event.target.value });
    this.handleFilter(event.target.value);
  }

  render() {

    return (
      <div>
        <Jumbotron />
        <Search handleSearch={this.handleSearch} />
        <DirectoryHeader sort={this.handleSortBy} />
        <Employees sortBy={this.state.sortBy} employees={this.state.filteredResults} />
      </div>
    );
  }
}

export default App;
