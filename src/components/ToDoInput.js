import React, { Component } from 'react';
//import React from 'react';
import './ToDoInput.css'; 
import DatePicker from "react-datepicker";
//import TimePicker from 'react-time-picker';

//import { TimePicker } from 'antd';
//import moment from 'moment';

//import Picker from "./components/Picker"
//import 'react-times/css/material/default.css';
// or you can use classic theme
//import 'react-times/css/classic/default.css';


 
import "react-datepicker/dist/react-datepicker.css";

export default class ToDoInput extends Component {

    
    state = {
        startDate: new Date()
    };

    handleDateChange = date => {
        this.setState({
            startDate: date
        });
    };
    /*onTimeChange(options) {
        // do something
      }
    
      onFocusChange(focusStatue) {
        // do something
      }

    /*state = {
        startDate: new Date()
      };
      state = {
        time: '10:00',
      }
      
  onChange = time => this.setState({ time })
     
      handleDateChange = date => {
        this.setState({
          startDate: date
        });
      };*/
      

    render(){
        const{item,handleChange, handleSubmit, editItem} = this.props;
        const format = 'HH:mm';
        //const [selectedDate, setSelectedDate] = React.useState(new Date());

        /*const handleDateChange = (date) => {
            setSelectedDate(date);
        };*/
       
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

                    <div>
                    <div>
                        <DatePicker className = "datePicker"
                            selected={this.state.startDate}
                            onChange={this.handleDateChange}
                            placeholderText = "Date"
                        />
                    </div>
                    
                        

                    </div>
                   
                </form>
                
               
            </div>
            
        );
    }
}