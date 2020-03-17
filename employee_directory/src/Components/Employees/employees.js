import React from 'react';

const Employees = props => {
    const { employees } = props;
    //console.log(employees);
    let employeesArr;
    let style;

    if (employees) {
        employeesArr = employees.map((val, index) => {
            if((index + 2) % 2 === 0) {
                style = "row p-3 bg-light"
            } else {
                style = "row p-3"
            }
            return <div className={style} key={val.id}>
                <div className="col-2 font-weight-bold">
                    {val.username}
                </div>
                <div className="col-3 font-weight-bold">
                    {val.name}
                </div>
                <div className="col font-weight-bold">
                    {val.phone}
                </div>
                <div className="col-3 font-weight-bold">
                    <a href={val.email}>{val.email}</a>
                </div>
                <div className="col-2 font-weight-bold">
                    {val.company.name}
                </div>
            </div>
        })
        .sort((a, b) => {
                if(props.sortBy === 'A-Z') 
                {
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
                } 
                //no sort
                return 0;   
            })
    } else {
        return <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    }

    return (
        <div className="container mt-4 border-top">
            {employeesArr}
        </div>
    )

};

export default Employees;