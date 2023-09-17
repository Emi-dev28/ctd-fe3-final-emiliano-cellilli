import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useGlobalStates } from "./utils/context";
import "../Styles/card.css";
import { AiOutlineHeart } from "react-icons/ai";


const Card = ({data}) => {
  // const {name, username, id} = useDoctor()

  const { state,dispatch } = useGlobalStates();
  const addFav = (e) => {
    e.preventDefault()
    console.log("adding")
    console.log(data.name)
    dispatch({type: 'ADD_FAVS', payload: data})
  };
  const img_doctor = "./doctor.jpg";

  return (
          <li>
            <Link to={`/details/${data.id}`} >
              <div className={state.theme ? `card default pulse card-theme` : `card default pulse`}>
                <h3>{data.name}</h3>
                <img className="img_" src={img_doctor} alt={data.name} />
                <span>{data.username}</span>
                <span>{data.id}</span>
              </div>
            </Link>
            
            <button className="button-fav" onClick={addFav}>⭐
            </button>
          </li>
        );
};

export default Card;
