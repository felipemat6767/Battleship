import logo from './logo.svg';
import './App.css';
import React from 'react';
import "./index.css"
import ReactDOM from "react-dom";

let gameBoard = [
  [1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0],
];
// Notas[0][1] ==1 Es ocupado
let A1 = gameBoard[0][1]
console.log(A1)

function firetorpedo() {
  let valor = prompt("Ingresar coordenadas (EJ: A,2")
}

//0 = empty
// 1 = part of a ship
// 2 = a sunken part of a ship
// 3 = a missed shot


let coordenada = ""
function valorcoord(e) {
  let coord = e.target.id
  coordenada = coord
}


function Board() {
  return (
    <div>
      <div className="Board">
        <div className='row'>
          <div className='none' id="A6"></div>
          <div className=''>1</div>
          <div className='' id="A7">2</div>
          <div className='' id="A8">3</div>
          <div className='' id="A9">4</div>
          <div className='' id="A10">5</div>
          <div className='' id="A11">6</div>
          <div className='' id="A12">7</div>
          <div className='' id="A12">8</div>
          <div className='' id="A12">9</div>
          <div className='' id="A12">10</div>
        </div>
        <div className='row'>
          <div className='' id="A1">A</div>
          <div className='' id="A1">A1</div>
          <div className='' id="A2">A2</div>
          <div className='' id="A3">A3</div>
          <div className='' id="A4">A4</div>
          <div className='' id="A5">A5</div>
          <div className='' id="A6">A6</div>
          <div className='' id="A7">A7</div>
          <div className='' id="A8">A8</div>
          <div className='' id="A9">A9</div>
          <div className='' id="A10">A10</div>
        </div>
        <div className='row'>
          <div className=''>B</div>
          <div className='' id="B1">B1</div>
          <div className='' id="B2">B2</div>
          <div className='' id="B3">B3</div>
          <div className='' id="B4">B4</div>
          <div className='' id="B5">B5</div>
          <div className='' id="B6">B6</div>
          <div className='' id="B7">B7</div>
          <div className='' id="B8">B8</div>
          <div className='' id="B9">B9</div>
          <div className='' id="B10">B10</div>
        </div>
        <div className='row'>
          <div className=''>C</div>
          <div className='' id="C1">C1</div>
          <div className='' id="C2">C2</div>
          <div className='' id="C3">C3</div>
          <div className='' id="C4">C4</div>
          <div className='' id="C5">C5</div>
          <div className='' id="C6">C6</div>
          <div className='' id="C7">C7</div>
          <div className='' id="C8">C8</div>
          <div className='' id="C9">C9</div>
          <div className='' id="C10">C10</div>
        </div>
        <div className='row'>
          <div className=''>D</div>
          <div className='' id="D1">D1</div>
          <div className='' id="D2">D2</div>
          <div className='' id="D3">D3</div>
          <div className='' id="D4">D4</div>
          <div className='' id="D5">D5</div>
          <div className='' id="D6">D6</div>
          <div className='' id="D7">D7</div>
          <div className='' id="D8">D8</div>
          <div className='' id="D9">D9</div>
          <div className='' id="D10">D10</div>
        </div>
        <div className='row'>
          <div className=''>E</div>
          <div className='' id="E1">E1</div>
          <div className='' id="E2">E2</div>
          <div className='' id="E3">E3</div>
          <div className='' id="E4">E4</div>
          <div className='' id="E5">E5</div>
          <div className='' id="E6">E6</div>
          <div className='' id="E7">E7</div>
          <div className='' id="E8">E8</div>
          <div className='' id="E9">E9</div>
          <div className='' id="E10">E10</div>
        </div>
        <div className='row'>
          <div className=''>F</div>
          <div className='' id="F1">F1</div>
          <div className='' id="F2">F2</div>
          <div className='' id="F3">F3</div>
          <div className='' id="F4">F4</div>
          <div className='' id="F5">F5</div>
          <div className='' id="F6">F6</div>
          <div className='' id="F7">F7</div>
          <div className='' id="F8">F8</div>
          <div className='' id="F9">F9</div>
          <div className='' id="F10">F10</div>
        </div>
        <div className='row'>
          <div className=''>G</div>
          <div className='' id="G1">G1</div>
          <div className='' id="G2">G2</div>
          <div className='' id="G3">G3</div>
          <div className='' id="G4">G4</div>
          <div className='' id="G5">G5</div>
          <div className='' id="G6">G6</div>
          <div className='' id="G7">G7</div>
          <div className='' id="G8">G8</div>
          <div className='' id="G9">G9</div>
          <div className='' id="G10">G10</div>
        </div>
        <div className='row'>
          <div className=''>H</div>
          <div className='' id="H1">H1</div>
          <div className='' id="H2">H2</div>
          <div className='' id="H3">H3</div>
          <div className='' id="H4">H4</div>
          <div className='' id="H5">H5</div>
          <div className='' id="H6">H6</div>
          <div className='' id="H7">H7</div>
          <div className='' id="H8">H8</div>
          <div className='' id="H9">H9</div>
          <div className='' id="H10">H10</div>
        </div>
      </div>
      <button onClick={firetorpedo}>fire</button>
    </div>
      
      
  );

}

export default Board;
