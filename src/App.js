import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Todos from './components/Todos';
import Navbar from './components/Navbar';
import AddItem from './components/addItem';
import About from './components/About';
import uuid from 'uuid'; // add a Unique Id
class App extends React.Component {
  state = {
    todos :[
      {
         id : uuid.v4(),
         title : 'Try using the Editor Above to Style Your Notes' 
      }
    ]
  }

    // get the Data From JsonServer With Axios
  componentDidMount() {
   
  }

  markCompelted = (id) =>{
    this.setState({todos : this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
    
  }
  // This Function return only the Item that left after click 
  delItem = (id) =>{
    this.setState({
      todos : [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addItem = (title) => {
    const Item = {
      id : uuid.v4(),
      title
    }
    this.setState({todos : [...this.state.todos , Item]})
    }
  
    handleChange = (update) =>{
      this.setState({
       todos : [{
         title : update
       }]
      })
  }
  
  render(){
    return(
      <Router>
        <Navbar />
        <Route exact path ='/' render ={props => (
          <React.Fragment> 
              <AddItem addItem = {this.addItem} />
              <Todos 
              todos = {this.state.todos} 
              delItem ={this.delItem}
              handleChange ={this.handleChange}
              />
          </React.Fragment>
        )} /> 

        <Route path ='/about' component ={About} />
      
      </Router>
    )
  }

}

export default App;
