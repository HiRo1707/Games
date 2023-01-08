import { useState } from 'react'
import Cards from './Cards'

const MainPage = () => {
    const [nMoves, setNMoves] = useState(0);
    const [count, setCount] = useState(0);
    return(
        <>
            <h1>Memo123</h1>
            <Cards nMoves = {nMoves} setNMoves = {setNMoves} count = {count} setCount = {setCount}/>
            <div style={{'margin-top': 20}}>
               Moves: {nMoves}
            </div> 
            <div>
                Count: {count} 
            </div> 
        </>
    )
}

export default MainPage