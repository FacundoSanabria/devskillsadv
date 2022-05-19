import React, {useState, useEffect, useRef} from 'react'
import axios from "axios";
import { API } from '../../Endpoints';
import MembersForm from './Partials/MembersForm';
import MembersTable from './Partials/MembersTable';

function Home() {
    const [members, setMembers] = useState([])

    useEffect(()=>{ 
        getMembers();  
    }, []);

    useEffect(()=>{ 
        setTimeout(getMembers, 120000)
    }, [members]); 

    const getMembers = () =>{
        axios.get(API.GET_MEMBERS)
        .then(res=>{
            setMembers(res.data);
            console.log("members")
        })
        .catch(err=>{
            console.log(err);
        }) 
    }
    
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
export default Home;