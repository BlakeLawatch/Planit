<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createProject">
          Create Project
        </button>
      </div>
    </section>
  </div>
  <CreateProjectModal />
</template>



<script>
import CreateProjectModal from '../components/CreateProjectModal.vue';

export default {
  setup() {
    return {};
  },
  components: { CreateProjectModal }
}
</script>

<style scoped lang="scss"></style>
