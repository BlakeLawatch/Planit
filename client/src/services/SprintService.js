import { AppState } from "../AppState"
import { Sprint } from "../models/Sprint"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class SprintService{


    async createSprint(sprintData){
        const res = await api.post(`api/sprints`, sprintData)
        const newSprint = new Sprint(res.data)
        AppState.sprints.push(newSprint)
        // logger.log('created sprint FINISH IN THE SERVICE', res.data)
    }

    async getSprintsByProjectId(projectId){
        const res = await api.get(`api/projects/${projectId}/sprints`)
        AppState.sprints = res.data.map(pojo => new Sprint(pojo))
        logger.log('got sprints FINISH IN THE SERVICE', AppState.sprints)
    }

    setActiveSprint(sprint){
        AppState.activeSprint = sprint
    }
}

export const sprintService = new SprintService()