import { createContext, useState, useContext, useEffect, useReducer } from "react";

const ContextGlobal = createContext();
const URL = `https://jsonplaceholder.typicode.com/users`;
const Context = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'GET_USERS':
        return {...state, data: action.payload}
      case 'ADD_FAVS':
        return {...state, favs:[...state.favs, action.payload]}
      case 'SWITCH_THEME':
        return {...state, theme: !state.theme}
      default:
        throw new Error(`Invalid action ${action.type}`)
  }}
  const localData = JSON.parse(localStorage.getItem("favs"));
  const InitialLocalData = localData ? localData : []
  const initialState = {
    favs: InitialLocalData,
    data: [],
    theme: false
  }
  
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  const [favs, setFavs] = useState(InitialLocalData);
  
  const [theme, setTheme] = useState(false);
  
  const [data, setData] = useState([]);
  
  const[state, dispatch] = useReducer(reducer,initialState)
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({type: 'GET_USERS', payload: data});
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);
  localStorage.clear;
  return (
    <ContextGlobal.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};
export default Context;
export const useGlobalStates = () => useContext(ContextGlobal);
