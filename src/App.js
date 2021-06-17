import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const operaciones = () => {
    var res = Number(input);
    setInput(res);
  };

  return (
    <div className="App" id="cont">
      <h1 className="mt-4">Calculadora</h1>

      <div className="container mt-5 contRows">
        <div className="row">
          <input className="textField" defaultValue={input}></input>
        </div>
        {/*Fila 1 */}
        <div className="row fila fila1">
          <div className="col">
            <button
              className="buttons-orange"
              onClick={(e) => {
                setInput("");
              }}
            >
              AC
            </button>
          </div>
          <div className="col">
            <button className="buttons-orange">B</button>
          </div>
          <div className="col">
            <button
              className="buttons-orange"
              onClick={(e) => {
                setInput(input + "%");
              }}
            >
              %
            </button>
          </div>
          <div className="col">
            <button
              className="buttons-orange"
              onClick={(e) => {
                setInput(input + "÷");
              }}
            >
              ÷
            </button>
          </div>
        </div>
        {/*Fila 2 */}
        <div className="row fila">
          <div className="col">
            <button
              className="buttons"
              onClick={(e) => {
                setInput(input + 7);
              }}
            >
              7
            </button>
          </div>
          <div className="col">
            <button
              className="buttons"
              onClick={(e) => {
                setInput(input + 8);
              }}
            >
              8
            </button>
          </div>
          <div className="col">
            <button className="buttons">9</button>
          </div>
          <div className="col">
            <button
              className="buttons-orange"
              onClick={(e) => {
                setInput(input + "X");
              }}
            >
              X
            </button>
          </div>
        </div>
        {/*Fila 3 */}
        <div className="row fila">
          <div className="col">
            <button
              className="buttons"
              onClick={(e) => {
                setInput(input + 4);
              }}
            >
              4
            </button>
          </div>
          <div className="col">
            <button
              className="buttons"
              onClick={(e) => {
                setInput(input + 5);
              }}
            >
              5
            </button>
          </div>
          <div className="col">
            <button
              className="buttons"
              onClick={(e) => {
                setInput(input + 6);
              }}
            >
              6
            </button>
          </div>
          <div className="col">
            <button
              className="buttons-orange"
              onClick={(e) => {
                setInput(input + "-");
              }}
            >
              -
            </button>
          </div>
        </div>
        {/*Fila 4 */}
        <div className="row fila">
          <div className="col">
            <button
              className="buttons"
              onClick={(e) => {
                setInput(input + 1);
              }}
            >
              1
            </button>
          </div>
          <div className="col">
            <button
              className="buttons"
              onClick={(e) => {
                setInput(input + 2);
              }}
            >
              2
            </button>
          </div>
          <div className="col">
            <button
              className="buttons"
              onClick={(e) => {
                setInput(input + 3);
              }}
            >
              3
            </button>
          </div>
          <div className="col">
            <button
              className="buttons-orange"
              onClick={(e) => setInput(input + "+")}
            >
              +
            </button>
          </div>
        </div>
        {/*Fila 5 */}
        <div className="row fila">
          <div className="col">
            <button
              className="buttons"
              onClick={(e) => {
                setInput(input + ".");
              }}
            >
              .
            </button>
          </div>
          <div className="col">
            <button
              className="buttons"
              onClick={(e) => {
                setInput(input + 0);
              }}
            >
              0
            </button>
          </div>
          <div className="col">
            <button
              className="buttons"
              onClick={(e) => {
                setInput(input + ",");
              }}
            >
              ,
            </button>
          </div>
          <div className="col">
            <button className="buttons-orange circle" onClick={operaciones}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
