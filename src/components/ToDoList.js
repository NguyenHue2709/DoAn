import React, {Component} from 'react'
import './ToDoList.css'
import ToDoItem from "./ToDoItem"

export default class ToDoList extends Component {
    
    render(){
        const {items, clearList, handleDelete, handleEdit} = this.props;
        return(
            <ul className = "list-group">
               
                <div className = "apSidebarList">
                    <div className = "text">
                        <h3>Today</h3>
                    </div>
                    
                    {
                        items.map(item => {
                            
                            return (<ToDoItem key = {item.id} 
                                title = {item.title}
                                handleDelete = {() => handleDelete(item.id)}
                                handleEdit = {() => handleEdit(item.id)}/>);

                        })
                        
                    }
                    <button type = "button" className = "btn-danger btn-block text-captitakize mt-5" onClick = {clearList}>
                        Clear All
                    </button>
                    
                </div>
                
            </ul>
            
        );
    }
}