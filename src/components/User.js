import React from "react";
const User =({ele})=>{
    return(
        <div className="users">
            <h1>{ele.name}</h1>
            <p>{ele.username}</p>
        </div>
    )
};

export {User};