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
        </section>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';

import { AppState } from '../AppState';
import { useRoute, useRouter } from 'vue-router';
import { projectsService } from '../services/ProjectService';
import Pop from '../utils/Pop';




export default {
    setup() {
        onMounted(() => {
            getProjectById()
        })
        const route = useRoute()
        const router = useRouter()

        async function getProjectById() {
            try {
                const projectId = route.params.projectId
                await projectsService.getProjectById(projectId)

            } catch (error) {
                Pop.error(error)
            }
        }

        return {
            route,
            router,
            activeProject: computed(() => AppState.activeProject),
            account: computed(() => AppState.account),

            async destroyProject() {
                try {
                    const wantToDelete = await Pop.confirm('You sure about that?')
                    if (!wantToDelete) {
                        return
                    }
                    const projectId = route.params.projectId
                    await projectsService.destroyProject(projectId)
                    Pop.success('Project deleted')
                    router.push({ name: 'Home' })
                } catch (error) {
                    Pop.error(error)
                }
            }
        };
    },
};
</script>


<style lang="scss" scoped></style>