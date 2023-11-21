import { AppState } from "../AppState"
import { Task } from "../models/Task"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class TaskService{


    async createTask(taskData){
        const res = await api.post(`api/tasks`, taskData)
        logger.log('Created a task FINISH IN THE SERVICE',  res.data)
        // AppState.tasks.push(new Task(res.data))
        // const newTask = new Task(res.data)
        // AppState.tasks.push(newTask)
    }
}

export const tasksService = new TaskService()