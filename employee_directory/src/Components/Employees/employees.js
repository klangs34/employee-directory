import React, { Component } from 'react';
import axios from 'axios';

class Employees extends Component {

    state = {
        employees: {}
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=200&nat=us')
            .then(res => {
                //console.log(res.data)
                this.setState({ employees: res.data })
            })
    }

    render() {

        const { results } = this.state.employees;
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
                if(this.props.sortBy === 'A-Z') {
                    console.log(this.props.sortBy)
                    let nameA = a.props.children[1].props.children.toUpperCase();
                    let nameB = b.props.children[1].props.children.toUpperCase();
                    if (nameA < nameB) {
                        return -1
                    }
                } else {
                    let nameA = a.props.children[1].props.children.toUpperCase();
                    let nameB = b.props.children[1].props.children.toUpperCase();
                    if (nameA > nameB) {
                        return -1
                    }
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
    }
};

export default Employees;