import './App.css';
import Nav from './components/Nav';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'





import React, { Component } from 'react'

export default class App extends Component {

  state={
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div> 
        
        <BrowserRouter>
         <Nav/>
         <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
     
      
        <Routes>
        <Route exact path="/" element={<News setProgress={this.setProgress} key="general" category={"general"}></News>}/>
          <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" category={"general"}></News>}/>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports"  category={"sports"}></News>}/>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" category={"technology"}></News>}/>
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" category={"science"}></News>}/>
          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" category={"health"}></News>}/>
          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" category={"business"}></News>}/>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" category={"entertainment"}></News>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
