import React, { Component } from "react";

export class Header extends Component {
  constructor(props) {
    super(props);
    console.log(props);
 
   
  }
  state = {
    heading:localStorage.getItem('heading1'),
    headingSize:localStorage.getItem('headingFontSize'),
    disp1:"none",
    backgroundImg1:localStorage.getItem('imageURL'),
  }
  // headingChanger=()=>{
  //   this.setState({disp1:"block"})
  // }
  // handleSubmit=()=>{
  //   this.setState({disp1:"none"})
  // }

  // init=()=> {
    
  // }
  headingEditor=()=>{
    localStorage.setItem('displayHeadingEditor',"block");
  }
  // imageEditor=()=>{
    
  // }
  componentDidMount() {
    if(localStorage["imageURL"]===undefined || localStorage["imageURL"]===null){
      this.setState({backgroundImg1:"https://c0.wallpaperflare.com/preview/673/972/919/laptop-macbook-computer-work.jpg"})
    }
    this.interval = setInterval(() => this.setState({ heading:localStorage.getItem('heading1'), headingSize:localStorage.getItem('headingFontSize'), backgroundImg1:localStorage.getItem('imageURL') }), 200);

  }
  render() {
    return (
      
        <header onClick={this.headingEditor} style={{  
          backgroundImage: "url(" + this.state.backgroundImg1 + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          // backgroundImageHeight:"500px",
          // height:"500px"
        }} >
          <div className="overlay" >
            <div  className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1 style={{ fontSize:this.state.headingSize, marginTop:"-200px"}} onClick={this.headingEditor}>
                    {this.state.heading}
                    <span></span>
                  </h1>
                  {/* <div className="col" style={{display:this.state.disp1, }}>
                  <form onSubmit={this.handleSubmit} className="form-inline">
                  <input type="text" onChange={e => this.setState({heading:e.target.value})} style={{marginBottom:'5px',marginTop:"20px",marginLeft:"500px"}} ></input>
                  <input style={{width:"150px",marginTop:"-20px",marginLeft:"100px"}} onChange={e => this.setState({headingSize:e.target.value})} type="range" id="vol" name="vol" min="75" max="125"/>
                  </form>
                  </div> */}
                  <span></span>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll" style={{marginTop:"20px"}}
                  >
                    Learn More
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
          </header>
        
      
    );
  }
}

export default Header;
