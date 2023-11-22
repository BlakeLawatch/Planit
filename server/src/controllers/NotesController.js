import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { notesService } from "../services/NotesService.js";

export class NotesController extends BaseController {
    constructor(data) {
        super(`api/notes`)
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createNote)
            .delete(`/:noteId`, this.destroyNote)
    }
    async createNote(req, res, next) {
        try {
            const noteData = req.body
            noteData.creatorId = req.userInfo.id
            const newNote = await notesService.createNote(noteData)
            return res.send(newNote)
        } catch (error) {
            next(error)
        }
    }
    async destroyNote(req, res, next) {
        try {
            const noteId = req.params.noteId
            const deletedNote = await notesService.destroyNote(noteId)
            return res.send(deletedNote)
        } catch (error) {
            next(error)
        }

    }
}