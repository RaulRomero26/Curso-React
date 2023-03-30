import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from "../../../src/store/calendar/calendarSlice"
import { calendarWithActiveEventsState, calendarWithEventsState, events, initialStale } from "../../fixures/calendarStates";


describe('pruebas en el calendarSlice', () => { 
    
    test('debe de regresar el estado por defecto', () => {

        const state = calendarSlice.getInitialState();
        expect(state).toEqual(initialStale);
      
    });

    test('onSetActiveEvent debe de activar el evento', () => {
      
        const state = calendarSlice.reducer(calendarWithActiveEventsState, onSetActiveEvent(events[0]));
        expect(state.activeEvent).toEqual(events[0]);

    });
    
    
    test('onAddNewEvent debe de agregar el evento', () => {
      
        const newEvent = {
            id: '3',
            start: new Date('2020-11-09 13:00:00'),
            end: new Date('2020-11-09 15:00:00'),
            title: 'Cumpleaños de Fernando!!',
            notes: 'Alguna nota!!',
        }

        const state = calendarSlice.reducer( calendarWithEventsState, onAddNewEvent(newEvent) );
        expect( state.events ).toEqual([...events,newEvent]);
    });
    
    test('onUpdateEvent debe de actualizar el evento', () => {
      
        const updatedEvent = {
            id: '1',
            start: new Date('2020-10-21 13:00:00'),
            end: new Date('2020-10-21 15:00:00'),
            title: 'Cumpleaños de Fernando actualizado',
            notes: 'Alguna nota actualizada',
        }

        const state = calendarSlice.reducer( calendarWithEventsState, onUpdateEvent(updatedEvent) );
        expect( state.events ).toContain(updatedEvent)
    });

    test('onDeleteEvent debe de borrar el elemento activo', () => {
      
        const state = calendarSlice.reducer(calendarWithActiveEventsState, onDeleteEvent() )
        expect( state.activeEvent ).toBe(null)
        expect( state.events).not.toContain(events[0])

    })

    test('onLoadEvents debe de establecer los eventos', () => {

        const state = calendarSlice.reducer(initialStale, onLoadEvents(events));
        expect( state.isLoadingEvents ).toBeFalsy();
        expect( state.events ).toEqual(events);

        const newState = calendarSlice.reducer(state, onLoadEvents(events));
        expect( state.events.length ).toBe(events.length);

    })

    test('onLogoutCaledar debe de limpiar el estado', () => {

        const state = calendarSlice.reducer(calendarWithActiveEventsState, onLogoutCalendar());
        expect(state).toEqual(initialStale);
      
    })
    


 });