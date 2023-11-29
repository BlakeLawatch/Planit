<template>
    <div class="d-flex">
        <div class="col-5 p-4 bg-light">
            <div class="fs-4 d-flex">
                <div v-if="task.isComplete">
                    <i class="mdi mdi-checkbox-multiple-marked-circle"></i>
                    <button @click="setActiveTask()" type="button" data-bs-toggle="offcanvas" data-bs-target="#taskDetails"
                        aria-controls="offcanvasRight" class="btn complete-button-color rounded-pill text-light mx-2 py-0">
                        {{ task.name }}
                    </button>
                    <TaskDetailsOffcanvas />
                </div>
                <div v-else>
                    <i class="mdi mdi-checkbox-multiple-marked-circle-outline"></i>
                    <button @click="setActiveTask()" type="button" data-bs-toggle="offcanvas" data-bs-target="#taskDetails"
                        aria-controls="offcanvasRight" class="btn button-color rounded-pill text-light mx-2 py-0">
                        {{ task.name }}</button>
                    <TaskDetailsOffcanvas />
                </div>
                <button @click="destroyTask()" class="btn gray-color fs-3"><i class="mdi mdi-delete-empty"></i></button>
            </div>
            <div class="border-left ps-4">
                <p class="gray-color"><i class="mdi mdi-run"></i> Created - {{ task.createdAt.toLocaleDateString() }}</p>
                <div class="d-flex  py-3 m-2">
                    <span class="main-color">{{ notes.length }} <i class="mdi mdi-message-reply-text"></i> </span>
                    <span class="ms-4">{{ task.weight }}<i class="mdi mdi-weight"></i></span>
                </div>
            </div>
        </div>
        <div class="col-7 d-flex justify-content-end">
            <form @submit.prevent="changeSprint()">
                <div class="mb-3 text-end w-75">
                    <label for="sprint" class="form-label ps-2"></label>
                    <select v-model="editable.sprintId" name="" class="form-select" id="sprint">
                        <option v-for="sprint in sprints" :key="sprint.id" :value="sprint.id">
                            {{ sprint.name }}</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-outline-success">Move Sprint</button>
            </form>

        </div>
        <div>
        </div>
    </div>
</template>


<script>
import { tasksService } from '../services/TasksService'
import { Task } from '../models/Task';
import Pop from '../utils/Pop';
import { computed, ref } from 'vue';
import { AppState } from '../AppState';
import TaskDetailsOffcanvas from './TaskDetailsOffcanvas.vue';




export default {
    props: { task: { type: Task, required: true } },
    setup(props) {

        const editable = ref({})
        return {
            activeSprint: computed(() => AppState.activeSprint),
            sprints: computed(() => AppState.sprints),

            notes: computed(() => AppState.notes),
            editable,


            async destroyTask() {
                try {
                    const wantToDelete = await Pop.confirm('You sure about that?');
                    if (!wantToDelete) {
                        return;
                    }
                    await tasksService.destroyTask(props.task.id);
                }
                catch (error) {
                    Pop.error(error);
                }
            },
            setActiveTask() {
                tasksService.setActiveTask(props.task);
            },

            async changeSprint() {
                try {
                    const taskData = editable.value
                    await tasksService.changeSprint(props.task.id, taskData)
                    editable.value = {}

                } catch (error) {
                    Pop.error(error)
                }
            }
        };
    },
    components: { TaskDetailsOffcanvas }
};
</script>


<style lang="scss" scoped>
.button-color {
    background-color: #e95959;
}

.complete-button-color {
    background-color: #b4a4a4;
}

.gray-color {
    color: gray;
}

.border-left {
    border-left: .02rem solid gray;
}

.secondary-color {
    color: #f048ae;
}
</style>../services/TasksService