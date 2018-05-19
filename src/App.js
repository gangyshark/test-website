import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        {
          id: 0,
          description: "a todo",
          isComplete: false

        },
        {
          id: 1,
          description: "walk the dog",
          isComplete: false
          
        },
        {
          id:2,
          description: "feed the baby",
          isComplete: false
          
        },
        {
          id:3,
          description: "sleep",
          isComplete: false
          
        }
      ]
    }
this.handleClickingTodo = this.handleClickingTodo.bind(this)
  }

  handleClickingTodo(clickedTodo) { 
    this.setState({
      todos: this.state.todos.map(todo => {
        return clickedTodo.id === todo.id ? { ...todo, isComplete: !todo.isComplete} : todo
      })
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul style={{ textAlign: "left" }}>
          {this.state.todos.map((todo, i) => (
            <li key={i} onClick={(e) => this.handleClickingTodo(todo)} className={todo.isComplete ? "is-complete" : ""}> {todo.description} </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;


