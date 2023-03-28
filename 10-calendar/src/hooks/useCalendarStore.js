import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent, onLoadEvents } from "../store";


export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const {events, activeEvent} = useSelector (state => state.calendar );
    const { user } = useSelector(state => state.auth);

    const setActiveEvent =(calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async( calendarEvent ) => {
        // Todo bien
        try {

            if( calendarEvent.id ) {
                // Actualizando
                await calendarApi.put(`/events/${calendarEvent.id}`,calendarEvent)
                dispatch(onUpdateEvent({...calendarEvent, user}));
                return;
            } 
                
            const { data } = await calendarApi.post('/events', calendarEvent);
            dispatch( onAddNewEvent({ ...calendarEvent,id: data.evento.id, user }) );
            
        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data?.msg,'error')
        }
       
        
    }

    const startDeletingEvent = () => {
        //todo llegar al backend
        dispatch(onDeleteEvent());
    }

    const startLoadingEvents = async() => {
        try {
            
            const {data} = await calendarApi.get('/events');
            const events = convertEventsToDateEvents(data.eventos);
            dispatch(onLoadEvents(events));

        } catch (error) {
            console.log(error);
            console.log('error cargando eventos')
        }
    }

    return {
        //props
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,
        //metodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        startLoadingEvents
    }
}