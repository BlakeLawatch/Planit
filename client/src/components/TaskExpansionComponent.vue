<template>
    <div class="col-5 p-4">
        <div class="fs-4 d-flex">
            <div v-if="task.isComplete">
                <i class="mdi mdi-checkbox-multiple-marked-circle"></i>
                <button class="btn complete-button-color rounded-pill text-light mx-2">{{ task.name }}</button>
            </div>
            <div v-else>
                <i class="mdi mdi-checkbox-multiple-marked-circle-outline"></i>
                <button class="btn button-color rounded-pill text-light mx-2">{{ task.name }}</button>
            </div>
            <button @click="destroyTask()" class="btn fs-3"><i class="mdi mdi-delete-empty"></i></button>
        </div>
        <div class="border-left ps-4">
            <p class="gray-color"><i class="mdi mdi-run"></i> Created - {{ task.createdAt.toLocaleDateString() }}</p>
            <div class="d-flex justify-content-between py-3 my-2">
                <span>5 Notes</span>
                <span>{{ task.weight }}<i class="mdi mdi-weight"></i></span>
            </div>
        </div>
    </div>
</template>


<script>
import { tasksService } from '../services/TasksService'
import { Task } from '../models/Task';
import Pop from '../utils/Pop';


export default {
    props: { task: { type: Task, required: true } },
    setup(props) {
        return {

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
</style>../services/TasksService