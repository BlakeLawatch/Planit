<template>
    <div class="col-12 d-flex sprint-card bg-white">
        <div class="col-5 fw-bold p-3 d-flex">
            <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#taskCollapse" aria-expanded="false"
                aria-controls="collapseExample">
                <i class="mdi mdi-rhombus-outline fs-4"></i>
            </button>

            <p class="ps-2"> S1 - {{ sprint.name }}</p>
            <p class="ms-5 secondary-color">10 <i class="mdi mdi-weight"></i></p>
        </div>
        <div class="col-7 d-flex justify-content-end p-2">
            <div class="me-3 d-flex">
                <button data-bs @click="setActiveSprint()" data-bs-toggle="modal" data-bs-target="#taskModal" type="button"
                    class="btn button-color-2 mt-2 text-light">Add Task +</button>
                <p class="secondary-color fw-bold p-3">Delete {{ sprint.name }}
                    <button @click="destroySprint()" class="btn secondary-color"><i
                            class="mdi mdi-delete-empty"></i></button>
                </p>
            </div>


            <p class="mt-2 fw-bold">1/2 Tasks Complete</p>
        </div>
    </div>
    <div class=" p-2 col-12 bg-light collapse" id="taskCollapse">
        <div v-for="task in tasks" :key="task.id">
            <TaskExpansionComponent :task="task" />
        </div>
    </div>
    <TaskForm />
</template>


<script>
import { computed } from 'vue';
import { Sprint } from '../models/Sprint';
import { sprintService } from '../services/SprintService';
import TaskExpansionComponent from './TaskExpansionComponent.vue';
import TaskForm from './TaskForm.vue';
import { AppState } from '../AppState';
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop';

export default {
    props: { sprint: { type: Sprint, required: true } },
    setup(props) {
        const route = useRoute()
        return {
            tasks: computed(() => AppState.tasks),
            route,

            async destroySprint() {
                try {
                    const wantsToDestroy = await Pop.confirm('You sure about that?')
                    if (!wantsToDestroy) {
                        return
                    }
                    await sprintService.destroySprint(props.sprint.id)
                } catch (error) {
                    Pop.error(error)
                }

            },

            setActiveSprint() {
                sprintService.setActiveSprint(props.sprint)
            }
        };
    },
    components: { TaskForm, TaskExpansionComponent }
};
</script>


<style lang="scss" scoped>
p {
    margin: 0;
}

.button-color-2 {
    background-color: #f048ae;
}
</style>