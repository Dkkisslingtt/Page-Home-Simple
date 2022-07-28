import React from "react";
import '../hoja-de-estilo/Testimonio.css';

function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
      src= {require(`../imagenes/testimonio-${props.imagen}.png`)}
      alt ='foto emma'
      />
      <div className='contenedor-testimonio-emma'>
        <p className='nombre-testimonio'> <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresar}</strong></p>
        <p className='contenedor-texto-testimonio'>{props.testimonio}</p>
      </div>
    </div>
    

  );

}
export default Testimonio;