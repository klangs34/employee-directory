import React, { Component } from 'react';
import Jumbotron from './Components/Jumbotron/jumbotron';
import Search from './Components/Search/search';
import DirectoryHeader from './Components/DirectoryHeader/directoryHeader';
import Employees from './Components/Employees/employees';
import axios from 'axios';

class App extends Component {
  state = {
    sortBy: "",
    employees: {
      results: []
    },
    search: ""
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
    axios.get('https://randomuser.me/api/?results=200&nat=us')
      .then(res => {
        //console.log(res.data)
        this.setState({ employees: res.data })
      })
  }

  handleFilter = searchingData => {
    const newResults = this.state.employees.results.filter(val => {
      let filterName = val.name.first.toUpperCase();
      let searchName = searchingData.toUpperCase();
      return filterName === searchName;
    });
    console.log(newResults)
    console.log(this.state.employees)
    if (newResults.length > 0) {
      this.setState({ employees: { ...this.state.employees, results: newResults } })
    } else {
      //show all
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
        <Employees sortBy={this.state.sortBy} employees={this.state.employees} />
      </div>
    );
  }
}

export default App;
