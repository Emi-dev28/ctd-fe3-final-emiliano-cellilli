import React from "react";
import Card from "../components/Card";
import { useGlobalStates } from "../components/utils/context";
import "../Styles/favs.css";
import '../Styles/card.css';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useGlobalStates();
  console.log(state.favs);
  return (
    <>
      <div className="container">
        <h1 className="title" >Dentists Favs</h1>
        <div className="cards">
          {state.favs.map((fav) => (
            <Card data={fav} key={fav.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favs;
