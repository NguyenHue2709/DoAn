//import React from 'react';
import React, {Component} from 'react'

import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css" // để hiện thị item đẹp mà không cần chỉnh sửa

import { v4 as uuidv4 } from 'uuid'; //uuid là packege dung chung, sử dụng để tự thêm mã id
uuidv4();

class App extends Component {
  state = { //khai báo state 
    items: [],    // là một mảng trống
    id:uuidv4(),
    item:"",
    editItem:false
   
  }
  handleChange = (e) => { // tìm kiếm event hoặc lắng nghe event ** Đây là hàm Callback
    this.setState({
      item: e.target.value // trả về text khi đã kiểm tra id
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
      editItem: false,
     
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
  const filteredItems  = this.state.items.filter( item => item.id !== id) // phương thức filter() dùng để tạo ra một mảng mới với tất cả các phần tử thỏa điều kiện của một hàm test
  const selectedItem = this.state.items.find(item => item.id === id)
  console.log(selectedItem)
   this.setState ({
     items: filteredItems,
     item: selectedItem.title,
     editItem: true,
    
     id: id
   })   
 }
 markComplete = (id) => {
  // const filteredItems  = this.state.items.filter( item => item.id !== id)
  this.state.items.filter(item => item.id === id).forEach(element => {
    element.done = "done"
    console.info(element)
  });
  // selectedItem.done = "done"
   this.setState ({
     items: this.state.items
   }); 
 };
  render(){
    return (
      
      <div>
         <header className="App-header">
          <img className="Header-logo" src="/images/bg2.webp" alt="Logo"/>
        </header>  
          <ToDoInput item = {this.state.item}  handleChange = {this.handleChange}
           handleSubmit={this.handleSubmit} editItem = {this.state.editItem}/>
          <ToDoList items = {this.state.items} clearList = {this.clearList}
                       handleDelete = {this.handleDelete} handleEdit = {this.handleEdit}
                       markComplete = {this.markComplete}/>
     
      </div>
    );
  }
  
}

export default App;
