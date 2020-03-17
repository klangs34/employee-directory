import React from 'react';

const DirectoryHeader = ({ sort }) => {
    return (
        <div className="container mt-4 border-top">
            <div className="row">
                <div className="col-2 font-weight-bold">
                    Username
                </div>
                <div className="col-3 font-weight-bold">
                    Name <img src="https://img.icons8.com/android/24/000000/sort.png" alt="sort" onClick={sort} />
                </div>
                <div className="col font-weight-bold">
                    Phone
                </div>
                <div className="col-3 font-weight-bold">
                    Email
                </div>
                <div className="col-2 font-weight-bold">
                    Company
                </div>
            </div>

        </div>
    )
}

export default DirectoryHeader;