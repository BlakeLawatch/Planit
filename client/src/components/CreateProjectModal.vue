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
                    <form>
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Name...">
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <div>
                                <textarea name="description" id="" cols="100" rows="4"
                                    placeholder="Description..."></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn" data-bs-dismiss="modal">Cancel</button>
                    <!-- <router-link to="ProjectsPage"> -->
                    <button type="submit" class="btn button-color text-white">Create</button>
                    <!-- </router-link> -->
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped>
.shadow {
    box-shadow: 4px 0px 30px black;
}

.button-color {
    background-color: #a729c4;
    ;
}
</style>