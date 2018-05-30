import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropzone from 'react-dropzone'

class App extends Component {
  state = {
    imageId: null,
    imageUrl: null
  };

  onDrop = (files) => {
    let data = new FormData()
    data.append('data', files[0])

    // use the file endpoint
    fetch('https://api.graph.cool/file/v1/cjhtn1d652lm7012050nzm91o', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: data
    }).then(response => {
      return response.json()
    }).then(file => {
      const fileId = file.id
      console.log('file', file)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form onSubmit={(e) => e.preventDefault}>
          <h2>new form</h2>
          {!this.state.imageId &&
          <Dropzone
            onDrop={this.onDrop}
            accept='image/*'
            multiple={false}
          >
            <div>Drop an image or click to choose</div>
          </Dropzone>}
          {this.state.imageUrl &&
          <img src={this.state.imageUrl} role='presentation' className='w-100 mv3' />
          }
        </form>
      </div>
    );
  }
}

export default App;
