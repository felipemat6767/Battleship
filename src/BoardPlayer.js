import './App.css';
import React from 'react';
import "./index.css"

const squaresarrplayer = []
const squaresarrpc= [...squaresarrplayer]
const width = 10
function createBoard(squares){
    for (let i =0; i<width*width; i++){
        const square = React.createElement("div")
        squares.push(square)
        squares.key = i
    }
}
let direction = 0
createBoard(squaresarrpc)
createBoard(squaresarrplayer)
function generate (ship){
    
    let randomdirection = Math.floor(Math.random() * ship.directions.length)
    let current = ship.directions[randomdirection]
    if (randomdirection === 1) direction = 1
    if (randomdirection === 0) direction =10
    let randomStart=Math.abs(Math.floor(Math.random() *squaresarrpc.length - (ship.directions[0].length * direction)))

    const Right = current.some(index => (randomStart + index) % width === width - 1)
    const Left = current.some(index => (randomStart + index) % width === 0)

    
}


const shipsarray =[
    {
        name:"destroyer",
        directions: [
            [0,1],
            [0,width]
        ]
    },
    {
        name:"submarine",
        directions: [
            [0,1,2],
            [0,width,width*2]
        ]
    },
    {
        name:"cruiser",
        directions: [
            [0,1,2],
            [0,width,width*2]
        ]

    },
    {
        name:"battleship",
        directions: [
            [0,1,2,3],
            [0,width,width*2,width*3]
        ]

    }
]

generate(shipsarray[0])
generate(shipsarray[1])
generate(shipsarray[2])
generate(shipsarray[3])

const Board = () => {
    return (
        <div>
            <div className='container'>
                <div className='grid-player' id='grid-player' key ={squaresarrplayer.id}>
                    {squaresarrplayer}
                </div>
                <div className='grid-pc' id="grid-pc" key ={squaresarrpc.id}>
                    {squaresarrpc}
                </div>
            </div>
            <div className='info'>
                <button>Start Game</button>
                <h3 className='Turno'>Turno</h3>
                <h3 className='Info'>Info</h3>
            </div>

            <div className='display' draggable="true" >
                <div className='ship destroyer-cont' draggable="true">
                    <div className='destoyer-0'></div>
                    <div className='destoyer-1'></div>
                </div>
                <div className='ship submarine-cont'>
                    <div className='sub-0'></div>
                    <div className='sub-1'></div>
                    <div className='sub-2'></div>
                </div>
                <div className='ship cruiser-cont'>
                    <div className='cruiser-0'></div>
                    <div className='cruiser-1'></div>
                    <div className='cruiser-2'></div>
                </div>
                <div className='ship battleship-cont'>
                    <div className='battleship-0'></div>
                    <div className='battleship-1'></div>
                    <div className='battleship-2'></div>
                    <div className='battleship-3'></div>
                </div>
            </div>
        </div>
    )
}

export default Board