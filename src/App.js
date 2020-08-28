//import React from 'react';
import React, {Component} from 'react'
//import React, { memo } from "react";
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
//import uuidv4 from 'uuid'
import { v4 as uuidv4 } from 'uuid'; //uuid là packege dung chung sử dụng để tự thêm mã id
uuidv4();
//them git hub

//const logo = require('./bg.jpg');
class App extends Component {
  state = {
    items: [],
    id:uuidv4(),
    item:"",
    editItem:false
  }
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
  };
  
  handleSubmit = (e) => {
    console.info("test")
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    //console.log(newItem);
    const updateItems = [...this.state.items, newItem];
    this.setState({
      items:updateItems,
     
      id:uuidv4(),
      item: "",
      editItem: false
    });
  };
  clearList = () => {
    this.setState({
      items:[]
    })
  }
 handleDelete = (id) => {
   const filteredItems  = this.state.items.filter( item => item.id !== id)  //Fiter???
   this.setState ({
     items:filteredItems
   })                 
 }
 handleEdit = (id) => {
  const filteredItems  = this.state.items.filter( item => item.id !== id)
  const selectedItem = this.state.items.find(item => item.id === id)
  console.log(selectedItem)
   this.setState ({
     items: filteredItems,
     item: selectedItem.title,
     editItem: true,
     id: id
   })   
 }
  render(){
    return (
      
      <div>
         <header className="App-header">
          <img className="Header-logo" src="/images/bg2.webp" alt="Logo"/>
        </header>  
          <ToDoInput item = {this.state.item}  handleChange = {this.handleChange}
           handleSubmit={this.handleSubmit} editItem = {this.state.editItem}/>
          <ToDoList items = {this.state.items} clearList = {this.clearList}
                       handleDelete = {this.handleDelete} handleEdit = {this.handleEdit}/>
     
      </div>
    );
  }
  
}

export default App;
