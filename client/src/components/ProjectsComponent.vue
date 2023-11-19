<template>
    <div class="col-12 col-md-4">
        <router-link :to="{ name: 'Project', params: { projectId: project.id } }">
            {{ project.name }}
        </router-link>
    </div>
    <div class="col-12 col-md-4">
        <img class="rounded-circle" :src="project.creator.picture" alt="">
    </div>
    <div class="col-12 col-md-4">
        {{ project.createdAt.toLocaleDateString() }}
    </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import { Project } from '../models/Project';


export default {
    props: { project: { type: Project, required: true } },
    setup() {
        return {
            projects: computed(() => AppState.projects)
        }
    }
};
</script>



<style lang="scss" scoped>
img {
    height: 3rem;
}
</style>