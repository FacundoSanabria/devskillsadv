import React from 'react'

function MembersForm() {
    return (
        <div className="card">
            <div className="card-body">
                <div className="Form">
                    <div className="mb-3">
                        <label for="FirstNameInput" className="form-label">First Name:</label>
                        <input type="text" className="form-control" id="FirstNameInput" placeholder="First Name"/>
                    </div>
                    <div className="mb-3">
                        <label for="LastNameInput" className="form-label">Last Name:</label>
                        <input type="text" className="form-control" id="LastNameInput" placeholder="Last Name"/>
                    </div>
                    <div className="mb-3">
                        <label for="AddressInput" className="form-label">Address:</label>
                        <input type="text" className="form-control" id="AddressInput" placeholder="Address"/>
                    </div>
                    <div className="mb-3">
                        <label for="SSNInput" className="form-label">SSN:</label>
                        <input type="text" className="form-control" id="SSNInput" placeholder="SSN"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    )
}
export default MembersForm;