import React, { Component } from 'react';
import './ToDoInput.css'; 

export default class ToDoInput extends Component {
    render(){
        const{item,handleChange, handleSubmit, editItem} = this.props;
       
        return(
            <div className = "apSidebar">
                <div className = "account">
                    <img alt="Remy Sharp" src="/images/meo.jpg" />  
                </div>
                <button className = "userName" type = "text">Nguyễn Ngọc Huế</button>
                <label className = "label">What do you do today?</label>
               
                
                <form onSubmit = {handleSubmit}>
                    <button type = "submit" className = {
                        editItem
                        ? "editAction"
                        : "createAction"
                    }>{editItem ? "Edit item":"+Creat a task"}</button>
                    <div className = "input-group">
                        <input className="form-control" type="text" placeholder= "I want to..."
                         value = {item} onChange = {handleChange}/>
                        
                    </div>
                    <div className = "input-group">
                        <input className="form-control" type="text" placeholder= "Note" 
                        />
                    </div>
                    
                </form>
                
               
            </div>
        );
    }
}