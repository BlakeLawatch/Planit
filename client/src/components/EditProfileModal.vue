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
                        <h5> {{ account.title }}</h5>

                    </div>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="editAccount()">
                        <div class="d-flex justify-content-around">
                            <div class="col-5 mb-3 text-start">
                                <label for="title" class="form-label ps-2">Title</label>
                                <input v-model="editable.title" type="text" class="form-control" id="title">
                            </div>
                            <div class="col-5 mb-3 text-start">
                                <label for="name" class="form-label ps-2">Name</label>
                                <input v-model="editable.name" type="text" class="form-control" id="name" required>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <div class="col-11 mb-3 text-start">
                                <label for="picture" class="form-label ps-2">Image URL</label>
                                <input v-model="editable.picture" type="url" class="form-control" id="picture" required>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end p-2">
                            <button type="button" class="btn me-1 gray-button" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn button-color ms-1 text-white">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { computed, ref, watch } from 'vue';
import { AppState } from '../AppState';
import { accountService } from '../services/AccountService';
import { Modal } from 'bootstrap';
import Pop from '../utils/Pop';


export default {
    setup() {
        const editable = ref({})
        const account = computed(() => AppState.account)
        watch(account, () => {
            editable.value = { ...account.value }
        })
        return {
            editable,
            account,


            async editAccount() {
                try {
                    const accountData = editable.value
                    await accountService.editAccount(accountData)
                    editable.value = {}
                    Modal.getOrCreateInstance('#editProfileModal').hide()

                } catch (error) {
                    Pop.error(error)
                }

            }
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

.button-color {
    background-color: #a729c4;
    width: 10rem;
}

.gray-button {
    color: gray;
}
</style>