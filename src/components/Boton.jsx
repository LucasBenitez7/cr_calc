import React from "react";

export function BotonDelete(props) {
  return (
    <button onClick={props.manejarClick} className="bg-[#0e1a25] rounded-2xl active:bg-[#182c3f] shadow-[0px_0px_2px_1px_rgba(77,_100,_125,_1)] flex justify-center items-center">
      {props.children}
    </button>
  );
}

export function Boton(props) {
  return (
    <button onClick={()=>props.manejarClick(props.children)} className="bg-[#0e1a25] rounded-2xl active:bg-[#182c3f] shadow-[0px_0px_2px_1px_rgba(77,_100,_125,_1)]">
      {props.children}
    </button>
  );
}

export function BotonClear(props) {
  return (
    <button onClick={()=>props.manejarClick(props.children)} className="bg-[#0e1a25] rounded-2xl active:bg-[#182c3f] shadow-[0px_0px_2px_1px_rgba(77,_100,_125,_1)] flex justify-center items-center">
      {props.children}
    </button>
  );
}

export function BotonOperador(props) {
  return (
    <button onClick={()=>props.manejarClick(props.children)} className="bg-[#031958] rounded-2xl active:bg-[#062372] shadow-[0px_0px_2px_1px_rgba(0,_0,_0,_1)]">
      {props.children}
    </button>
  );
}

export function BotonIgual(props) {
  return (
    <button onClick={()=>props.manejarClick(props.children)} className="bg-[#031958] rounded-2xl active:bg-[#062372] shadow-[0px_0px_2px_1px_rgba(0,_0,_0,_1)]">
      {props.children}
    </button>
  );
}


