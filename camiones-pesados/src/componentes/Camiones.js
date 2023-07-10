import React from 'react';
import '../estilos/estilos.css';

function Camiones(props) {
   return(
      <div className='contenedor-camiones'>
        <img
        className='imagen-camiones'
        src={require(`../imagenes/${props.imagen}.jpg`)}
        alt='foto de sdd'/>
        <div className='contenedor-texto-camiones'>
         <p className='nombre-camiones'>{props.nombre}  {props.anos}</p>
         <p className='texto-camiones'>{props.XD}  {props.nada}</p>
         <p className='texto-camioness'>{props.Camiones} 
</p>
        </div>
      </div>
   ); 
} 

export default Camiones;