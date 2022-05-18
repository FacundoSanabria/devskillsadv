import React, {useState, useEffect, useRef} from 'react'
import axios from "axios";
import { API } from '../../Endpoints';
import MembersForm from './Partials/MembersForm';
import MembersTable from './Partials/MembersTable';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsIm5hbWUiOiJzYXJhaCIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjUyOTA5MzA1LCJleHAiOjE2NTI5MTAyMDV9.7oZogdr3rvOyoUv2Rkt9x7pVdS76EgU1nzAJFjDyrxA';

function Index() {
    const [members, setMembers] = useState([])

    useEffect(()=>{
        axios.get(API.GET_MEMBERS, {headers:{ Authorization: 'Bearer '+token}})
        .then(res=>{
            setMembers(res.data);
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[]);

    return (
        <div className='container p-3'>
            <div className='row'>
                <div className="card">
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <MembersForm/>
                                </div>
                                <div className="col">
                                    <MembersTable
                                        members={members}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Index;