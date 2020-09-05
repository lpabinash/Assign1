import React, { Component } from 'react'

export class Editor extends Component {
    state = {
        heading:'Lorem Ipsum',
        disp1:"none",
        editor:localStorage.getItem('displayHeadingEditor'),
        editorimg:"https://c0.wallpaperflare.com/preview/673/972/919/laptop-macbook-computer-work.jpg",
      }
      headingChanger=(e)=>{
            localStorage.setItem('heading1',e.target.value);
      }
      headingFont=(e)=>{
          localStorage.setItem('headingFontSize',e.target.value);
      }
      editorDisplay=()=>{
          localStorage.setItem('displayHeadingEditor',"none");
          
      }
      imgChanger=(e)=>{
        localStorage.setItem('imageURL',e.target.value);
      }
      componentDidMount() {
        this.interval = setInterval(() => this.setState({editor:localStorage.getItem('displayHeadingEditor')  }), 200);
      }
    render() {
        return (
            
            <div className='navbar navbar-default navbar-fixed-bottom' style={{display:this.state.editor}}>
                <form onSubmit={this.editorDisplay} style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{marginTop:'10px', marginBottom:'10px'}}>
                <label for="heading">Change Company Name:</label>
                <input type="text" name="heading" onChange={this.headingChanger}></input>
                </div>
                <div style={{marginTop:'10px', marginBottom:'10px'}}>
                <label for="image" style={{marginLeft:'50px'}}>Enter Image URL:</label>
                <input type="text" id="fname" onChange={this.imgChanger} name="image"/><br/><br/>
                </div>
                <input style={{width:"150px",marginTop:"-10px",marginLeft:"50px"}} onChange={this.headingFont} type="range" id="vol" name="vol" min="75" max="125"/>
                <input type="submit" style={{heigth:"20px"}}/>
                </form>
            </div>
            
        )
    }
}

export default Editor;
