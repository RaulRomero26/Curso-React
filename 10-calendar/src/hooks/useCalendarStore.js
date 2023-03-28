import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";
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

    return {
        //props
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,
        //metodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent
    }
}