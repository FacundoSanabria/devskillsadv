import React from 'react'
import MembersForm from './Partials/MembersForm';
import MembersTable from './Partials/MembersTable';

function Index() {
    return (
        <div className='container p-3'>
            <div className='row'>
                <div class="card">
                    <div class="card-body">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <MembersForm/>
                                </div>
                                <div class="col">
                                    <MembersTable/>
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