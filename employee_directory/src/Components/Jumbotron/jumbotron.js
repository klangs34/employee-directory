import React from 'react';

const Jumbrotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid border-bottom border-danger bg-info mb-0">
            <div className="container d-flex flex-column align-items-center">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">Click on carrots to filter by heading or use the search box to narrow your results.</p>
            </div>
        </div>
    )
}

export default Jumbrotron;