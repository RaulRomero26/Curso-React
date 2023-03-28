import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";


export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const {events, activeEvent} = useSelector (state => state.calendar );
    const { user } = useSelector(state => state.auth);

    const setActiveEvent =(calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async( calendarEvent ) => {
        // Todo bien
        if( calendarEvent._id ) {
            // Actualizando
            dispatch(onUpdateEvent({...calendarEvent}));
        } else {
            // Creando
            const { data } = await calendarApi.post('/events', calendarEvent);
            dispatch( onAddNewEvent({ ...calendarEvent,id: data.evento.id, user }) );
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
            console.log(events)

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