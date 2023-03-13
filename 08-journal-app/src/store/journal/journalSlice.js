import { FlashlightOffRounded } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit'


export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messagedSaved: '',
    notes: [],
    active: null
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state,action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state,action) => {
      state.active = action.payload;
    },
    setNotes: (state,action) => {

    },
    setSaving: (state) => {

    },
    updateNote: (state, action) => {

    },
    deleteNoteByiD: (state, action) => {

    }
  }
});

export const {addNewEmptyNote,setActiveNote,setNotes,setSaving
,updateNote,deleteNoteByiD, savingNewNote} = journalSlice.actions

export default journalSlice.reducer