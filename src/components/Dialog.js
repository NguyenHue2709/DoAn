import React, {Component} from 'react'
import './Dialog.css'
import ToDoNote from './ToDoNote'

class Dialog extends Component {
  
  render() {
    const {items} = this.props
    let dialog = (
      <div className = 'dialogStyle'>
        <button className = "buttonStyle" onClick = {this.props.onClose}>x</button>
        <div>
          {this.props.children}
                    <li className = "listnote-group">
                        
                        {
                            items.map(note => {
                                
                                return (<ToDoNote key = {note.id} 
                                    titleNote = {note.titleNote}
                                    
                                    />);

                            })
                        
                        }
                    </li>
        
        </div>
        
        
      </div>
    );
    if (! this.props.isOpen) {
      dialog = null;
    }
    return(
      <div>
        {dialog}
      </div>
    );
  }
}
export default Dialog;
