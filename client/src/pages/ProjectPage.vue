<template>
    <div v-if="activeProject" class="container-fluid">
        <section class="row d-flex">
            <div class="col-2">
                <h3>OFFCANVAS BUTTON</h3>
            </div>
            <div class="col-10">
                <div class="d-flex">
                    <h1 class="mb-0 pt-2">{{ activeProject.name }}</h1>
                    <button v-if="activeProject.creatorId == account.id" @click="destroyProject()"
                        class="btn secondary-color px-5"><i class="mdi mdi-delete-circle-outline fs-1"></i></button>
                </div>
                <div>
                    <p>{{ activeProject.description }}</p>
                </div>
            </div>
            <section class="row">
                <div class="col-2"></div>
                <div class="col-5">
                    <h3 class="main-color">Sprints</h3>
                    <p>Group your tasks into sprints for over-arching collections for better organization</p>
                </div>
                <div class="col-5 text-center">
                    <button class="btn button-color text-light" data-bs-toggle="modal" data-bs-target="#sprintModal">Add
                        Sprint</button>
                    <SprintModal />
                </div>
            </section>
            <section class="row justify-content-center">
                <div class="col-8 sprint-card">
                    {{ sprints }}
                </div>
            </section>
        </section>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';

import { AppState } from '../AppState';
import { useRoute, useRouter } from 'vue-router';
import { projectsService } from '../services/ProjectService';
import Pop from '../utils/Pop';
import SprintModal from '../components/SprintModal.vue';
import { sprintService } from '../services/SprintService';




export default {
    setup() {
        onMounted(() => {
            getProjectById();
            getSprintsByProjectId()
        });
        const route = useRoute();
        const router = useRouter();
        async function getProjectById() {
            try {
                const projectId = route.params.projectId;
                await projectsService.getProjectById(projectId);
            }
            catch (error) {
                Pop.error(error);
            }
        }

        async function getSprintsByProjectId() {
            try {
                const projectId = route.params.projectId
                await sprintService.getSprintsByProjectId(projectId)
            } catch (error) {
                Pop.error(error)
            }
        }

        return {
            route,
            router,
            activeProject: computed(() => AppState.activeProject),
            account: computed(() => AppState.account),
            sprints: computed(() => AppState.sprints),
            async destroyProject() {
                try {
                    const wantToDelete = await Pop.confirm('You sure about that?');
                    if (!wantToDelete) {
                        return;
                    }
                    const projectId = route.params.projectId;
                    await projectsService.destroyProject(projectId);
                    Pop.success('Project deleted');
                    router.push({ name: 'Home' });
                }
                catch (error) {
                    Pop.error(error);
                }
            }
        };
    },
    components: { SprintModal }
};
</script>


<style lang="scss" scoped>
.button-color {
    background-color: #a729c4;
}

.sprint-card {
    border: .1rem solid #a729c4;
}
</style>