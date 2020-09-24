import React, {Component} from 'react'
import './ToDoList.css'
import ToDoItem from "./ToDoItem"
import InfiniteScroll from 'react-infinite-scroller';

export default class ToDoList extends Component {    
    render(){
        const {items, clearList, handleDelete, handleEdit, markComplete} = this.props;
        return(
            
                <div className = "apSidebarList" >
                <InfiniteScroll style = {{ height: "100%", flex: "1 1", scrollBehavior:"smooth",
                overflowX:"hidden", overflowY:"75%"}} pageStart={0}
            
                     hasMore={true || false}
                    loader={<div className="loader" key={0}></div>}
                    useWindow={false}>
                    <div>
                        <div className = "text">
                            <h3>Today</h3>
                        </div>
                        <li className = "list-group">
                        
                            {
                                items.map(item => {
                                    
                                    return (<ToDoItem key = {item.id} 
                                        title = {item.title}
                                        handleDelete = {() => handleDelete(item.id)}
                                        done = {item.done}
                                        handleEdit = {() => handleEdit(item.id)}
                                        markComplete = {() => markComplete(item.id)} 
                                        />);

                                })
                            
                            }
                        </li>
                    </div>
                    </InfiniteScroll>
                    <div className ="footer">
                        <button type = "button"  className = "btn-clear"  onClick = {clearList}>
                            Clear All
                        </button>
                    </div >
                </div>
                
                
           
            
        );
    }
}