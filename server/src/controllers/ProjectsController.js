import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { projectsService } from "../services/ProjectsService.js";
import { dbContext } from "../db/DbContext.js";
import { sprintsService } from "../services/SprintsService.js";
import { tasksService } from "../services/TasksService.js";

export class ProjectsController extends BaseController {
    constructor() {
        super(`api/projects`)
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .get(``, this.getProjects)
            .get(`/:projectId`, this.getProjectById)
            .get('/:projectId/sprints', this.getSprints)
            .get(`/:projectId/tasks`, this.getTasksByProjectId)
            .post(``, this.createProject)
            .delete(`/:projectId`, this.destroyProject)
    }
    async getProjects(req, res, next) {
        try {
            const userId = req.userInfo.id
            const projects = await projectsService.getProjects(userId)
            return res.send(projects)
        } catch (error) {
            next(error)
        }
    }
    async getProjectById(req, res, next) {
        try {
            const projectId = req.params.projectId
            const project = await projectsService.getProjectById(projectId)
            return res.send(project)
        } catch (error) {
            next(error)
        }
    }
    async getSprints(req, res, next) {
        try {
            const projectId = req.params.projectId
            const sprints = await sprintsService.getSprints(projectId)
            return res.send(sprints)
        } catch (error) {
            next(error)
        }

    }
    async getTasksByProjectId(req, res, next) {
        try {
            const projectId = req.params.projectId
            const tasks = await tasksService.getTasksByProjectId(projectId)
            return res.send(tasks)
        } catch (error) {
            next(error)
        }

    }
    async createProject(req, res, next) {
        try {
            const projectData = req.body
            projectData.creatorId = req.userInfo.id
            const newProject = await projectsService.createProject(projectData)
            return res.send(newProject)
        } catch (error) {
            next(error)
        }
    }
    async destroyProject(req, res, next) {
        try {
            const projectId = req.params.projectId
            const deletedProject = await projectsService.destroyProject(projectId)
            return res.send(deletedProject)
        } catch (error) {
            next(error)
        }
    }
}