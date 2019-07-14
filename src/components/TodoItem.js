import React, { Component } from 'react'
import propTypes from 'prop-types';
import DelImage from '../img/Del.png'
export default class TodoItem extends Component {
    
    getStyle = () => {
           return {
               background : '#f4f4f4', 
               padding  : '20px 10px ' ,
               borderBottom : '1px solid #ccc',
               height : '200px',
               width : '60%',
               margin : '10px auto',
               position : 'relative'
           }
    }
    btnStyle =() =>{
        return {
                position : 'absolute',
                right : '15px',
                top : '10px',
                padding : '2px',
                width: '35px'

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
                   <img 
                        src = {DelImage}
                        alt =''
                        style={this.btnStyle()}
                        onClick = {this.props.delItem.bind(this,id)}
                        >
                </img>
                </div>
                {' '}
                {title}
                
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
const DelImageStyle = { 
   
}

// PropTypes
TodoItem.propTypes = {
    item : propTypes.object.isRequired
}
