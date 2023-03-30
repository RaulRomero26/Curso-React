
export const events = [
    {
        id: '1',
        start: new Date('2022-10-21 13:00:00'),
        end: new Date('2022-10-21 15:00:00'),
        title: 'Cumpleaños de Fernando',
        notes: 'Alguna Nota',
    },
    {
        id: '2',
        start: new Date('2022-11-09 13:00:00'),
        end: new Date('2022-11-09 15:00:00'),
        title: 'Cumpleaños de Melissa',
        notes: 'Alguna nota de Melissa',
    },
];

export const initialStale ={
    isLoadingEvents: true,
    events: [],
    activeEvent: null
}

export const calendarWithEventsState ={
    isLoadingEvents: false,
    events: [ ...events ],
    activeEvent: null
}

export const calendarWithActiveEventsState ={
    isLoadingEvents: false,
    events: [ ...events ],
    activeEvent: { ...events[0] }
}