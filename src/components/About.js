import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
//import {Card, CardGroup, Carousel, Image } from 'react-bootstrap';
import './MeetTeam.css'
//  const cardStyle={
//    width: 300, height: 300,borderRadius:600/ 2,display:'block',marginLeft:'auto',
//    marginRight:'auto',paddingTop:'5px',marginTop:'5px',marginBottom:'5px'
//  };

export default function About() {
  return (<>
  <h1 style={{textAlign:'center'}}> About The Page</h1>
    <div className='AboutPara' style={{textAlign:'center',padding:'auto',font:'Verdana',fontSize:'25px'}}>
      <p>Get started by clicking on the Home Page on the NavBar<br/>
      This website is built using React and JavaScript which uses JSX(JavaScript XML) which is a mixture of html and JavaScript. <br/>
      This webpage will help people relax and remove boredom as this page is all about testing your memory and strategic skills. <br/>
      Here as you can see we got three different strategic games.<br/> First we have the Memory Game,Memory game is all about testing your photographic memory.whereas the sliding puzzle is more of a strategic game and this basically tests your efficiency by allowing the user to complete the game in minimum time.<br/>
      Below you can see the ones who made the site. Thanks for coming here! 

      </p>
    </div>
    <div className='Contact Carousel' style={{ margin: 'auto' }}>
      <Carousel>
      <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.brainzilla.com/media/cache/ab/9f/ab9fdae354b43e8572630882b9fe5539.png"
            alt="Second slide"
            style={{
              width: 800,
              height: 500,
              flex: '1',
              resizeMode: 'contain'
            }} />

          <Carousel.Caption style={{color:'white',textShadow:'2px 0 0 black'}}>
            <h3>Memory Game</h3>
            <p >Do check it out on our Home Page</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSocsWurwyKi-1ipxDQNpR7XRX0WjN_7-bpQA&usqp=CAU"
            alt="First slide"
            style={{
              width: 800,
              height: 500,
              flex: '1',
              resizeMode: 'contain'
            }} />
          <Carousel.Caption style={{color:'white',textShadow:'2px 0 0 black'}}>
            <h3>Tic Tac Toe</h3>
            <p>Do check it out on our Home Page</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/AUVWFOn.png"
            alt="Third slide"
            style={{
              width: 800,
              height: 500,
              flex: '1',
              
              resizeMode: 'contain'
            }} />

          <Carousel.Caption style={{color:'white',textShadow:'2px 0 0 black'}}>
            <h3>Sliding Puzzle</h3>
            <p>Do check it on out our Home Page</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    
    {/* <div className='Contact Carousel' style={{margin:'auto'}}>
    <Carousel>
  <Carousel.Item>
    <Image
      className="d-block w-100"
      src="https://images.all-free-download.com/images/graphiclarge/canyon_desert_forest_hill_landscape_mountain_nature_600620.jpg"
      alt="First slide"
      style={{
      width:800,
      height:500,
      flex:'1',
      resizeMode:'contain'}}
    />
    <Carousel.Caption>
      <h3>Vaibhav Baslas</h3>
      <p>Thanks for visiting our website. I am Vaibhav Baslas the leader of this project, you can find my contact information below. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.all-free-download.com/images/graphiclarge/canyon_desert_forest_hill_landscape_mountain_nature_600620.jpg"
      alt="Second slide"
      style={{
        width:800,
        height:500,
        flex:'1',
        resizeMode:'contain'}}
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.all-free-download.com/images/graphiclarge/canyon_desert_forest_hill_landscape_mountain_nature_600620.jpg"
      alt="Third slide"
      style={{
        width:800,
        height:500,
        flex:'1',
        resizeMode:'contain'}}
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div> */}

<section class="section-team" >
		<div class="container" >
			<div class="row justify-content-center text-center" >
				<div class="col-md-8 col-lg-6">
					<div class="header-section">
						<h2 class="title">Meet The Creators</h2>
					</div>
				</div>
			</div>
			<div class="row" style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
							<img src="https://i.ibb.co/G2CBWvb/person1.jpg" alt=""/>
							<span class="icon">
								<i class="fab fa-html5"></i>
							</span>
						</div>
						<div class="person-info">
							<h3 class="full-name">Aditya Bhardwaj</h3>
							<span class="speciality">Project Member<br/>20BCS2971@cuchd.in</span>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
							<img src="https://i.ibb.co/nbpNr4r/person2.jpg" alt=""/>
							<span class="icon">
								<i class="fab fa-wordpress-simple"></i>
							</span>
						</div>
						<div class="person-info">
							<h3 class="full-name">Vaibhav Baslas</h3>
							<span class="speciality">Project Leader<br/>20BCS2935@cuchd.in</span>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
							<img src="https://i.ibb.co/25zdRMr/person3.jpg" alt=""/>
							<span class="icon">
								<i class="fab fa-angular"></i>
							</span>
						</div>
						<div class="person-info">
							<h3 class="full-name">Gourav</h3>
							<span class="speciality">Project Member<br/>20BCS2934@cuchd.in</span>
  						</div>
					</div>
				</div>
				{/* <div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
							<img src="https://i.ibb.co/w0ynr2Q/person4.jpg" alt=""/>
							<span class="icon">
								<i class="fab fa-js"></i>
							</span>
						</div>
						<div class="person-info">
							<h3 class="full-name">John Smith</h3>
							<span class="speciality">Javascript Developer</span>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	</section>

{/* <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://images.all-free-download.com/images/graphiclarge/canyon_desert_forest_hill_landscape_mountain_nature_600620.jpg" style={cardStyle}/>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.all-free-download.com/images/graphiclarge/canyon_desert_forest_hill_landscape_mountain_nature_600620.jpg" style={cardStyle}/>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.all-free-download.com/images/graphiclarge/canyon_desert_forest_hill_landscape_mountain_nature_600620.jpg" style={cardStyle}/>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>  */}

</>
      )
    }
    
