<template>
    <div class="offcanvas offcanvas-start bg-white p-4" tabindex="-1" id="projectOffcanvas"
        aria-labelledby="offcanvasExampleLabel">
        <div class="text-end">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div>
            <h3 class="main-color">Projects</h3>
            <p>for {{ account.email }}</p>
        </div>
        <div class="secondary-color d-flex justify-content-around border-bottom mt-3">
            <h6>NAME</h6>
            <H6>STARTED</H6>
        </div>
        <div v-for="project in projects" :key="project.id" class="d-flex justify-content-around">
            <h6>{{ project.name }}</h6>
            <H6>{{ project.createdAt.toLocaleDateString() }}</H6>
        </div>
    </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import { Project } from '../models/Project';



export default {
    setup() {


        return {
            account: computed(() => AppState.account),
            projects: computed(() => AppState.projects)
        }
    }
};
</script>


<style lang="scss" scoped>
.border-bottom {
    border-bottom: .1rem solid gray;
}
</style>