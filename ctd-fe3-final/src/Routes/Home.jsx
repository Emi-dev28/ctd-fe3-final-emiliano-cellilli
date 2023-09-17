import React from "react";
import Card from "../components/Card";
import { useGlobalStates } from "../components/utils/context";
import "../Styles/card.css";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useGlobalStates();
  console.log(state.data);
  console.log(state.theme);
  return (
    <main className= {state.theme ? `container theme` : `container`}   >
      <h1 className="title" >Home</h1>
      <ul className={state.theme ? `cards theme` : `cards`} >
        {state.data.map(card => <Card data={card} key={card.id} />)}
      </ul>
    </main>
  );
};

export default Home;
