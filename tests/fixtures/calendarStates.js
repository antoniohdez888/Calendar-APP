export const events = [
    {
        id: '1',
        title: 'Evento de prueba',
        notes: 'Esto es una prueba',
        start: new Date('2022-03-21 13:00:00'),
        end: new Date('2022-03-21 15:00:00'),
    },
    {
        id: '2',
        title: 'Testing event',
        notes: 'This is a test',
        start: new Date('2023-03-29 13:00:00'),
        end: new Date('2023-03-29 15:00:00'),
    }
];

export const initialState = {
    isLoadingEvents: true,
    events: [],
    activeEvent: null
}

export const calendarWithEventsState = {
    isLoadingEvents: false,
    events: [
        ...events
    ],
    activeEvent: null
}

export const calendarWithActiveEventState = {
    isLoadingEvents: false,
    events: [
        ...events
    ],
    activeEvent: { ...events[0] }
}