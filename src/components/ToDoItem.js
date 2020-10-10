import React, {Component} from 'react';
import './ToDoItem.css'
//import Dialog from '.components/Dialog'

export default class ToDoItem extends Component {
    render(){
        const {title, done, handleDelete, handleEdit, markComplete,openDialog} = this.props;
        //const {handleClickOpen} = this.props;
        return(
               <li className = "item">
                  
                  <p className= {done
                        ? "done"
                        : "titled"}>{title}</p>
                   <div className = "todo-icon" >
                      
                       <span className="mx-2 text" onClick = {openDialog}>
                            <i class="fas fa-info-circle"></i>
                       </span>
                       
                       

                        <span   
                         onClick = {markComplete}>
                            <i className="far fa-check-circle"></i>
                        
                        </span>
                   
                       <span className = "mx-2 text-success" onClick = {handleEdit}>
                            <i className="fas fa-pen"></i>
                        
                       </span>

                       <span className = "mx-2 text-danger" onClick = {handleDelete}>
                           <i className = "fas fa-trash"/>

                       </span>
                       

                   </div>

               </li>
               
        );
    }
}