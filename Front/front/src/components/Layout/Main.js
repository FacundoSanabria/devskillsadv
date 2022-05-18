import React from 'react'
import toast, {Toaster, toaster} from 'react-hot-toast';

function Main(props) {
    return (
        <div className="main" style={{'minHeight': 'calc(100vh - 112px)'}}>
            <Toaster
                position='bottom-right'
                reverseOrder='false'
            />
            {props.children}
        </div>
    )
}
export default Main;