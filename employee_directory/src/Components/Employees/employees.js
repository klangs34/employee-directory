import React from 'react';

const Employees = props => {

    const { results } = props.employees;
    //console.log(results);
    let employeesArr;
    let style;

    if (results) {
        employeesArr = results.map((val, index) => {
            if((index + 2) % 2 === 0) {
                style = "row p-3 bg-light"
            } else {
                style = "row p-3"
            }
            return <div className={style} key={val.id.value}>
                <div className="col-1 font-weight-bold">
                    <img src={val.picture.thumbnail} alt="employee" />
                </div>
                <div className="col-3 font-weight-bold">
                    {`${val.name.first} ${val.name.last}`}
                </div>
                <div className="col font-weight-bold">
                    {val.phone}
                </div>
                <div className="col-3 font-weight-bold">
                    <a href={val.email}>{val.email}</a>
                </div>
                <div className="col-2 font-weight-bold">
                    {val.dob.date.substring(0, 10)}
                </div>
            </div>
        }).sort((a, b) => {
            if(props.sortBy === 'A-Z') {
                console.log(props.sortBy)
                let nameA = a.props.children[1].props.children.toUpperCase();
                let nameB = b.props.children[1].props.children.toUpperCase();
                if (nameA < nameB) {
                    return -1
                }
            } else if(props.sortBy === 'Z-A') {
                let nameA = a.props.children[1].props.children.toUpperCase();
                let nameB = b.props.children[1].props.children.toUpperCase();
                if (nameA > nameB) {
                    return -1
                }
            } else {
               //no sort
               return 0;
            }
        })
    } else {
        return <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    }

    //console.log(employeesArr)

    return (
        <div className="container mt-4 border-top">
            {employeesArr}
        </div>
    )

};

export default Employees;