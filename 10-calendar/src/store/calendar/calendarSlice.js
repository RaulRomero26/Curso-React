import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns';

const tempEvent = {
	_id: new Date().getTime(),
	title: 'Cumpleaños de raul',
	notes: 'hay que comprar el pastel',
	start: new Date(),
	end: addHours(new Date,2),
	bgColor: '#fafafa',
	user: {
		_id: '123',
		name: 'Raul'
	}
}


export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [
        tempEvent
    ],
    activeEvent: null
  },
  reducers: {//aca recuerda el paylod lo estas desestructurando de el objeto action
	onSetActiveEvent: (state,{payload}) => {
		state.activeEvent = payload;
	},
	onAddNewEvent: (state,{payload}) => {
		console.log('llega el payload ',payload);
		state.events.push(payload)
		state.activeEvent = null;
	}
  }
});

export const {onSetActiveEvent,onAddNewEvent} = calendarSlice.actions
