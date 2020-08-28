import React, {Component} from 'react';
import './ToDoItem.css'

export default class ToDoItem extends Component {
    render(){
      const {title, handleDelete, handleEdit} = this.props;
        return(
               <ul className = "item">
                  
                    <p className = "titled">{title}</p>
                   <div className = "todo-icon">
                        <span className = "mx-2 text-success">
                            <i class="far fa-check-circle"></i>
                        
                        </span>
                   
                       <span className = "mx-2 text-success" onClick = {handleEdit}>
                            <i class="fas fa-pen"></i>
                        
                       </span>
                       <span className = "mx-2 text-danger" onClick = {handleDelete}>
                           <i className = "fas fa-trash"/>

                       </span>

                   </div>

               </ul>
               
        );
    }
}