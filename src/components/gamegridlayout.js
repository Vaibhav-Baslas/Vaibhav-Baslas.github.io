import React from 'react'
/*import { Button } from 'react-bootstrap'*/
import { Link } from 'react-router-dom'


const GameGridLayout = () => {
  return (
      <><br/><br/><br/>
    <div className="spacer">
                    <div className="container">
                        <div className="row justify-content-center">
                        </div>
                        <div className="row m-t-40">
                            <div className="col-md-4">
                                <div className="card card-shadow" data-aos="flip-left" data-aos-duration="1200">
                                    <Link to="/game/tictactoe" className="img-ho" ><img className="card-img-top"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSocsWurwyKi-1ipxDQNpR7XRX0WjN_7-bpQA&usqp=CAU" alt="wrappixel kit"  width="350px" height="350px"/></Link>
                                    <div className="card-body" style={{textAlign:"center"}} >
                                        <h5 className="font-medium m-b-0" style={{textAlign: "center"}} >Tic - Tac - Toe</h5>
                                        <p>This is a classic Tic Tac Toe game in which you need to make a straight line before your opponent to win</p>

                                        <Link className="btn btn-primary" to="/game/tictactoe">Play Now</Link>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-shadow" data-aos="flip-up" data-aos-duration="1200">
                                    <Link to="/game/MemoryGame" className="img-ho"><img className="card-img-top" src="https://e7.pngegg.com/pngimages/759/751/png-clipart-logo-brand-font-memory-game-label-text-thumbnail.png" alt="wrappixel kit" width="350px" height="350px"/></Link>
                                    <div className="card-body" style={{textAlign:"center"}}>
                                        <h5 className="font-medium m-b-0">Memory Game</h5>
                                        <p>This is a basic memory game in which you need to select two same cards</p>
                                        <Link className="btn btn-primary" to="/game/MemoryGame">Play Now</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-shadow" data-aos="flip-right" data-aos-duration="1200">
                                    <Link to="/game/SlidingPuzzle" className="img-ho"><img className="card-img-top" src="https://i.imgur.com/AUVWFOn.png" alt="wrappixel kit" width="350px" height="350px"/></Link>
                                    <div className="card-body" style={{textAlign:"center" }}>
                                        <h5 className="font-medium m-b-0">Sliding Puzzle</h5>
                                        <p className="m-b-0 font-14">In this game you need to put the numbers in the order shown at the start.</p>
                                        <Link className='btn btn-primary' to="/game/SlidingPuzzle"> Play Now</Link>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-4">
                                <div className="card card-shadow" data-aos="flip-left" data-aos-duration="1200">
                                    <Link to="#" className="img-ho"><img className="card-img-top" src="../assets/images/portfolio/img4.jpg" alt="wrappixel kit"/></Link>
                                    <div className="card-body">
                                        <h5 className="font-medium m-b-0">Zukandre Phoniex</h5>
                                        <p className="m-b-0 font-14">Branding</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-shadow" data-aos="flip-up" data-aos-duration="1200">
                                    <Link to="#" className="img-ho"><img className="card-img-top" src="../assets/images/portfolio/img5.jpg" alt="wrappixel kit"/></Link>
                                    <div className="card-body">
                                        <h5 className="font-medium m-b-0">Sionage Mokcup</h5>
                                        <p className="m-b-0 font-14">Wll Mockup</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-shadow" data-aos="flip-right" data-aos-duration="1200">
                                    <Link to="#" className="img-ho"><img className="card-img-top" src="../assets/images/portfolio/img6.jpg" alt="wrappixel kit"/></Link>
                                    <div className="card-body">
                                        <h5 className="font-medium m-b-0">Hard Cover Book Mock</h5>
                                        <p className="m-b-0 font-14">Book Covers</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                </>
    )
}
export default GameGridLayout;