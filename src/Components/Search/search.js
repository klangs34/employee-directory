import React from 'react';

const Search = props => {

    return (
        <div className="w-100 d-flex justify-content-center py-4 bg-secondary">
            <div className="w-25">
                <input onChange={props.handleSearch} type="text" className="form-control" placeholder="Search Name" aria-label="Search"></input>
            </div>
        </div>
    )
    
}

export default Search;