import React, { Component } from 'react';

import Todo from './components/Todo';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: [],
      todos: [],
      todo: {
        title: "",
        description: ""
      }
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  componentWillMount(){
    let user = {
      name: "syahir",
      email: "syahir@gmail.com"
    }
    let todos = [
      {
        id: 1,
        title: "todo one",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia harum sequi id, non perferendis rem odit doloremque velit? Quod expedita illum, deserunt numquam, ipsa odio itaque enim excepturi nulla voluptatum."
      },
      {
        id: 2,
        title: "todo two",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia harum sequi id, non perferendis rem odit doloremque velit? Quod expedita illum, deserunt numquam, ipsa odio itaque enim excepturi nulla voluptatum."
      }
    ]

    this.setState({
      user,
      todos
    })

  }

  handleOnChange(obj, stateObject){
    let oldState = this.state[stateObject]
    let newState = {
      ...oldState,
      obj
    }
    this.setState({
      newState
    })
  }

  handleOnSubmit(obj, stateObject){
    obj.id = Date.now()
    const oldTodos = this.state.todos
    const newTodos = oldTodos.concat([obj])
    this.setState({
      todos: newTodos
    })
    this.setState({
      todo: {
        title: '',
        description: ''
      }
    })
  }

  render() {
    let { user, todos, todo } = this.state
    const mapTodos = todos.map((todo, index) => {
      return(
        <li key={index}>
          <div>
            <span>title: {todo.title}</span>
            <br/>
            <span>description: {todo.description}</span>
          </div>
        </li>
      )
    })

    return (
      <div className="App">
        <div>
          <h3>User Details</h3>
          <span>{user.name}</span>
          <br/>
          <span>{user.email}</span>
        </div>

        <div>
          <h3>Todo List</h3>
          <ul>
            { mapTodos }
          </ul>
        </div>
      
        
        <hr/ >
        <Todo
          data={todo}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
        />
      </div>
    );
  }
}

export default App;

