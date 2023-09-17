import React, { useState } from "react";
import '../Styles/favs.css'


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [error, setError] = useState(null)
  const[user, setUser] = useState({ user: "", email: ""})
  const[sent, setSent] = useState(false)
  const handleChange = (element) => {
      if(element.target.value === ""){
        setError("No se puede ingresar un nombre vacio")
        return
      }
      if(element.target.value.length < 3){
        setError("No se puede ingresar un nombre con menos de tres caracteres")
        return
      }
      if(!element.target.value.match(/[A-Za]+/g)){
        setError("El nombre solo puede contener letras")
      }
      if(element.target.value.startsWith(" ")) return
      setUser({user:element.target.value})
      setError(null)  
      
}
  const handlerChangeEmail = (element) => {
    if(element.target.value === ""){
      setError("No se puede ingresar un email vacio")
      return
    }
    if(element.target.value.length < 3){
      setError("No se puede ingresar un email con menos de tres caracteres")
      return
    }
    if(!element.target.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
      setError("El email solo puede contener letras")
    }
    if(element.target.value.startsWith(" ")) return
    setUser(element.target.value)
    setError(null) 
    setUser({email: element.target.value}) 
  }
  return (
    <div className="form">
      <form>
        <label htmlFor="name"><span  className="position" > Name</span> 
        <input className="campo" type="text" onChange={handleChange} placeholder="Emiliano"/>
        </label>
        <label htmlFor="surname"> <span className="position" > Surname</span>
          <input className="campo" type="text" placeholder="Cellilli"/>
        </label>
        <label htmlFor="e-mail"> <span className="position" > E-Mail</span>
          <input className="campo" type="text" placeholder="johnDoe@hotmail.com" onClick={handlerChangeEmail} />
        </label>
        <button className="submit" onSubmit={(e) => {
          e.preventDefault
          setSent(true)
        }}> Enviar </button>
        {error && <div className="error"><span>{error}</span></div>}
        {error && <div className="error"><span>{error}</span></div>}
        {sent && <div className="sent" >Gracias {user.user} en breve un profesional se contactara contigo. </div>}
      </form>
    </div>
  );
};

export default Form;