import React from "react";

const Card = ({name , email, id, address}) =>{
    return(
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'> {/* flex justify-center */}
            <img alt='pic'src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                {/* <p>{address}</p> */}
            </div>
        </div>
    )
}

export default Card;