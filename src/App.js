import React, { Component } from 'react';
import './App.css';
import Bunnies from './images/bunnies';
import List from './list/List';
import Thumbnail from './thumbnail/Thumbnail';
import Gallery from './gallery/Gallery';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      view: 'Gallery',
      bunnies: Bunnies
    }
  }

  handleClick(value){
    this.setState({
      view: value
    })
  }

  render() {
    const view = this.state.view;

    {
      if( view === 'List' ) {
      return (
        <div className="App">
          <button value="Thumbnail" onClick={(event) => this.handleClick(event.target.value)}>
            Thumbnail
          </button>
          <button value="Gallery" onClick={(event) => this.handleClick(event.target.value)}>
            Gallery
          </button>
          <List bunnies={this.state.bunnies}/>
        </div>
      );
    }
    if( view === 'Thumbnail' ) {
      return (
        <div className="App">
          <button value="List" onClick={(event) => this.handleClick(event.target.value)}>
            List
          </button>
          <button value="Gallery" onClick={(event) => this.handleClick(event.target.value)}>
            Gallery
          </button>
            <Thumbnail bunnies={this.state.bunnies}/>
          </div>
        );
    }
    if( view === 'Gallery' ) {
      return (
        <div className="App">
          <button value="List" onClick={(event) => this.handleClick(event.target.value)}>
            List
          </button>
          <button value="Thumbnail" onClick={(event) => this.handleClick(event.target.value)}>
            Thumbnail
          </button>
            <Gallery bunnies={this.state.bunnies}/>
          </div>
        );
    }
  }
  }
}

export default App;
