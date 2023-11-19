import { AppState } from "../AppState"
import { Project } from "../models/Project"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ProjectsService{


    async getProjects(){
        const res = await api.get(`api/projects`)
        AppState.projects = res.data.map(pojo => new Project(pojo))
        logger.log('got projects FINISH IN THE SERVICE', AppState.Projects)
    }
}

export const projectsService = new ProjectsService()