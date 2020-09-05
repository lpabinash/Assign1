import React from 'react'; 
import Screenshot from "./assets/images/Screenshot.png"
// import Thumbnail from 'react-thumbnail';
import { 
    Link
  } from 'react-router-dom';
  
function Home (){ 
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Select the Thumbnail to Start</h1>
        <Link to="/about">
           <div class="thumbnail-container" style={{
            width: "600px",
            height: "425px",
            // display: "inline-block",
            overflow: "hidden",
            // position: "relative",
            margin:"0 auto"
          }}>
            <div class="thumbnail">
            <img src={Screenshot} frameborder="0"></img>
            </div>
           </div>
           </Link>
         </div>
    )
    
} 
  
export default Home; 