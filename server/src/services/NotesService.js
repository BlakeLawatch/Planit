import { dbContext } from "../db/DbContext.js"

class NotesService {


    async createNote(noteData) {
        const newNote = (await dbContext.Notes.create(noteData)).populate('creator')
        return newNote
    }

    async getNotesByProjectId(projectId) {
        const notes = await dbContext.Notes.find({ projectId }).populate('creator')
        return notes
    }

    async destroyNote(noteId) {
        const deletedNote = await dbContext.Notes.findByIdAndDelete(noteId)
        return deletedNote
    }
}

export const notesService = new NotesService()