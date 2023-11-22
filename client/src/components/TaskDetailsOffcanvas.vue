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
                <div class="col-11">
                    <div class="full-border p-2 my-2" v-for="note in notes" :key="note">
                        <div class="d-flex my-1">
                            <img class="rounded-circle creator-img" :src="note.creator.picture" alt="">
                            <span class="pt-1 ms-1 main-color fs-6">{{ note.creator.email }}</span>
                        </div>
                        <div class="d-flex justify-content-between align-items-end">
                            <p class="fs-6">{{ note.body }}</p>
                            <button class="btn delete-color"><i class="mdi mdi-delete-empty"></i></button>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    </div>
</template>


<script>
import { computed, onMounted, ref } from 'vue';
import Pop from '../utils/Pop';
import { noteService } from '../services/NoteService'
import { AppState } from '../AppState';
import { useRoute } from 'vue-router';




export default {
    setup() {
        onMounted(() => {
            getNotesByProjectId()
        })
        const editable = ref({})
        const route = useRoute()

        async function getNotesByProjectId() {
            try {
                const projectId = route.params.projectId
                await noteService.getNotesByProjectId(projectId)
            } catch (error) {
                Pop.error(error)
            }
        }


        return {
            editable,
            route,
            notes: computed(() => AppState.notes),

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

.full-border {
    border: .1rem solid #f048ae;
}

.main-color {
    color: #a729c4;
}

.background-color {
    background-color: #a729c4;


}

.delete-color {
    background-color: #f048ae;
    max-height: 5vh;
}

.creator-img {
    max-height: 5vh;
    max-width: 5vw;
}
</style>