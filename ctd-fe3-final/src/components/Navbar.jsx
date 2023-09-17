import React from "react";
import { Link } from "react-router-dom";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import "../Styles/navbar.css";
import { useGlobalStates } from "./utils/context";

const Switch = ({ isOn, handleToggle, colorOne, colorTwo, onClick }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="switch-checkbox"
        id={`switch`}
        type="checkbox"
      />
      <label
        style={{ background: isOn ? colorOne : colorTwo }}
        className="switch-label"
        onClick={onClick}
        htmlFor={`switch`}
      >
        <span className={`switch-button`} />
      </label>
    </>
  );
};
const Navbar = () => {
  const [checked, setChecked] = React.useState(true);
  const {state, dispatch} = useGlobalStates()
  const switchTheme = () =>{
    dispatch({
      type: 'SWITCH_THEME',
      payload: !state.theme
    })
  }
  return (
    <nav className="nav">
      <div className="clinica-odontologica">
        <h3>Clinica Odontologica</h3>
      </div>
      <div className="rigth-nav">
      <ul className="fuente-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favoritos</Link>
      </ul>
      {/* <button className="switch-theme" onClick={switchTheme} >switch Theme</button> */}
      <Switch
        onClick={switchTheme}
        isOn={checked}
        handleToggle={() => setChecked(!checked)}
        colorOne="#f1f1f1"
        colorTwo="#171738"
        
      />
      </div>
    </nav>
    
  );
};

export default Navbar;
