import { AppState } from "../AppState"
import { Task } from "../models/Task"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class TasksService{


    async createTask(taskData){
        const res = await api.post(`api/tasks`, taskData)
        AppState.tasks.push(new Task(res.data))
        logger.log('Created a task FINISH IN THE SERVICE', res.data)
        // const newTask = new Task(res.data)
        // AppState.tasks.push(newTask)
    }

    async getTasksByProjectId(projectId){
        const res = await api.get(`api/projects/${projectId}/tasks`)
        AppState.tasks = res.data.map(pojo => new Task(pojo))
    }
    
    async destroyTask(taskId){
        await api.delete(`api/tasks/${taskId}`)
        const taskIndex = AppState.tasks.findIndex(task => task.id == taskId)
        AppState.tasks.splice(taskIndex, 1)
        logger.log('deleted task FINISH IN THE SERVICE', AppState.tasks)
        
    }
}

export const tasksService = new TasksService()