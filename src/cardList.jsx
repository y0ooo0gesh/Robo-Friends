import React from "react";
import Card from "./cards";

const CardList=( {robotic} )=>{
    return(
        <>
        {
            robotic.map((user)=>{
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