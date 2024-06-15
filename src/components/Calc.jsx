import DeleteIcon from "./DeletIcon";
import { useState, useEffect } from "react";
import {
  Boton,
  BotonDelete,
  BotonOperador,
  BotonClear,
  BotonIgual,
} from "./Boton";
import { evaluate } from "mathjs";

export function Calc() {
  const [expression, setExpression] = useState("");
  const [resultado, setResultado] = useState(null);
  useEffect(() => {}, [expression]);

  const aggInput = (valor) => {
    if (valor === "+/-") {
      const lastNumberMatch = expression.match(/-?\d+\.?\d*$/);
      if (lastNumberMatch) {
        const lastNumber = lastNumberMatch[0];
        const isNegative = lastNumber.startsWith("-");

        const newNumber = isNegative ? lastNumber.slice(1) : `-${lastNumber}`;

        setExpression((prev) => prev.replace(/-?\d+\.?\d*$/, newNumber));
      }
      return;
    }
    setExpression((prev) => prev + valor);
  };

  const calculaResult = () => {
    try {
      const evaluatedResult = evaluate(expression);
      setResultado(evaluatedResult.toLocaleString("es-ES")); // Actualiza el resultado
    } catch (error) {
      setResultado("Error");
    }
  };

  const deleteLastChar = (e) => {
    e.stopPropagation();
    if (expression.length > 0) {
      setExpression(expression.slice(0, -1));
    }
  };

  const clear = () => {
    setExpression("");
    setResultado(null); // Limpia el resultado
  };

  return (
    <div className="fixed flex flex-col right-0 left-0 text-center bg-[#182836] w-full max-w-lg min-w-[270px] m-auto rounded-xl h-[100vh] px-4 pb-24 justify-end">
      <div className="flex flex-col text-end">
        <p className="text-6xl font-medium flex justify-end break-all">
          {expression}
        </p>
        <h1 className="mt-2 mb-5 justify-end text-[3em] flex font-semibold break-all">
          {resultado !== null ? resultado : "0"}
        </h1>
      </div>

      <div className="grid grid-row-5 h-[60%] gap-2.5 font-semibold text-xl">
        <div className="grid gap-3 grid-cols-4">
          <BotonClear manejarClick={clear}>C</BotonClear>
          <Boton manejarClick={aggInput}>+/-</Boton>
          <Boton manejarClick={aggInput}>%</Boton>
          <BotonOperador manejarClick={aggInput}>/</BotonOperador>
        </div>
        <div className="grid gap-3 grid-cols-4">
          <Boton manejarClick={aggInput}>7</Boton>
          <Boton manejarClick={aggInput}>8</Boton>
          <Boton manejarClick={aggInput}>9</Boton>
          <BotonOperador manejarClick={aggInput}>*</BotonOperador>
        </div>
        <div className="grid gap-3 grid-cols-4">
          <Boton manejarClick={aggInput}>4</Boton>
          <Boton manejarClick={aggInput}>5</Boton>
          <Boton manejarClick={aggInput}>6</Boton>
          <BotonOperador manejarClick={aggInput}>-</BotonOperador>
        </div>
        <div className="grid gap-3 grid-cols-4 ">
          <Boton manejarClick={aggInput}>1</Boton>
          <Boton manejarClick={aggInput}>2</Boton>
          <Boton manejarClick={aggInput}>3</Boton>
          <BotonOperador manejarClick={aggInput}>+</BotonOperador>
        </div>
        <div className="grid gap-3 grid-cols-4 ">
          <Boton manejarClick={aggInput}>.</Boton>
          <Boton manejarClick={aggInput}>0</Boton>
          <BotonDelete manejarClick={deleteLastChar}>
            <DeleteIcon />
          </BotonDelete>
          <BotonIgual manejarClick={calculaResult}>=</BotonIgual>
        </div>
      </div>
    </div>
  );
}
