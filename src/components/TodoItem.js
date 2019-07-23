import React, { Component } from 'react'
import propTypes from 'prop-types';
import DelImage from '../img/Del.png'
import ReactDOMServer from 'react-dom/server';
export default class TodoItem extends Component {
    state = {
        edit : false,
        updateTitle : ''
    }
    
    getStyle = () => {
           return {
               background : '#f4f4f4', 
               padding  : '20px 10px ' ,
               borderBottom : '1px solid #ccc',
               minHeight : '6rem',
               height : 'auto',
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
handleEdit = () => {
    this.setState({
        edit : true
    })                                                                                                                                     
}
doneEdit = (e) => {
   if(e.keyCode === 13){
       this.setState({
           edit : false
       })
   }
}
onChange = (e) => {
    console.log(e.target.value)
    this.setState({
        updateTitle : e.target.value
    })
   
}

    render() {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;

        var editStyle = {} ;
        if(this.state.edit) {
            editStyle.display ='block'
        }else{
            editStyle.display= 'none'
        }
        const {id , title} = this.props.item;
        return (
            <div>
                <div style = {this.getStyle()} onDoubleClick ={this.handleEdit} >
                    <div style ={itemHeader}>
                    {dateTime.toString()}
                    <img 
                            src = {DelImage}
                            alt =''
                            style={this.btnStyle()}
                            onClick = {this.props.delItem.bind(this,id)}
                            >
                        </img>
                    </div>

                    {title}

                   {/*  {/* the below is the Edit Mode */}
                    <div> 
                     <input 
                     onKeyDown ={this.doneEdit}
                     style ={editStyle} 
                     defaultValue ={title} 
                     onChange = {this.onChange}
                     />
                     </div> 
                </div>
                
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

// How To update Title When Enter is clicked .. and Title Edited