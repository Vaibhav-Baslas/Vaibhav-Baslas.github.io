import React from 'react'
import GameGridLayout from './gamegridlayout'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import MemoryGame from './MemGame/MemGame'
import SlideGame from './SlidingPuzzle/SlideGame'
import CallTicTacToe from './tictactoe2/CallTicTacToe'

function Home() {
  return (
    <Router>
      <Switch>
        <Route exact path='/home'>
          <GameGridLayout />
        </Route>
         <Route path='/game/tictactoe'>
          {/* <Gametictactoe/> */}
          <CallTicTacToe></CallTicTacToe>
        </Route>
            <Route path='/game/MemoryGame'>
            <MemoryGame/>
            </Route>
             <Route path='/game/SlidingPuzzle'>
             <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <SlideGame/>
            </div> 
            </Route>
      </Switch>
    </Router>
  )
}

export default Home;