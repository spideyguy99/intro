import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';

import headshot from './img/headShot.jpg';

function App() {
  return (
    <div style={{ backgroundColor:"#202020", height:"auto", position:"absolute"}}>
        <Container style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
            <div style={{height:100}}/>
            <Card style={{width:"65%", margin:25}}>
                <CardMedia
                    component="img"
                    height="450"
                    image={headshot}
                />
                <CardContent>
                    <h2>Noah J. Furniss</h2>
                    <h3>CIT / Software and Application Development</h3>
                </CardContent>
            </Card>
            <Card style={{width:"65%"}}>
                <h3 style={{marginLeft:10}}>About Me:</h3>
                <ul>
                    <li>I earned a black belt in Goju-Ryu Karate when I was 12</li>
                    <li>I am an Apple Certified Technician</li>
                    <li>I want to find a remote React developer job so I can work and travel.</li>
                </ul>
            </Card>
            <Card style={{width:"65%", margin:25}}>
                <div style={{marginLeft:20}}>
                    <h3 style={{marginLeft:-10}}>Favorites</h3>
                    <p>Favorite Band: Tame Impala or Death Grips depending on my mood</p>
                    <p>Favorite Movie: Spider-Man No Way Home</p>
                    <p>Favorite Food: Alligator Po Boys</p>
                    <p>Favorite Place: Devil's Tower, Wyoming</p>
                    <p>Favorite Web Site: <a href={"https://glitche.com/"}>Glitche</a></p>
                    <p>Favorite App: Spotify</p>
                    <p>Favorite Product: Klipsch R-41 Powered Monitor</p>
                </div>
            </Card>

        </Container>
    </div>
  );
}

export default App;
