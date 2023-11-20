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
        const newProject = new Project(res.data)
        AppState.projects.push(newProject)
        return newProject
       
        
    }
}

export const projectsService = new ProjectsService()