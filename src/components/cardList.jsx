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
                    name={user.name} 
                    email={user.email} 
                    // address={user.address.city} 
                    />);       
            })
        }
        </>
    );
}
export default CardList 