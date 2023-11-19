import { AppState } from "../AppState"
import { Project } from "../models/Project"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ProjectsService{


    async getProjects(){
        const res = await api.get(`api/projects`)
        AppState.projects = res.data.map(pojo => new Project(pojo))
    }
    
    async createProject(projectData){
        const res = await api.post(`api/projects`, projectData)
        logger.log('created projects FINISH IN THE SERVICE', res.data)
        
    }
}

export const projectsService = new ProjectsService()