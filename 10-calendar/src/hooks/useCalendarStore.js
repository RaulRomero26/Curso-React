import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onSetActiveEvent } from "../store";


export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const {events, activeEvent} = useSelector (state => state.calendar )

    const setActiveEvent =(calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async(calendarEvent) => {
        //llegar al backend

        if(calendarEvent._id){

        }else{
            dispatch(onAddNewEvent({ ...calendarEvent,_id: new Date().getTime() }))
        }
    }

    return {
        //props
        events,
        activeEvent,
        //metodos
        setActiveEvent,
        startSavingEvent
    }
}