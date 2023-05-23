import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from "../../../src/store/calendar/calendarSlice";
import { calendarWithActiveEventState, calendarWithEventsState, events, initialState } from "../../fixtures/calendarStates";

describe('Pruebas en el calendarSlice', () => {

    test('Debe de regresar el estado por defecto', () => { 
        const state = calendarSlice.getInitialState();
        expect( state ).toEqual( initialState );
    });

    test('onSetActiveEvent debe de activar el evento', () => {
        const state = calendarSlice.reducer( calendarWithEventsState, onSetActiveEvent( events[0] ) );
        // console.log(state);
        expect( state.activeEvent ).toEqual( events[0] );
    });

    test('onAddNewEvent debe agregar el evento', () => {
        const newEvent = {
            id: '69',
            tite: 'Prueba nuevo evento',
            notes: 'Esto es una prueba',
            start: new Date('2023-03-04 13:00:00'),
            end: new Date('2023-03-04 15:00:00'),
        }
        const state = calendarSlice.reducer( calendarWithEventsState, onAddNewEvent(newEvent) );
        expect( state.events ).toEqual( [...events, newEvent] );
    });

    test('onUpdateEvent debe de actualizar el evento', () => {
        const eventUpdated = {
            id: '1',
            title: 'Evento de prueba!!!',
            notes: 'Esto es una prueba???',
            start: new Date('2022-03-21 15:00:00'),
            end: new Date('2022-03-21 18:00:00'),
        }
        const state = calendarSlice.reducer( calendarWithEventsState , onUpdateEvent( eventUpdated ))
        expect( state.events ).toContain( eventUpdated );

    });

    test('onDeleteEvent debe de borrar el evento activo', () => {
        const state = calendarSlice.reducer( calendarWithActiveEventState, onDeleteEvent() );
        expect( state.events ).not.toContain( events[0] );
        expect( state.activeEvent ).toBe( null );

    });

    test('onLoadEvents debe de establecer los eventos', () => {
        const state = calendarSlice.reducer( initialState, onLoadEvents( events ) );
        expect( state.isLoadingEvents ).toBeFalsy();
        expect( state.events ).toEqual( events );

    });

    test('onLogoutCalendar debe de limpiar el estado', () => {
        const state = calendarSlice.reducer( calendarWithActiveEventState, onLogoutCalendar() );
        expect( state ).toEqual( initialState );
    });

});