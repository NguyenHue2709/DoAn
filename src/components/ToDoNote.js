import React, {Component} from 'react';


export default class ToDoNote extends Component {
    
    render() {
        const{titleNote} = this.props;
        return(
            <div>
                <li className = "note">
                    <p className= "title-note">{titleNote}</p>

                </li>
            </div>
        );

    }
}