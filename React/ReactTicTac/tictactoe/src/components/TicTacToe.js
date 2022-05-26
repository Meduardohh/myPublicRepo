import {useEffect,useState} from "react"


const TicTacToe=()=>{
const [board,setBoard]=useState([
    ["","",""],
    ["","",""],
    ["","",""]
])

const [player,setPlayer]=useState("X")
const [winner,setWinner]=useState("")


const clickHandler=(e)=>{
 
}

const Cell=()=>{

    return <button onClick={clickHandler}></button>
}

// const renderMap=(board)=>{
//     board.map(element=>{
//         let x=0
//         console.log("element",element)
//         element.map((elem)=>{
//             let y=-1;
//             y++
//             console.log("elem",elem)
//            return <Cell x={x} y={y} value={elem}/>
//         })
//         x++
//     })

// }
const renderMap=()=>{

}


return(
    <>
    {
      renderMap(board)           
    }
    </>
    
)
}







export default TicTacToe
