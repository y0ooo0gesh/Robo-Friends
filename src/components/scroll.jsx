import React from "react";

const Scroll = (props) =>{
    return (
        <div style={{overflowY: 'scroll', border:'5px solid rgb(0,0,0,0.1)', height : '500px',borderRadius: '15px' }}>
            {props.children}
        </div>
    )
}

export default Scroll;