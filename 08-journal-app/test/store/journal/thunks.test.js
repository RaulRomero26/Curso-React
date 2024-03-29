import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../src/firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "../../../src/store/journal/journalSlice";
import { startNewNote } from "../../../src/store/journal/thunks";


describe('pruebas en Journal Thunks', () => { 

    const dispatch = jest.fn();
    const getState = jest.fn();
    beforeEach(()=> jest.clearAllMocks());
    
    test('startNewNote debe de crear una nueva nota en blanco', async () => { 

        const uid = 'TEST-UID'

        getState.mockReturnValue({auth: { uid: uid }})
        
        await startNewNote()(dispatch,getState);

        expect(dispatch).toHaveBeenCalledWith( savingNewNote() )
        expect(dispatch).toBeCalledWith( addNewEmptyNote({
            body: '',
            title: '',
            id: expect.any(String),
            date: expect.any(Number),
        }))
        expect(dispatch).toBeCalledWith( setActiveNote({
            body: '',
            title: '',
            id: expect.any(String),
            date: expect.any(Number),
        }))

        //borrar de firebase
        const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`)
        const docs = await getDocs(collectionRef);
        const deletePromises = [];
        docs.forEach (doc =>  deletePromises.push(deleteDoc(doc.ref)));
        await Promise.all(deletePromises);
     })
     
 })