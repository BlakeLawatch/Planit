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

    async getProjectById(projectId){
        const res = await api.get(`api/projects/${projectId}`)
        const currentProject = new Project(res.data)
        AppState.activeProject = currentProject
    }
    
    async destroyProject(projectId){
        const res = await api.delete(`api/projects/${projectId}`)
        AppState.activeProject = null
        const projectIndex = AppState.projects.findIndex(project => project.id == projectId)
        if (projectIndex == -1)
        {throw new Error('No project found')}
        AppState.projects.splice(projectIndex, 1)
        logger.log('deleted project, FINISH IN THE SERVICE', res.data)
        
    }
}

export const projectsService = new ProjectsService()