import { FlashlightOffRounded } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit'


export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    imageUrls: [],
    active: null
  },
  reducers: {
    savingNewNote: ( state ) => {
        state.isSaving = true;
    },
    addNewEmptyNote: (state, action ) => {
        state.notes.push( action.payload );
        state.isSaving = false;
    },
    setActiveNote: (state, action ) => {
        state.active = action.payload;
        state.messageSaved = '';
    },
    setNotes: (state, action ) => {
        state.notes = action.payload;
    },
    setSaving: (state ) => {
        state.isSaving = true;
        state.messageSaved = '';
    },
    updateNote: (state, action ) => { // payload: note
        state.isSaving = false;
        state.notes = state.notes.map( note => {

            if ( note.id === action.payload.id ) {
                return action.payload;
            }

            return note;
        });

        state.messageSaved = `${ action.payload.title }, actualizada correctamente`;
    },
    setPhotosToActiveNote: (state, action) => {
        state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ]; 
        state.isSaving = false;
    },
    clearNotesLogout: (state) => {
        state.isSaving = false;
        state.messageSaved = '';
        state.notes = [];
        state.active = null;
    },
    deleteNoteByID: (state, action) => {
        state.active = null;
        state.notes = state.notes.filter( note => note.id !== action.payload );
    },
  }
});

export const {addNewEmptyNote,setActiveNote,setNotes,setSaving
,updateNote,deleteNoteByID, savingNewNote,setPhotosToActiveNote,
clearNotesLogout} = journalSlice.actions

export default journalSlice.reducer