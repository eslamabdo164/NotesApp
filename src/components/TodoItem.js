import React, { Component } from 'react'
import propTypes from 'prop-types';
export default class TodoItem extends Component {
    
    getStyle = () => {
           return {
               background : '#f4f4f4', 
               padding  : '20px 10px ' ,
               borderBottom : '1px solid #ccc',
               height : '200px',
               width : '60%',
               margin : '10px auto'
           }
    }
    btnStyle =() =>{
        return {
                float : 'right',
                padding : '3px',
                backgroundColor : 'red'
        }
    }

     
    render() {
        let current_datetime = new Date();
        let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
        const {id , title} = this.props.item;
        return (
            <div style = {this.getStyle()} >
                <div style ={itemHeader}>
                   {formatted_date.toString()}
                </div>
                {' '}
                {title}
                <button 
                style={this.btnStyle()}
                onClick = {this.props.delItem.bind(this,id)}
                >
                {'X'}</button>
            </div>
        )
    }
}
const itemHeader = {
    width  : '100%' ,
    backgroundColor : '#f4f4f4',
    color : '#aaa', 
    padding : '3px', 
    marginBottom : '15px', 
    borderBottom : '1px solid #ccc'
}

// PropTypes
TodoItem.propTypes = {
    item : propTypes.object.isRequired
}
