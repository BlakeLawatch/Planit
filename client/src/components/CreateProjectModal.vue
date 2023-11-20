<template>
    <div class="modal fade box-shadow" id="createProject" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header shadow">
                    <h1 class="modal-title fs-5 main-color" modal id="staticBackdropLabel">Create Project</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="createProject()">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input v-model="editable.name" type="text" class="form-control" id="name" placeholder="Name...">
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <div>
                                <textarea v-model="editable.description" name="description" id="" cols="50" rows="4"
                                    placeholder="Description..."></textarea>
                            </div>
                        </div>
                        <button type="button" class="btn" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn button-color text-white">Create</button>
                    </form>
                </div>


            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { projectsService } from '../services/ProjectService';
import { Modal } from 'bootstrap';
import Pop from '../utils/Pop';


export default {
    setup() {
        const editable = ref({})
        const router = useRouter()
        return {
            editable,

            async createProject() {
                try {
                    const projectData = editable.value
                    const project = await projectsService.createProject(projectData)
                    Modal.getOrCreateInstance('#createProject').hide()
                    editable.value = {}
                    router.push({ name: 'Project', params: { projectId: project.id } })

                } catch (error) {
                    Pop.error(error)
                }
            }

        }
    }
};
</script>


<style lang="scss" scoped>
.shadow {
    box-shadow: 4px 0px 30px black;
}

.button-color {
    background-color: #a729c4;
}
</style>