import * as React from 'react';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { SampleBase } from '../common/sample-base';
import './disabled-style.css';
export class Disabled extends SampleBase {
    disabledDate(args) {
        if (args.date.getDay() === 0 || args.date.getDay() === 6) {
            /*set 'true' to disable the weekends*/
            args.isDisabled = true;
        }
    }
    render() {
        return (<div className='control-pane'>
        <div className='control-section'>
          <div className='datetimepicker-control-section'>
            <DateTimePickerComponent renderDayCell={this.disabledDate}></DateTimePickerComponent>
          </div>
        </div>
      </div>);
    }
}