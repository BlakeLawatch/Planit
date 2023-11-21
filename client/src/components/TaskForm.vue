<template>
    <div class="modal fade" id="taskModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 d-flex" id="exampleModalLabel">
                        <i class="mdi mdi-rhombus-outline fs-4"></i>
                        <p class="main-color ps-3"> > CreateTask</p>
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="createTask()">
                        <div class="d-flex justify-content-around">
                            <div class="col-5 mb-3 text-start">
                                <label for="name" class="form-label ps-2">Task Name</label>
                                <input v-model="editable.name" type="text" class="form-control" id="name" required
                                    maxLength="40" placeholder="Name...">
                            </div>
                            <div class="col-5 mb-3 text-start">
                                <label for="weight" class="form-label ps-2">Task Weight <i
                                        class="mdi mdi-weight"></i></label>
                                <input v-model="editable.weight" type="number" class="form-control" id="weight" required
                                    placeholder="0">
                            </div>

                        </div>
                        <div class="text-end">
                            <button type="button" class="btn" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn button-color text-white">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';
import { tasksService } from '../services/TaskService.js'

import { Modal } from 'bootstrap';
import { AppState } from '../AppState'
import Pop from '../utils/Pop';
import { useRoute } from 'vue-router';




export default {
    setup() {
        const editable = ref({})
        const route = useRoute()

        return {
            editable,
            route,



            async createTask() {
                try {
                    const taskData = editable.value
                    // taskData.projectId = route.params.projectId
                    taskData.projectId = AppState.activeProject.id
                    taskData.sprintId = AppState.activeSprint.id
                    await tasksService.createTask(taskData)
                    editable.value = {}
                    Modal.getOrCreateInstance('#taskModal').hide()

                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped>
.button-color {
    background-color: #a729c4;
}
</style>