<template>
    <div class="d-flex">
        <div class="col-5 p-4 bg-light">
            <div class="fs-4 d-flex">
                <div v-if="task.isComplete">
                    <i class="mdi mdi-checkbox-multiple-marked-circle"></i>
                    <button @click="setActiveTask()" class="btn complete-button-color rounded-pill text-light mx-2 py-0">{{
                        task.name }}</button>
                </div>
                <div v-else>
                    <i class="mdi mdi-checkbox-multiple-marked-circle-outline"></i>
                    <button @click="setActiveTask()" class="btn button-color rounded-pill text-light mx-2 py-0">{{ task.name
                    }}</button>
                </div>
                <button @click="destroyTask()" class="btn gray-color fs-3"><i class="mdi mdi-delete-empty"></i></button>
            </div>
            <div class="border-left ps-4">
                <p class="gray-color"><i class="mdi mdi-run"></i> Created - {{ task.createdAt.toLocaleDateString() }}</p>
                <div class="d-flex justify-content-between py-3 my-2">
                    <span>5 Notes</span>
                    <span>{{ task.weight }}<i class="mdi mdi-weight"></i></span>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import { tasksService } from '../services/TasksService'
import { Task } from '../models/Task';
import Pop from '../utils/Pop';
import { computed } from 'vue';
import { AppState } from '../AppState';


export default {
    props: { task: { type: Task, required: true } },
    setup(props) {
        return {
            sprints: computed(() => AppState.sprints),

            async destroyTask() {
                try {
                    const wantToDelete = await Pop.confirm('You sure about that?')
                    if (!wantToDelete) {
                        return
                    }
                    await tasksService.destroyTask(props.task.id)
                } catch (error) {
                    Pop.error(error)
                }
            },
            setActiveTask() {
                tasksService.setActiveTask(props.task)
            }
        }
    }
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