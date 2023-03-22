import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";


export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const {events, activeEvent} = useSelector (state => state.calendar )

    const setActiveEvent =(calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async( calendarEvent ) => {
        // TODO: llegar al backend
        console.log('entro al start', calendarEvent)
        // Todo bien
        if( calendarEvent._id ) {
            // Actualizando
            console.log('entro al if')
            dispatch(onUpdateEvent({...calendarEvent}));
        } else {
            // Creando
            console.log('entro al else')
            dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) );
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