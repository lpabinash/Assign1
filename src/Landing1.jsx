import React, { Component } from 'react'
import Navigation from './components/navigation';
import Editor from './components/editor';
import Header from './components/header';
// import Features from './components/features';
import Services from './components/services';
import Gallery from './components/gallery';
import Contact from './components/contact';
import JsonData from './data/data.json';
// import 'bootstrap/dist/css/bootstrap.min.css';


export class Landing1 extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Editor />
        <Navigation />
        
        <Header data={this.state.landingPageData.Header} />
        {/* <Features data={this.state.landingPageData.Features} /> */}
        <Services data={this.state.landingPageData.Services} />
        <Gallery />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default Landing1;
