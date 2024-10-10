import { dbContext } from "../db/DbContext.js"

class SprintsService {

    async getSprints(projectId) {
        const sprints = await dbContext.Sprints.find({ projectId }).populate('creator')
        return sprints
    }
    async createSprint(sprintData) {
        const newSprint = (await dbContext.Sprints.create(sprintData)).populate('creator')
        return newSprint
    }
    async destroySprint(sprintId) {
        const destroyedSprint = await dbContext.Sprints.findByIdAndDelete(sprintId)
        return destroyedSprint
    }

}

export const sprintsService = new SprintsService()