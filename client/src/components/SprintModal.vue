<template>
    <div class="modal fade" id="sprintModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header shadow">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create Sprint</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="createSprint()">
                        <div class="mb-3 text-start">
                            <label for="name" class="form-label ps-2">Name</label>
                            <input v-model="editable.name" type="text" class="form-control" id="name" placeholder="Name...">
                        </div>
                        <div class="text-end">
                            <button type="button" class="btn" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn button-color text-white">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';
import Pop from '../utils/Pop';
import { sprintService } from '../services/SprintService.js'
import { Modal } from 'bootstrap';
import { useRoute } from 'vue-router';


export default {
    setup() {
        const editable = ref({})
        const route = useRoute()
        return {
            editable,

            async createSprint() {
                try {
                    const sprintData = editable.value
                    sprintData.projectId = route.params.projectId
                    await sprintService.createSprint(sprintData)
                    editable.value = {}
                    Modal.getOrCreateInstance('#sprintModal').hide()
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
    background-color: #a729c4;
}

.shadow {
    box-shadow: 4px 0px 30px black;
}
</style>