import logo from './logo.svg';
import './App.css';
import "./index.css"
import ReactDOM from "react-dom";
import React, { useEffect, useContext, useState } from "react";



const Board = () => {
  const [fondo, setFondo] = useState(false)
  let gameBoard = [
    [1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0]
  ];
  // Notas[0][1] ==1 Es ocupado
  let A1 = gameBoard[0][0]
  let A2 = gameBoard[1][0]
  let A3 = gameBoard[2][0]
  let A4 = gameBoard[3][0]
  let A5 = gameBoard[4][0]
  let A6 = gameBoard[5][0]
  let B1 = gameBoard[0][1]
  let B2 = gameBoard[0][2]
  let B3 = gameBoard[0][3]
  let B4 = gameBoard[1][4]
  let B5 = gameBoard[0][5]
  let B6 = gameBoard[0][6]
  let C1 = gameBoard[0][2]
  let C2 = gameBoard[1][2]
  let C3 = gameBoard[2][2]
  let C4 = gameBoard[3][2]
  let C5 = gameBoard[4][2]
  let C6 = gameBoard[5][2]
  let D1 = gameBoard[0][3]
  let D2 = gameBoard[1][3]
  let D3 = gameBoard[2][3]
  let D4 = gameBoard[3][3]
  let D5 = gameBoard[4][3]
  let D6 = gameBoard[5][3]
  let E1 = gameBoard[0][4]
  let E2 = gameBoard[1][4]
  let E3 = gameBoard[2][4]
  let E4 = gameBoard[3][4]
  let E5 = gameBoard[4][4]
  let E6 = gameBoard[5][4]
  let F1 = gameBoard[0][4]
  let F2 = gameBoard[1][4]
  let F3 = gameBoard[2][4]
  let F4 = gameBoard[3][4]
  let F5 = gameBoard[4][4]
  let F6 = gameBoard[5][4]

 
 




  function firetorpedo() {
    let valor = prompt("Ingresar coordenadas (EJ: A,2")
  }

  //0 = empty
  // 1 = part of a ship
  // 2 = a sunken part of a ship
  // 3 = a missed shot
 
function showboats(id){
  setFondo(true)  
}
function hitormiss(e) {
    let coord = e.target.id
    let coordB = e.target.attributes.getNamedItem("value").value;
    if(coordB ==="H") e.target.className ="red"
    if(coordB ==="M") e.target.className ="blue"
  }


  return (
    <div>
      <div className="Board">
        <div className='row '>
          <div className='none'></div>
          <div className=''>1</div>
          <div className='' >2</div>
          <div className='' >3</div>
          <div className='' >4</div>
          <div className='' >5</div>
          <div className='' >6</div>
        </div>
        <div className='row'>
          <div className='' id="A1">A</div>
          <div className = {"" + (fondo ? " border": "")} id={A1} onClick={hitormiss} value="H">A1</div> 
          <div className="" id={A2} onClick={hitormiss} value="M">A2</div>
          <div className='' id={A3} onClick={hitormiss} value="M">A3</div>
          <div className='' id={A4} onClick={hitormiss} value="M"> A4</div>
          <div className = {"" + (fondo ? " border": "")} id={A5} onClick={hitormiss} value="H">A5</div> 
          <div className = {"" + (fondo ? " border": "")} id={A6} onClick={hitormiss} value="H">A6</div> 

        </div>
        <div className='row'>
          <div className=''>B</div>
          <div className={"" + (fondo ? " border": "")}  id={B1} onClick={hitormiss} value="H">B1</div>
          <div className='' id={B2} onClick={hitormiss} value="M">B2</div>
          <div className='' id={B3} onClick={hitormiss} value="M">B3</div>
          <div className='' id={B4} onClick={hitormiss} value="M">B4</div>
          <div className='' id={B5} onClick={hitormiss} value="M">B5</div>
          <div className='' id={B6} onClick={hitormiss} value="M">B6</div>
        </div>
        <div className='row'>
          <div className=''>C</div>
          <div className ={"" + (fondo ? " border": "")}  id={C1} onClick={hitormiss} value="H">C1</div>
          <div className='' id={C2} onClick={hitormiss} value="M">C2</div>
          <div className='' id={C3} onClick={hitormiss} value="M">C3</div>
          <div className='' id={C4} onClick={hitormiss} value="M">C4</div>
          <div className ={"" + (fondo ? " border": "")}  id={C5} onClick={hitormiss} value="H">C5</div>
          <div className='' id={C6} onClick={hitormiss} value="M">C6</div>
        </div>
        <div className='row'>
          <div className='' >D</div>
          <div className={"" + (fondo ? " border": "")} id={D1} onClick={hitormiss} value="H">D1</div>
          <div className='' id={D2} onClick={hitormiss} value="M">D2</div>
          <div className='' id={D3} onClick={hitormiss} value="M">D3</div>
          <div className='' id={D4} onClick={hitormiss} value="M">D4</div>
          <div className ={"" + (fondo ? " border": "")}  id={D5} onClick={hitormiss} value="H">D5</div>
          <div className='' id={D6} onClick={hitormiss} value="M">D6</div>
        </div>
        <div className='row'>
          <div className=''>E</div>
          <div className={"" + (fondo ? " border": "")}  id={E1} onClick={hitormiss} value="H">E1</div>
          <div className='' id={E2} onClick={hitormiss} value="M">E2</div>
          <div className='' id={E3} onClick={hitormiss} value="M">E3</div>
          <div className='' id={E4} onClick={hitormiss} value="M">E4</div>
          <div className ={"" + (fondo ? " border": "")}  id={E5} onClick={hitormiss} value="H">E5</div>
          <div className='' id={E6} onClick={hitormiss} value="M">E6</div>
        </div>
        <div className='row'>
          <div className=''>F</div>
          <div className='' id={F1} onClick={hitormiss} value="M">F1</div>
          <div className ={"" + (fondo ? " border": "")}  id={F2} onClick={hitormiss} value="H">F2</div>
          <div className ={"" + (fondo ? " border": "")}  id={F3} onClick={hitormiss} value="H">F3</div>
          <div className='' id={F4} onClick={hitormiss} value="M">F4</div>
          <div className='' id={F5} onClick={hitormiss} value="M">F5</div>
          <div className='' id={F6} onClick={hitormiss} value="M">F6</div>
        </div>
      </div>
      <button onClick={firetorpedo}>Fire</button>
      <button onClick={showboats}>Mostrar Barcos</button>
    </div>


  );

}

export default Board;
