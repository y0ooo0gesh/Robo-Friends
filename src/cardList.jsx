import React from "react";
import Card from "./cards";

const CardList=( {roboto} )=>{
    return(
        <>
        {
            roboto.map((user)=>{
                return (
                    <Card 
                    key={user.id}
                    id={user.id} 
                    name={user.realname} 
                    email={user.email} 
                    />);       
            })
        }
        </>
    );
}
export default CardList 