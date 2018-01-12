import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  constructor(){
    super()
    this.updateInput = this.updateInput.bind(this)
    this.render_post = this.render_post.bind(this)
    this.state = {
      keyWord: ''
    }
  }

  render_post(post, index) {
    const post_title = post.title.toLowerCase()
    const keyWord = this.state.keyWord.toLowerCase()
    if (post_title.match(keyWord)) {
      return(
        <li key={index}>
          <a href={post.url}><img src={post.image } /></a>
          <p>{post.title}</p>
        </li>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="filter">
          <input type="text" placeholder="Ingresa el término de búsqueda" onChange={this.updateInput} value={this.state.keyWord}/>
        </div>
        <ul>
        {posts.map(this.render_post)}
        </ul>
      </div>
    )
  }

  updateInput(e) {
    this.setState({
      keyWord: e.target.value
    })
  }
}


export default App
