import { dbContext } from "../db/DbContext.js"

class ProjectsService {


    async getProjects(userId) {
        const projects = await dbContext.Projects.find({ creatorId: userId }).populate('creator')
        return projects
    }

    async getProjectById(projectId) {
        const project = (await dbContext.Projects.findById(projectId)).populate('creator')
        return project
    }

    async createProject(projectData) {
        const newProject = (await dbContext.Projects.create(projectData)).populate('creator')
        return newProject
    }

    async destroyProject(projectId) {
        const deletedProject = await dbContext.Projects.findByIdAndDelete(projectId)
        return deletedProject
    }
}

export const projectsService = new ProjectsService