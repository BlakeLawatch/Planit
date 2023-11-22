<template>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="taskDetails" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <section class="row justify-content-center">
                <div class=" col-8 border-notes text-center">
                    <h2 class="main-color">Notes</h2>
                </div>
                <div class="col-12">
                    <p>Add a Note</p>
                    <form @submit.prevent="createNote()">
                        <div class="mb-3 d-flex">
                            <div class="d-flex">
                                <label for="body" class="form-label"></label>
                                <textarea v-model="editable.body" name="body" id="" cols="25" rows="2"
                                    placeholder="Say Something..."></textarea>
                            </div>
                            <div>
                                <button type="submit" class="btn background-color text-white p-4"><i
                                        class="mdi mdi-send"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';
import Pop from '../utils/Pop';
import { noteService } from '../services/NoteService'
import { AppState } from '../AppState';




export default {
    setup() {
        const editable = ref({})


        return {
            editable,

            async createNote() {
                try {
                    const noteData = editable.value
                    noteData.projectId = AppState.activeProject.id
                    noteData.taskId = AppState.activeTask.id
                    await noteService.createNote(noteData)
                    editable.value = {}
                } catch (error) {
                    Pop.error(error)
                }

            }
        }
    }
};
</script>


<style lang="scss" scoped>
.border-notes {
    border-bottom: .1rem solid gray;
}

.main-color {
    color: #a729c4;
}

.background-color {
    background-color: #a729c4;

}
</style>