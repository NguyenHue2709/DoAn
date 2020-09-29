import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import './Picker.css'

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className = "appside">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container spacing={1}  className = "grid" >
          <Grid item xs={22}>
            <KeyboardDatePicker
              className = "datePicker"
              margin="dense"
              
              id="date-picker-dialog"
              label="Set Date"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
          
          <Grid item xs={5} className = "grid">
            <KeyboardTimePicker
              className = "timePicker"
              margin="normal"
              id="time-picker"
              label="Set Time"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </div>
      
  );
}
