import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"

class TasksService {


    async createTask(taskInfo) {
        const newTask = (await dbContext.Tasks.create(taskInfo)).populate('creator')
        return newTask
    }

    async getTasksByProjectId(projectId) {
        const tasks = await dbContext.Tasks.find({ projectId }).populate('creator')
        return tasks
    }

    async editTask(taskId, userId, taskInfo) {
        const editedTask = await dbContext.Tasks.findById(taskId)

        if (editedTask.creatorId.toString() != userId) { throw new Forbidden('Not your task to edit my man') }

        editedTask.name = taskInfo.name || editedTask.name
        editedTask.weight = taskInfo.weight || editedTask.weight
        editedTask.sprintId = taskInfo.sprintId || editedTask.sprintId
        editedTask.isComplete = taskInfo.isComplete != undefined ? taskInfo.isComplete : editedTask.isComplete

        if (editedTask.isComplete && !taskId.completedOn) {
            editedTask.completedOn = new Date()
        }
        else {
            editedTask.completedOn = null
        }
        await editedTask.save()
        return editedTask
    }

    async destroyTask(taskId) {
        const destroyedTask = await dbContext.Tasks.findByIdAndDelete(taskId)
        return destroyedTask
    }
}

export const tasksService = new TasksService()