import React, { Component } from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
export default class addItem extends Component {
    state = { 
        mdeValue : ''
    }

    handleChange = value => {
        this.setState({ mdeValue: value });
        console.log(this.state.mdeValue)
      };

    onSubmit = (e) => {
        e.preventDefault();
       this.props.addItem(this.state.mdeValue);
       this.setState({mdeValue : ' '})
    }
    render() {
       
        return (
            <form style ={{ marginBottom : '20px'}}>
                <SimpleMDE 
                onChange={this.handleChange}
                style ={
                    {
                    margin : 'auto', 
                    display : 'block',
                    width : '50%', 
                    minHeight : '6rem',
                    padding : '10px'
                }}
                
                />;
                <input 
                type = 'submit' 
                value = 'Add A Note'
                style ={
                    {
                    margin : 'auto', 
                    display : 'block',
                    width : '50%'
                   
                }}
                className ='btn'
                name ='title' 
                onClick ={this.onSubmit}
                />
               
            </form>
        )
    }
}
