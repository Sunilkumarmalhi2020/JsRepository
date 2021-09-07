import React from 'react';

const PersonBio =(props)=>{
    return(
        <div>
            <h1>Name : {props.name}</h1>
            <p>{props.children}</p>
        </div>
    );
}
export default PersonBio