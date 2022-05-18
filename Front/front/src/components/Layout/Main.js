import React from 'react'

function Main(props) {
    return (
        <div className="main" style={{'minHeight': 'calc(100vh - 112px)'}}>
            {props.children}
        </div>
    )
}
export default Main;