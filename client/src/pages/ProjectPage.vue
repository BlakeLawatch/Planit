<template>
    <div v-if="activeProject && activeProject.creatorId == account.id" class="container-fluid">
        <section class="row d-flex">
            <div class="col-2">

                <button class="btn button-color fs-1 text-white px-4" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#projectOffcanvas" aria-controls="offcanvasExample">P</button>
                <ProjectOffcanvas :projectProp="project" />
                <div class="my-1">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#editProfileModal"
                        class="btn button-color-3 fs-1 px-3"><i class="mdi mdi-cog main-color"></i></button>
                    <EditProfileModal />
                </div>
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
                <div class="col-8">
                    <div class="sprint-card my-2" v-for="sprint in sprints" :key="sprint.id">
                        <SprintComponent :sprint="sprint" />

                    </div>
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
import SprintComponent from '../components/SprintComponent.vue';
import { tasksService } from '../services/TasksService';
import ProjectOffcanvas from '../components/ProjectOffcanvas.vue';
import EditProfileModal from '../components/EditProfileModal.vue';




export default {
    setup() {
        onMounted(() => {
            getProjectById();
            getSprintsByProjectId()
            getTasksByProjectId()

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

        async function getTasksByProjectId() {
            try {
                const projectId = route.params.projectId
                await tasksService.getTasksByProjectId(projectId)
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
            projects: computed(() => AppState.projects),
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
    components: { SprintModal, SprintComponent, ProjectOffcanvas, EditProfileModal }
};
</script>


<style lang="scss" scoped>
.button-color {
    background-color: #a729c4;
}

.button-color-2 {
    background-color: #f048ae;
}

.button-color-3 {
    background-color: gray;
}

.sprint-card {
    border: .05rem solid #a729c4;
    box-shadow: 2px 1px 5px gray;
}
</style>../services/TasksService