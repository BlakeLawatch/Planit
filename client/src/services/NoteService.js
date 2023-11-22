import { AppState } from "../AppState"
import { Note } from "../models/Note"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class NoteService{

    async createNote(noteData){
        const res = await api.post(`api/notes`, noteData)
        logger.log('created a note FINISH IN THE SERVICE', res.data)
        AppState.notes.push(new Note(res.data))
        logger.log('created a note', AppState.notes)
    }

    async getNotesByProjectId(projectId){
        const res = await api.get(`api/projects/${projectId}/notes`)
        AppState.notes = res.data.map(pojo => new Note(pojo))
        logger.log('got notes', AppState.notes)
    }
}

export const noteService = new NoteService()