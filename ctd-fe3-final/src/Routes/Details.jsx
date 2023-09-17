import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import '../Styles/detailed.css';
import Detailed from "../components/Detailed";
import { useGlobalStates } from "../components/utils/context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Details = () => {
  const {state} = useGlobalStates();
  const { id } = useParams();
  console.log(id);
  const [doctor, setDoctor] = useState([]);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        return setDoctor(data);
      });
  }, []);
  console.log("que tiene doctor?",doctor);
  return (
    
      <div className={state.theme ? `content content-theme` : `content`}>
        <Detailed doctor={doctor} />
      </div>
      
  );
};

export default Details;
