<template>
    <div class="modal fade" id="editProfileModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="main-color fs-5">Edit Account</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="d-flex justify-content-center">
                    <img class="rounded-circle border-around" :src="account.picture" alt="" :title="account.name">
                    <div class="ms-3">
                        <h3 class="main-color">{{ account.name }}</h3>
                        <h5> Job: {{ account.job }}</h5>

                    </div>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="d-flex justify-content-around">
                            <div class="col-5 mb-3 text-start">
                                <label for="title" class="form-label ps-2">Title</label>
                                <input type="number" class="form-control" id="title" required placeholder="0">
                            </div>
                            <div class="col-5 mb-3 text-start">
                                <label for="name" class="form-label ps-2">Name</label>
                                <input type="number" class="form-control" id="name" required placeholder="0">
                            </div>
                        </div>
                        <div class="col-5 mb-3 text-start">
                            <label for="imageUrl" class="form-label ps-2">Image URL</label>
                            <input type="url" class="form-control" id="imageUrl" required placeholder="0">
                        </div>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState';


export default {
    setup() {
        return {
            account: computed(() => AppState.account)
        }
    }
};
</script>


<style lang="scss" scoped>
.border-around {
    border: .1rem solid #a729c4;
}

img {
    max-width: 5rem;
    max-height: 5rem;
}
</style>