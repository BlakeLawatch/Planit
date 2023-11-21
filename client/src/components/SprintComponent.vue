<template>
    <div class="col-12 d-flex sprint-card bg-white">
        <div class="col-6 fw-bold p-3 d-flex">
            <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#taskCollapse" aria-expanded="false"
                aria-controls="collapseExample">
                <i class="mdi mdi-rhombus-outline fs-4"></i>
            </button>

            <p class="ps-2"> S1 - {{ sprint.name }}</p>
            <p class="ms-5 secondary-color">10 <i class="mdi mdi-weight"></i></p>
        </div>
        <div class="col-6 d-flex justify-content-end p-2">
            <div class="me-3">
                <button data-bs @click="setActiveSprint()" data-bs-toggle="modal" data-bs-target="#taskModal" type="button"
                    class="btn button-color-2 mt-2 text-light">Add Task +</button>
            </div>
            <p class="mt-2 fw-bold">1/2 Tasks Complete</p>
        </div>
    </div>
    <div class="col-12 bg-light collapse" id="taskCollapse">
        Task component will go here
    </div>
    <TaskForm />
</template>


<script>
import { Sprint } from '../models/Sprint';
import { sprintService } from '../services/SprintService';
import TaskForm from './TaskForm.vue';

export default {
    props: { sprint: { type: Sprint, required: true } },
    setup(props) {
        return {

            setActiveSprint() {
                sprintService.setActiveSprint(props.sprint)
            }
        };
    },
    components: { TaskForm }
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