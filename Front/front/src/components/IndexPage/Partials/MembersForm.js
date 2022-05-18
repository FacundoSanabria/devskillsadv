import React, {useState, useEffect, useRef} from 'react'
import axios from "axios";
import { API } from '../../../Endpoints';
import { token } from '../../../helpers';

function MembersForm(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [ssn, setSsn] = useState("");

    const handleSubmit = ()=>{
        const headers = {headers:{ Authorization: 'Bearer '+token}};
        const data = {
            firstName: firstName,
            lastName: lastName,
            address: address,
            ssn: ssn
        }
        axios.post(API.POST_MEMBER, data, headers)
        .then(res=>{
            props.onMemberCreated(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="Form">
                    <div className="mb-3">
                        <label htmlFor="FirstNameInput" className="form-label">First Name:</label>
                        <input type="text" className="form-control" id="FirstNameInput" placeholder="First Name"
                            value={firstName}
                            onChange={(e)=>{setFirstName(e.target.value)}}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="LastNameInput" className="form-label">Last Name:</label>
                        <input type="text" className="form-control" id="LastNameInput" placeholder="Last Name"
                            value={lastName}
                            onChange={(e)=>{setLastName(e.target.value)}}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="AddressInput" className="form-label">Address:</label>
                        <input type="text" className="form-control" id="AddressInput" placeholder="Address"
                            value={address}
                            onChange={(e)=>{setAddress(e.target.value)}}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="SSNInput" className="form-label">SSN:</label>
                        <input type="text" className="form-control" id="SSNInput" placeholder="SSN"
                            value={ssn}
                            onChange={(e)=>{setSsn(e.target.value)}}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary"
                        onClick={(e)=>{handleSubmit()}}
                    >Submit</button>
                </div>
            </div>
        </div>
    )
}
export default MembersForm;