import { Auth0Provider } from "@bcwdev/auth0provider"
import BaseController from "../utils/BaseController.js"
import { tasksService } from "../services/TasksService.js"

export class TaskController extends BaseController {
    constructor(data) {
        super('api/tasks')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createTask)
            .put('/:taskId', this.editTask)
            .delete(`/:taskId`, this.destroyTask)
    }
    async createTask(req, res, next) {
        try {
            const taskInfo = req.body
            taskInfo.creatorId = req.userInfo.id
            const newTask = await tasksService.createTask(taskInfo)
            return res.send(newTask)
        } catch (error) {
            next(error)
        }

    }
    async editTask(req, res, next) {
        try {
            const taskId = req.params.taskId
            const userId = req.userInfo.id
            const taskInfo = req.body
            const editedTask = await tasksService.editTask(taskId, userId, taskInfo)
            return res.send(editedTask)
        } catch (error) {
            next(error)
        }

    }

    async destroyTask(req, res, next) {
        try {
            const taskId = req.params.taskId
            const destroyedTask = await tasksService.destroyTask(taskId)
            return res.send(destroyedTask)
        } catch (error) {
            next(error)
        }

    }

}