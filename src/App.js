//import React from 'react';
import React, {Component} from 'react'

import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css" // để hiện thị item đẹp mà không cần chỉnh sửa
import Dialog from './components/Dialog'

//import Account from './Account'

import { v4 as uuidv4 } from 'uuid'; //uuid là packege dung chung, sử dụng để tự thêm mã id
uuidv4();

class App extends Component {
  state = { //khai báo state  // passing Data to components
    items: [],    // là một mảng trống
    id:uuidv4(),
    
    item:"",
    note:"",
    editItem:false,
    isOpen: false
   
  }
  // Handle changle Input action
  handleChange = (e) => { // tìm kiếm event hoặc lắng nghe event ** Đây là hàm Callback
    this.setState({
      item: e.target.value, // trả về text khi đã kiểm tra id
      
    });
  };
  // Handle change Input Note
  handleChanNote = (e) => {
    //console.log(note)
    this.setState({
      note: e.target.value
    });
  };
  // Text input not none
  validationForm() {
    const re =  /\S/;
    
    if (re.test(this.state.item)) return false;
    return true;
  }
  // Click event
  handleSubmit = (e) => {
   
    console.info("test")
    e.preventDefault();// chặn các sự kiện form
    const newItem = {
      id: this.state.id,
      title: this.state.item,
      titleNote: this.state.note
    }
    if(this.validationForm()) {
      alert('Let add your action!')
      return false;
    }
    console.log(newItem); //in ra id và title trong console
    const updateItems = [...this.state.items, newItem];
    this.setState({
      items:updateItems,
     
      id:uuidv4(),
      item: "",
      note: "",
      editItem: false,
      isOpen:false
     
    });

  };
  //Submit Note
  
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
 openDialog = (id) => {
   this.setState({
     
     isOpen:true
   });
 
 }
  render(){
    return (
      
      <div>
         <header className="App-header">
          <img className="Header-logo" src="/images/bg2.webp" alt="Logo"/>
          
          
        </header>  
        
          <ToDoInput item = {this.state.item}  handleChange = {this.handleChange}
           handleSubmit={this.handleSubmit} editItem = {this.state.editItem}
           note = {this.state.note} handleChanNote = {this.handleChanNote}
           />
          
          <ToDoList items = {this.state.items} clearList = {this.clearList}
                       handleDelete = {this.handleDelete} handleEdit = {this.handleEdit}
                       markComplete = {this.markComplete}
                       openDialog = {this.openDialog}/>
                       <Dialog items = {this.state.items} isOpen = {this.state.isOpen}
                        onClose = {(e) => this.setState({isOpen:false})}
                       
                       >
                        
                       </Dialog>
                      
                       
      </div>
    );
  }
  
}

export default App;
