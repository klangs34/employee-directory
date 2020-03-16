import React, { Component } from 'react';

class Search extends Component {
    state = {
        search: ""
    }

    handleSearch = event => {
        event.preventDefault();
        this.setState({ search: event.target.value })
    }
    
    render(){
        return (
            <div className="w-100 d-flex justify-content-center py-4 bg-secondary">
                <div className="w-25">
                    <input onChange={this.handleSearch} type="text" className="form-control" placeholder="Search" aria-label="Search"></input>
                </div>
            </div>
        )
    }
}

export default Search;