import React, { Component } from 'react';
import TodoItem from './TodoItem';
import propTypes from 'prop-types';
export default class Todos extends Component {
    render() {
        const todos = this.props.todos;
        const items = todos.map(item => {
            return <div key ={item.id}>
                     <TodoItem 
                     item={item} 
                     markCompelted ={this.props.markCompelted} 
                     delItem = {this.props.delItem}
                     handleChange = {this.props.handleChange}
                     />
                </div>
        })
        return (
            <div>
                <ul>
                    {items}
                </ul>
                
            </div>
        )
    }
}

// PropTypes
Todos.propTypes = {
    todos : propTypes.array.isRequired
} 
