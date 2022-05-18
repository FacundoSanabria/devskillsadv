import React, {useState, useEffect, useRef} from 'react'
import axios from "axios";
import { API } from '../../Endpoints';
import MembersForm from './Partials/MembersForm';
import MembersTable from './Partials/MembersTable';
import { token } from '../../helpers';

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
    
    const onMemberCreatedHandler = (newMember) =>{
        setMembers([...members, newMember]);
    }

    return (
        <div className='container p-3'>
            <div className='row'>
                <div className="card" id="main-card">
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <MembersForm
                                        onMemberCreated={(m)=>{onMemberCreatedHandler(m)}}
                                    />
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